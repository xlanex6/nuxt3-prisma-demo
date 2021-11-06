import PrismaClientPkg from '@prisma/client'
const {PrismaClient} = PrismaClientPkg

const prisma = new PrismaClient({
  log: ['query']
})


export default async (req, res) => {
   console.log('server side');
  return await prisma.post.findMany()
}
