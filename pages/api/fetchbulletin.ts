import type { NextApiRequest, NextApiResponse } from 'next'
import { Bullet } from '../../typings'

type Data = {
  bullets: Bullet[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    bullets: [
        {
          name: "hello",
          message: "World",
          date: new Date().toISOString()
        }, {
          name: "hello2",
          message: "World2",
          date: new Date(0).toISOString()
        }, {
          name: "hello3",
          message: "World3",
          date: new Date(500000).toISOString()
      }
    ]
  })
}
