'use server';

import { lucia } from "@/auth";
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { AuthErrors } from "@/errors/auth.errors";
import { AuthLoginDTO } from "@/schemas/auth.schema";
import { UsecaseResult } from "@/shared/types";
import { verify } from '@node-rs/argon2';
import { and, eq, isNull } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type AuthLoginResult = UsecaseResult<boolean, AuthErrors>

export async function authLoginUsecase(dto: AuthLoginDTO): Promise<AuthLoginResult> {
    const users = await db.select().from(usersTable).where(
        and(
            eq(usersTable.email, dto.email),
            isNull(usersTable.deletedAt)
        )).limit(1)


    if (users.length === 0) {
        return { error: AuthErrors.InvalidCredentials }
    }

    const user = users[0];

    const isMatch = await verify(user.password, dto.password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1
    })

    if (!isMatch) {
        return { error: AuthErrors.InvalidCredentials }
    }

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return redirect('/app')
}