import httpInstanceAdmin from '../utils/admin_http';
let urlPath = import.meta.env.VITE_APP_PATH
// console.log(import.meta.env.VITE_APP_PATH)

export function getOrderAdmin(){
    return httpInstanceAdmin({
        url:`/${urlPath}/orders`,
        method:'GET',
        
    })
}
