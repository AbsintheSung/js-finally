import httpInstanceAdmin from '../utils/admin_http';
let urlPath = 'absinthe'
// console.log(import.meta.env.VITE_APP_PATH)

export function getOrderAdmin(){
    return httpInstanceAdmin({
        url:`/${urlPath}/orders`,
        method:'GET',
        
    })
}

export function reviseOrderAdmin(sid,painStatus){
    return httpInstanceAdmin({
        url:`/${urlPath}/orders`,
        method:'PUT',
        data:{
            "data":{
                id:sid,
                paid:painStatus
            }
        }
        
    })
}


export function delOneOrderAdmin(id){
    return httpInstanceAdmin({
        url:`/${urlPath}/orders/${id}`,
        method:'DELETE',
    })
}

export function delAllOrderAdmin(){
    return httpInstanceAdmin({
        url:`/${urlPath}/orders`,
        method:'DELETE',
    })
}