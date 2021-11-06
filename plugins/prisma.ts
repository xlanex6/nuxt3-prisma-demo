import PrismaClientPkg from '@prisma/client'
const PrismaClient = PrismaClientPkg.PrismaClient


// prisma client 
const prisma = new PrismaClient(
  {
    log: ['query'],
  }
)

// https://github.com/prisma/prisma/issues/6219
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {

  // bind prisma client to nuxt via $prisma
  nuxtApp.provide('prisma', prisma);

  //  when NUXT is done => 
  //  await prisma.$disconnect() to avoid multiple PrismaClient instance
})


