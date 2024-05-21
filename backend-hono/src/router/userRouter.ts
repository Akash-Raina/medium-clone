import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput } from "@rainahaina/medium-common";

export const userRouter = new Hono<{Bindings:{
  DATABASE_URL: string,
  JWT_SECRET: string
}}>()

userRouter.post('/signup', async(c) => {

  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message: "Wrong Inputs"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try{
    console.log(body.email + " " + body.password)
    const user = await prisma.user.create({
      data : {
        email: body.email,
        password: body.password,
        name: body.name
      }
    })
    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET);
    return c.text(jwt);
  }
  catch(e){
    c.status(411);
    console.log(e);
    return c.text('Invalid');
  }
})

userRouter.post('/signin', async(c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message: "Wrong Inputs"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try{
    console.log(body.email + " " + body.password)
    const user = await prisma.user.findFirst({
      where : {
        email: body.email,
        password: body.password,
      }
    })
    if(!user){
      c.status(403);
      return c.text('Wrong credentials')
    }
    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET);
    return c.text(jwt);
  }
  catch(e){
    c.status(411);
    console.log(e);
    return c.text('Invalid');
  }
})