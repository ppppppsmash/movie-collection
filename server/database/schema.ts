// https://orm.drizzle.team/learn/tutorials/drizzle-with-supabase
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  specialId: text('specialId').notNull().unique(),
  email: text('email').notNull().unique(),
})

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;