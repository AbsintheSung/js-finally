import axios from "axios";
let token = '3MqEVCXgUfWPBU1z05uHAjqjnzi2'

const httpInstanceAdmin = axios.create({
    baseURL:'https://livejs-api.hexschool.io/api/livejs/v1/admin',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
})

//請求攔截
httpInstanceAdmin.interceptors.request.use(function (config) {
    config.headers.Authorization = token
    console.log('config in request interceptor', config);

    return config;
  }, function (error) {

    return Promise.reject(error);
  });

//回應攔截
httpInstanceAdmin.interceptors.response.use(function (response) {


    return response;
  }, function (error) {

    if(error.request.status === 404){
        // error.message = '請確認 API Path 是否已申請 (っ˘ω˘ς )'
    }
    return Promise.reject(error);
  });


export default httpInstanceAdmin