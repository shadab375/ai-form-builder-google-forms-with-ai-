import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:ULW9FyIzuGM1@ep-gentle-unit-a57ov6rk-pooler.us-east-2.aws.neon.tech/ai-form-builder?sslmode=require',
  }
});