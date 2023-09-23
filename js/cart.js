// fetch data from localStorage

function  show() {
    let div = document.getElementById("show");
    let data = JSON.parse(localStorage.getItem("cart"));
    let totalPrice = 0; 
    let totalTax = 0; 
    let subprice=0;
    div.innerHTML=""
    for (const i in data) {
        console.log(data);
        div.innerHTML+=`
        <div id="div-${data[i].id}" >
        <div class="card mb-3 " style="min-height:200px;border: none;border-top:1px solid rgb(207, 207, 207);border-bottom:1px solid rgb(207, 207, 207);background-color: transparent;" >
        <div class="row g-0">
        <div class="col-md-2">
        <img src="${data[i].pic}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title ">${data[i].name}</h5>
        <p style="font-size: 14px;" class="card-text">${data[i].des}</p>
        <select name="" id="qty-${data[i].id}" onchange="selQty('${data[i].id}')" style="border:1px solid  rgb(238, 238, 238) ;">
        </select>
        </div>
        </div>
        <div class="col-md-2 d-flex align-items-center justify-content-end"  style="height: 50px;">
        <button onclick="itmRem('${data[i].id}')" style="border:none;background: transparent;" class=" fa-solid fa-close"></button>
        </div>
        </div>
        </div>
        </div>
        `;
        let qty = document.getElementById("qty-" + data[i].id);
        for (var j = 0; j < data[i].pQty; j++) {
            let opt = document.createElement("option");
            opt.innerText = j + 1;
            opt.value = j + 1;
            qty.appendChild(opt);
        }

        qty.childNodes.forEach(element => {
            if (data[i].qty == element.innerText) {
                element.setAttribute("selected", "selected");
            }
        });

        // Calculate price and tax for each item
        let price = qty.value * data[i].price;
        const taxRate = 0.1;
        let tax = qty.value * data[i].price * taxRate;

        subprice += price;
        totalPrice += price;
        totalTax += tax;
    }

    // Update total price and tax in the HTML elements
    document.getElementById("sub-total").innerHTML = "$ " + subprice;
    document.getElementById("total").innerHTML = "$ " + totalPrice.toFixed(2);
    document.getElementById("tax").innerHTML = "$ " + totalTax.toFixed(2);
}

show()






window.selQty = (productId) => {
    let selectedQty = parseInt(document.getElementById("qty-" + productId).value);
    let data = JSON.parse(localStorage.getItem("cart"));

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === productId) {
            data[i].qty = selectedQty;
            break;
        }
    }

    localStorage.setItem("cart", JSON.stringify(data));

    show();
}


window.itmRem=(id)=>{
    let data = JSON.parse(localStorage.getItem("cart"));
let div=document.getElementById("div-"+id);
for(var i in data){
    if (data[i].id==id) {
      data.splice(i,1)
      
    break;
    }
}
localStorage.setItem("cart", JSON.stringify(data));
div.remove()

}

// qty.childNodes[1].value=data[i].qty
// qty.childNodes[1].innerText=data[i].qty
//
// let price=qty.value*data[i].price;
// console.log(price);

// const taxRate = 0.1;
// let price=qty.value * data[i].price;
// let tax=qty.value*data[i].price*taxRate;
// document.getElementById("sub-total").innerHTML="$ "+ price;
// document.getElementById("tax").innerHTML=`$ ${tax}`; 

// for(var k=0;k<div.childNodes.length;k++){
//     console.log(div.childNodes[k].childNodes);
//     }