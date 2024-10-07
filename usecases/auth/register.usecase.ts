'use server'

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { AuthErrors } from "@/errors/auth.errors";
import { AuthRegisterDTO } from "@/schemas/auth.schema";
import { UsecaseResult } from "@/shared/types";
import { hash } from "@node-rs/argon2";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

type AuthRegisterResult = UsecaseResult<undefined, AuthErrors>

export async function authRegisterUsecase(dto: AuthRegisterDTO): Promise<AuthRegisterResult> {
    const users = await db.select().from(usersTable).where(eq(usersTable.email, dto.email)).limit(1);

    if (users.length > 0) {
        return { error: AuthErrors.DuplicateCredentials }
    }

    const hashedPassword = await hash(dto.password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1
    })

    await db.insert(usersTable).values({
        ...dto,
        password: hashedPassword,
    }).execute();

    return redirect('/login')
}