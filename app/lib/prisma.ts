import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// Create a Postgres pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Singleton for Next.js dev hot reload
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

// Construct PrismaClient with adapter
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaPg(pool),
    log: ["query", "error", "warn"],
  });

// Save in globalThis during dev to avoid multiple instances
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
