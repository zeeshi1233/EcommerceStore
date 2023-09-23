function getLength() {
    let prev = JSON.parse(localStorage.getItem("cart"));
 if (prev) {
     document.getElementById("show-qty").style.display="flex";
    }   
    else{
    document.getElementById("show-qty").style.display="none";
 }
document.getElementById("show-qty").innerHTML=prev? prev.length :0;

}
getLength()
export {getLength};