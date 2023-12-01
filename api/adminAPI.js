import httpInstanceAdmin from '../utils/admin_http';
let urlPath = 'absinthe'


export function getOrderAdmin(){
    return httpInstanceAdmin({
        url:`/${urlPath}/orders`,
        method:'GET',
        
    })
}
