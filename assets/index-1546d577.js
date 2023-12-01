import{a as Z}from"./axios-55335edb.js";const S=Z.create({baseURL:"https://livejs-api.hexschool.io/api/livejs/v1/customer",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"}});let v="absinthe";function tt(){return S({url:`/${v}/products`,method:"GET"})}function et(n,a){return S({url:`/${v}/carts`,method:"POST",data:{data:{productId:n,quantity:a}}})}function nt(){return S({url:`/${v}/carts`,method:"GET"})}function at(n){return S({url:`/${v}/carts/${n}`,method:"DELETE"})}function lt(){return S({url:`/${v}/carts`,method:"DELETE"})}let i=document.createDocumentFragment();function dt(n,a){let d=document.createElement("div"),o=new Image,c=document.createElement("p");return d.classList.add("cardItem-title"),o.src=`${n}`,o.alt="圖片",c.textContent=`${a}`,i.appendChild(o),i.appendChild(c),d.appendChild(i),d}function rt(n){let a=document.createElement("td"),d=dt(n.images,n.title);return i.appendChild(d),a.appendChild(i),a}function ot(n){let a=document.createDocumentFragment(),d=document.createElement("td"),o=document.createElement("a"),c=ct();return d.classList.add("discardBtn"),o.href="#",o.classList.add("material-icons","a-delbtn"),o.textContent="clear",o.setAttribute("data-delcartid",`${n}`),o.setAttribute("data-delbtn","delOneData"),a.appendChild(o),a.appendChild(c),d.appendChild(a),d}function ct(){let n=document.createElement("button"),a=document.createElement("span");return n.classList.add("loadind-cart","spinner-border","text-dark"),n.role="status",a.classList.add("visually-hidden"),a.textContent="Loading...",i.appendChild(a),n.appendChild(i),n}function it(n){let a=document.createElement("tr"),d=rt(n.product),o=document.createElement("td"),c=document.createElement("td"),g=document.createElement("td"),u=ot(n.id);return a.classList.add("cartItem"),o.textContent=`NT$${n.product.price.toLocaleString()}`,c.textContent=n.quantity,g.textContent=`NT$${n.product.price.toLocaleString()}`,i.appendChild(d),i.appendChild(o),i.appendChild(c),i.appendChild(g),i.appendChild(u),a.appendChild(i),a}let h=document.createDocumentFragment();function st(){let n=document.createElement("button"),a=document.createElement("span");return n.classList.add("loadind-btn","spinner-border","text-white","bg-dark"),n.role="status",a.classList.add("visually-hidden"),a.textContent="Loading...",h.appendChild(a),n.appendChild(h),n}function ut(n){let a=document.createElement("li"),d=document.createElement("h4"),o=document.createElement("h3"),c=document.createElement("del"),g=document.createElement("p"),u=document.createElement("a"),m=new Image,L=st();return d.textContent="新品",d.classList.add("productType"),o.textContent=n.title,m.src=n.images,m.alt="圖片",u.href="",u.classList.add("addCardBtn"),u.setAttribute("data-addcartid",`${n.id}`),u.textContent="加入購物車",u.appendChild(L),c.classList.add("originPrice"),c.textContent=`NT$ ${n.origin_price.toLocaleString()}`,g.classList.add("nowPrice"),g.textContent=`NT$ ${n.price.toLocaleString()}`,a.classList.add("productCard"),h.appendChild(d),h.appendChild(m),h.appendChild(u),h.appendChild(o),h.appendChild(c),h.appendChild(g),a.appendChild(h),a}(function(){let n=document.querySelector(".productWrap"),a=document.querySelector(".shoppingCart-table"),d=document.querySelector(".tbody"),o=document.querySelector(".productSelect"),c=document.querySelector(".final-total"),g=document.querySelector(".discardAllBtn"),u=document.querySelector("form"),m=document.querySelectorAll(".orderInfo-input"),L=document.querySelectorAll(".orderInfo-message"),O=document.querySelector(".orderInfo-btn"),q=document.querySelector(".show-cart-table"),B=document.querySelector(".show-no-cart"),x=[],b=[],D=[],T=[],p=[],$=[],y=[],E=!0,f=!0,C=document.createDocumentFragment();function P(t,e){t.forEach(function(l){let r=ut(l);C.appendChild(r)}),e.appendChild(C)}function F(t){t.forEach(function(e,l){e!=null?b[l].style.display="block":b[l].style.display="none"})}function w(t){t?T.forEach(function(e){e.classList.remove("add-loading")}):T.forEach(function(e){e.classList.add("add-loading")})}function k(t,e){let l=a.getElementsByTagName("tr").length-1,r=a.getElementsByTagName("tr")[l];t.forEach(function(s){let Y=it(s);C.appendChild(Y)}),e.insertBefore(C,r)}function R(){let t=a.getElementsByTagName("tr").length-1,e=a.getElementsByTagName("tr")[0],l=a.getElementsByTagName("tr")[t];for(;d.firstChild;)d.removeChild(d.firstChild);C.appendChild(e),C.appendChild(l),d.appendChild(C)}function N(t){t.length===0?(q.style.display="none",B.style.display="block"):(q.style.display="block",B.style.display="none")}function I(){R(),k(p,d),N(p),$=Array.from(document.querySelectorAll(".loadind-cart")),y=Array.from(document.querySelectorAll(".a-delbtn"))}function _(){L.forEach(function(t){t.textContent=""})}function G(t){D[t].style.display="block"}function M(t){D[t].style.display="none"}function V(t){$[t].style.display="block",y[t].style.display="none"}function A(t){t?y.forEach(function(e){e.classList.remove("del-loading")}):y.forEach(function(e){e.classList.add("del-loading")})}function z(){$.forEach(function(t){t.style.display="block"}),y.forEach(function(t){t.style.display="none"})}function Q(t){let e={},l=p.find(function(r){return r.product.id===t});return l?(e.id=t,e.quantity=l.quantity+1):(e.id=t,e.quantity=1),e}function U(t,e){return e.map(function(r,s){if(r.category===`${t}`)return s})}function W(t){let e=x.findIndex(function(l){return l.id===t});return console.log(e,D),e}function j(t){return p.findIndex(function(l){return l.id===t})}n.addEventListener("click",async function(t){t.preventDefault();let e=t.target.getAttribute("data-addcartid");if(t.target.getAttribute("class")==="addCardBtn")if(E){let l=W(e),r=Q(e);E=!1,G(l),w(E);try{let s=await et(r.id,r.quantity);console.log("新增購物車項目回應",s),p=s.data.carts,E=!0,I(),M(l),w(E),c.textContent=`NT$ ${s.data.finalTotal.toLocaleString()}`}catch{M(l),E=!0}}else console.log("我還在跑，慢點再點")}),o.addEventListener("change",function(t){let e=t.target.value;if(t.target.value==="全部")b.forEach(function(l){l.style.display="block"});else{let l=U(e,x);F(l)}}),a.addEventListener("click",async function(t){t.preventDefault();let e=t.target.getAttribute("data-delcartid");if(t.target.getAttribute("data-delBtn")==="delOneData"&&f){f=!1,V(j(e)),A(f);try{let r=await at(e);console.log("刪除單筆購物車項目回應",r.data),p=r.data.carts,I(),f=!0,A(f),c.textContent=`NT$ ${r.data.finalTotal.toLocaleString()}`}catch{}}}),g.addEventListener("click",async function(t){t.preventDefault(),f=!1,A(f);try{z();let e=await lt();console.log("刪除全部購物車項目回應",e.data),p=e.data.carts,f=!0,I(),A(f),c.textContent=`NT$ ${e.data.finalTotal.toLocaleString()}`}catch{}});async function H(){_();try{let t=await tt(),e=await nt();x=t.data.products,p=e.data.carts,P(x,n),k(p,d),N(p),b=Array.from(document.querySelectorAll(".productCard")),D=Array.from(document.querySelectorAll(".loadind-btn")),$=Array.from(document.querySelectorAll(".loadind-cart")),y=document.querySelectorAll(".a-delbtn"),T=document.querySelectorAll(".addCardBtn"),console.log(T),c.textContent=`NT$ ${e.data.finalTotal.toLocaleString()}`}catch(t){console.log(t)}}H();let J={姓名:{presence:{message:"必填"}},電話:{presence:{message:"必填"}},Email:{presence:{message:"必填"},email:{message:"須符合Email格式"}},寄送地址:{presence:{message:"必填"}}};O.addEventListener("click",async function(t){t.preventDefault();const e=validate(u,J);if(e){let l=K(e);X(l);return}_(),m[0].value,m[1].value,m[2].value,m[3].value,m[4].value});function K(t){let e=[],l={姓名:0,電話:1,Email:2,寄送地址:3};return Object.entries(t).forEach(function(r){let s=[];s.push(l[r[0]]),s.push(r[1][0].replace(r[0],"")),e.push(s)}),e}function X(t){for(let e=0;e<t.length;e++)L[t[e][0]].style.display="block",L[t[e][0]].textContent=t[e][1].trim()}})();
