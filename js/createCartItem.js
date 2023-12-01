function tdTitle(obj){
    let td_title =  document.createElement('td')
    let div = document.createElement('div')
    let img = new Image();
    let p_text = document.createElement('p')
    div.classList.add('cardItem-title')
    img.src=`${obj.images}`
    img.alt="圖片"
    p_text.textContent=`${obj.title}`
    div.appendChild(img)
    div.appendChild(p_text)
    td_title.appendChild(div)
    return td_title
}
function tdDelBtn(id){
    let td_del =  document.createElement('td')
    let a_link = document.createElement('a')
    let loadBtn = createLoadingBtn()
    td_del.classList.add('discardBtn')
    a_link.href='#'
    a_link.classList.add('material-icons','a-delbtn')
    a_link.textContent = 'clear'
    a_link.setAttribute('data-delcartid',`${id}`)
    a_link.setAttribute('data-delbtn',`delOneData`)
    td_del.appendChild(a_link)
    td_del.appendChild(loadBtn)
    return td_del
}
function createLoadingBtn(){
    /*
        <button class="spinner-border text-success disabled bg-black" role="status">
            <span class="visually-hidden">Loading...</span>
        </button> 
    */
   let btn = document.createElement('button')
   let spanText = document.createElement('span')
   btn.classList.add('loadind-cart','spinner-border','text-dark')
   btn.role ='status'
   spanText.classList.add('visually-hidden')
   spanText.textContent = 'Loading...'
   btn.appendChild(spanText)
   return btn
}


export function createShopCartItem(array){
    let trBox = document.createElement('tr');
    let td_title = tdTitle(array.product)
    let td_price =  document.createElement('td')
    let td_count =  document.createElement('td')
    let td_total =  document.createElement('td')
    let td_del =  tdDelBtn(array.id)
    trBox.classList.add('cartItem')
    td_price.textContent=`NT$${array.product.price.toLocaleString()}`
    td_count.textContent=array.quantity
    td_total.textContent=`NT$${array.product.price.toLocaleString()}`
    trBox.appendChild(td_title)
    trBox.appendChild(td_price)
    trBox.appendChild(td_count)
    trBox.appendChild(td_total)
    trBox.appendChild(td_del)
    return trBox
}
