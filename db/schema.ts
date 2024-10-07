import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const usersTable = pgTable('users', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    email: varchar('email').unique().notNull(),
    password: text('password').notNull(),
    name: varchar('name').notNull(),
    deletedAt: timestamp('deleted_at', { withTimezone: true, mode: 'date' })
})

export const sessionsTable = pgTable('sessions', {
    id: text('id').primaryKey(),
    userId: varchar('userId').notNull().references(() => usersTable.id),
    expiresAt: timestamp("expires_at", { withTimezone: true, mode: "date" }).notNull()
})