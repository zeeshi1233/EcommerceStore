import { getLength } from "./qty.js";

function show(){
    let show=document.getElementById("show");
let data=JSON.parse(localStorage.getItem('single'));
show.innerHTML=`
<div class="col-md-6" >
<div style="width: 100%;">
<img src="${data.pic}" id="product-pic" width="100%" height="540px"  alt="" srcset="">
</div>
</div>
<div class="col-md-6">
    <h3 id="product-name">${data.name}</h3>
    <p class="fw-bold" id="product-price" >$${data.price}</p>
    <div >
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
    </div>
    <p class="mt-4" id="product-des" >${data.des}</p>
<p><span class="text-muted fw-bold">Brand</span> : <span style="color:#4338CA;">Foux</span> </p>
<p> <span class="text-muted fw-bold">Category</span>: <span style="color:#4338CA;" >Jackets</span> </p>
<button id="cart" onclick="cart('${data.pic}','${data.name}','${data.price}','${data.des}','${data.id}','${data.qty}')" >Add To Bag</button>
</div>
`



}
show()
window.cart = (pic, name, price, des, id,pQty) => {
console.log(pQty);
    let prev = localStorage.getItem("cart");
    let arr = prev ? JSON.parse(prev) : [];
    let qty = 1;
    for (const i in arr) {

        if (id == arr[i].id) {
            if(arr[i].qty>=pQty){
alert("qty exceeds the limit")
return;
            }
            else{

                qty=arr[i].qty+1;
                arr.splice(arr[i].id,1)
                
                break;
            }
        }
    }

   
        
        let data = {
            pic,
            name,
            price,
        des,
        qty,
        id,
        pQty
    };

    arr.push(data);
console.log(arr.length);

    localStorage.setItem("cart", JSON.stringify(arr));
   getLength()
}

