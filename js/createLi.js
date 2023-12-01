function createLoadingBtn(){
    /*
        <button class="spinner-border text-success disabled bg-black" role="status">
            <span class="visually-hidden">Loading...</span>
        </button> 
    */
   let btn = document.createElement('button')
   let spanText = document.createElement('span')
   btn.classList.add('loadind-btn','spinner-border','text-white','bg-dark')
   btn.role ='status'
   spanText.classList.add('visually-hidden')
   spanText.textContent = 'Loading...'
   btn.appendChild(spanText)
   return btn
}


export function createLi(obj){

    let Li = document.createElement('li')
    let title_4 = document.createElement('h4')
    let title_3 = document.createElement('h3')
    let del = document.createElement('del')
    let p_text = document.createElement('p')
    let a_link = document.createElement('a')
    let img = new Image();
    let loadingBtn = createLoadingBtn()
    title_4.textContent='新品'
    title_4.classList.add('productType')
    title_3.textContent = obj.title
    img.src=obj.images
    img.alt='圖片'
    a_link.href=''
    a_link.classList.add('addCardBtn')
    a_link.setAttribute('data-addcartid',`${obj.id}`)
    a_link.textContent='加入購物車'
    a_link.appendChild(loadingBtn)
    del.classList.add('originPrice')
    del.textContent =`NT$ ${obj.origin_price.toLocaleString()}`
    p_text.classList.add('nowPrice')
    p_text.textContent =`NT$ ${obj.price.toLocaleString()}`
    Li.classList.add('productCard')
    Li.appendChild(title_4)
    Li.appendChild(img)
    Li.appendChild(a_link)
    Li.appendChild(title_3)
    Li.appendChild(del)
    Li.appendChild(p_text)
    return Li 
}




// export function mountListDom(obj,dom){
//     let li = createLi(obj)
//     return dom.appendChild(li)
// }

   