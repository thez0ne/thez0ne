import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// TODO: setup api base with info about how api works?

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'test' })
}