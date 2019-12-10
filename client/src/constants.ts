export const
  { NODE_ENV, PUBLIC_URL } = process.env,
  API_ENDPOINT = NODE_ENV === `development` ? `http://localhost:3002` : ``