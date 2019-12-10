import 'dotenv/config'

export const
  { PORT, NODE_ENV, DATABASE_URL, SECRET } = process.env,
  PRODUCTION = NODE_ENV === `production`
