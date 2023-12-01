import httpInstance from '../utils/user_http';
let urlPath = 'absinthe'

export function getProductServer(){
    return httpInstance({
        url:`/${urlPath}/products`,
        method:'GET'
    })
}

export function addShopCartServer(sid,count){
    return httpInstance({
        url:`/${urlPath}/carts`,
        method:'POST',
        data:{
            "data":{
                productId:sid,
                quantity:count
            }
        }
    })
}


export function getShopCartServer(){
    return httpInstance({
        url:`/${urlPath}/carts`,
        method:'GET',
    })
}

export function delShopCartServer(productId){
    return httpInstance({
        url:`/${urlPath}/carts/${productId}`,
        method:'DELETE',
    })
}
export function delAllShopCartServer(){
    return httpInstance({
        url:`/${urlPath}/carts`,
        method:'DELETE',
    })
}


export function sendUserDate({name,tel,email,address,payment}){
    console.log({ data:{"data":{
        "user":{
            name:name,
            tel:tel,
            email:email,
            address:address,
            payment:payment,
        }
    }
        
    }})
    return httpInstance({
        url:`/${urlPath}/orders`,
        method:'POST',
        data:{
            "data":{
                "user":{
                    name:name,
                    tel:tel,
                    email:email,
                    address:address,
                    payment:payment,
                }
            }  
        }
    })
}
