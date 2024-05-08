// https://orm.drizzle.team/learn/tutorials/drizzle-with-supabase
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  specialId: text('specialId').notNull().unique(),
  email: text('email').notNull().unique(),
})

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;