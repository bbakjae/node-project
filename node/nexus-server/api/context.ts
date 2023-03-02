import { Db, db } from "./db"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export interface Context {
    db: Db,
    prisma: PrismaClient
}

export const context = {
    db,
    prisma
}