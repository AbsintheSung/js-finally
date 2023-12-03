let fragment = document.createDocumentFragment();
function createTitleContent(images,title){

    let div = document.createElement('div')
    let img = new Image();
    let p_text = document.createElement('p')
    div.classList.add('cardItem-title')
    img.src=`${images}`
    img.alt="圖片"
    p_text.textContent=`${title}`
    fragment.appendChild(img)
    fragment.appendChild(p_text)
    div.appendChild(fragment)
    return div
}
function tdTitle(obj){
    let td_title =  document.createElement('td')
    let div = createTitleContent(obj.images,obj.title)

    fragment.appendChild(div)
    td_title.appendChild(fragment)
    return td_title
}
function tdDelBtn(id){
    let fragment = document.createDocumentFragment();
    let td_del =  document.createElement('td')
    let a_link = document.createElement('a')
    let loadBtn = createLoadingBtn()
    td_del.classList.add('discardBtn')
    a_link.href='#'
    a_link.classList.add('material-icons','a-delbtn')
    a_link.textContent = 'clear'
    a_link.setAttribute('data-delcartid',`${id}`)
    a_link.setAttribute('data-delbtn',`delOneData`)

    fragment.appendChild(a_link)
    fragment.appendChild(loadBtn)
    td_del.appendChild(fragment)
    return td_del
}
function createLoadingBtn(){

    let btn = document.createElement('button')
    let spanText = document.createElement('span')
    btn.classList.add('loadind-cart','spinner-border','text-dark')
    btn.role ='status'
    spanText.classList.add('visually-hidden')
    spanText.textContent = 'Loading...'


    fragment.appendChild(spanText)
    btn.appendChild(fragment)
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
    td_price.textContent=`NT$${ array.product.price.toLocaleString() }`
    td_count.textContent=array.quantity
    td_total.textContent=`NT$${  (array.product.price*array.quantity).toLocaleString()}`

    fragment.appendChild(td_title)
    fragment.appendChild(td_price)
    fragment.appendChild(td_count)
    fragment.appendChild(td_total)
    fragment.appendChild(td_del)
    trBox.appendChild(fragment)
    return trBox
}
