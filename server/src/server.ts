import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors, {
  origin: true,
})
app.register(appRoutes)

app.listen({
  port: 3333,
  host: '192.168.1.206', //local IP > usar o mesmo IP na canexão do mobile (axios.ts)
}).then((url) => {
  console.log(`HTTP Server running on ${url}`)
})
