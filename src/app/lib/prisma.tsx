import { PrismaClient } from "@/generated/prisma/client"

const prismaClientSingleton = () => {
    return new PrismaClient();
};

declare const globalThis: {
    prosimaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prosimaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prosimaGlobal = prisma;