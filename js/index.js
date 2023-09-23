import { auth,db,storage} from "./firebase.js";
import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection,onSnapshot  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

function show(){
let div=document.getElementById("show_card");
    const q =collection(db, "product")
    const unsubscribe = onSnapshot(q,(snapshot) => {
        snapshot.docChanges().forEach((change) => {
            let {name,description,price,qty,pic}=change.doc.data()           
         if(pic){
    div.innerHTML+=`
    <div class="col-md-3 mt-2">
    <div class="card border border-0 bg-light" style="height:450px;">
    <img src="${pic}" height="300px" class="card-img" alt="...">
    
    <div class="d-flex ms-2 mt-2" >
    <h6 class="card-title">${name.substr(0,30)}...</h6>
    </div>
    <div class=" bg-light">
    <div class=" ms-2">
    <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p class='' >$${price}</p>
                        </div>
                        <div class="d-flex justify-content-center" >
                        <button  id="addtocart" onclick="cart('${change.doc.id}','${name}','${description}','${price}','${qty}','${pic}')" >Add to Bag</button>
                        </div>
                        </div>
                        <div class="overlay1"></div>
                        </div>
                        </div>
                        
                        `     
                    }
                   
                });
    });


    
}
    show()

window.cart=(id,name,des,price,qty,pic)=>{
let data={
    id,
    name,
    des,
    price,
    qty,
    pic,
}
localStorage.setItem("single",JSON.stringify(data));
location.replace('single.html')
}
