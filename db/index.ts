import { env } from '@/env'
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import * as schema from './schema'

const queryClient = postgres(env.DATABASE_URL)


export const db = drizzle(queryClient, { schema: schema })

export const drizzleAdapter = new DrizzlePostgreSQLAdapter(db, schema.sessionsTable, schema.usersTable)