import axios from "axios";

const httpInstance = axios.create({
    baseURL:'https://livejs-api.hexschool.io/api/livejs/v1/customer',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
})


export default httpInstance


