import axios from "axios";

const httpInstance = axios.create({
    baseURL:'https://livejs-api.hexschool.io/api/livejs/v1/customer',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
})

httpInstance.interceptors.request.use(function (config) {


    // console.log('config in request interceptor', config);

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
httpInstance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    // console.log('response in request interceptor', response);

    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // console.log(error.request.status)
    if(error.request.status === 404){
        // error.message = '請確認 API Path 是否已申請 (っ˘ω˘ς )'
    }
    return Promise.reject(error);
  });

export default httpInstance


