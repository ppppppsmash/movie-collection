CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"specialId" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_specialId_unique" UNIQUE("specialId"),
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
