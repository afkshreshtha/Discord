import {PrismaClient} from "@prisma/client"

declare global{
    var prsima: PrismaClient | undefined
}

export const db = globalThis.prsima || new PrismaClient()

if(process.env.NODE_ENV  !== 'production') globalThis.prsima = db
