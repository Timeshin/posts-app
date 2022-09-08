import axios from "axios";

const authInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })

export default authInstance
