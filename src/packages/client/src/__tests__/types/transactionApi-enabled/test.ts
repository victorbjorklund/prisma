import { PrismaClient } from '@prisma/client'

// tslint:disable

// This file will not be executed, just compiled to check if the typings are valid
async function main() {
  const prisma = new PrismaClient()
  await prisma.$transaction([
    prisma.user.findMany(),
    prisma.$queryRaw`SELECT 1`,
  ])
}

main().catch((e) => {
  console.error(e)
})
