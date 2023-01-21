import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.1.206:3333' //utilizando o IP local setado no server (server.ts)
})