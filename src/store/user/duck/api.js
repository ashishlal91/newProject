import axios from "axios"

const HOSTNAME = process.env.API_HOSTNAME

export const getClubs = _ => {
  return new Promise(async (resolve, reject) => {
    const data = await axios.get(`${HOSTNAME}/session/login`)
    resolve(data)
  })
}
