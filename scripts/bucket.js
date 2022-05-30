// On clicking remove button the item should be removed from DOM as well as localstorage.
var data=JSON.parse(localStorage.getItem("coffee"))
console.log(data)
var sum=data.reduce(function (sum,element,index,array){
        return sum+Number(element.price)
},0)
var total=data.length;
// console.log(total)
document.querySelector("#para").innerText="total price="+ sum


// displayData(data)


// function displayData(result){

    // console.log(1)
data.forEach((element,index) => {  

    var card=document.createElement("div")
    card.setAttribute("class","cards")
    var image=document.createElement("img")
    image.src=element.image

var title=document.createElement("p")
title.innerText=element.title

var price=document.createElement("p")
price.innerText=element.price

var bucket=document.createElement("button")
bucket.innerText="Remove"
bucket.addEventListener("click",()=>{
// cart.push(element)


deleteitem(elem,index)
// data.splice(index,1)
//     console.log(1)

//     // add(element)

//     localStorage.setItem("coff",JSON.stringify(data))
    
})
card.append(image,title,price,bucket)
document.querySelector("#add_to_bucket").append(card)


});
// }
function deleteitem(elem,index)
{
    data.splice(index,1)
    // localStorage.setItem("coff",JSON.stringify(data))
    window.location.reload();
}