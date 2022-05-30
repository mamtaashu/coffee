var cart=[];
// =JSON.parse(localStorage.getItem("coffee")) || []




async function coffee(){
    let result=await fetch(`https://masai-mock-api.herokuapp.com/coffee/menu`)
    let output=await result.json()
// console.log(output)
displayData(output)
}

coffee()


function displayData(result){

    // console.log(1)
result.menu.data.forEach((element,index) => {
    var card=document.createElement("div")
    card.setAttribute("class","cards")
    var image=document.createElement("img")
    image.src=element.image

var title=document.createElement("p")
title.innerText=element.title

var price=document.createElement("p")
price.innerText=element.price

var bucket=document.createElement("button")
bucket.innerText="Add to Bucket"
bucket.addEventListener("click",()=>{
cart.push(element)

    console.log(1)

    // add(element)

    localStorage.setItem("coffee",JSON.stringify(cart))
    // window.location.href=bucket.html
})
card.append(image,title,price,bucket)
document.querySelector("#menu").append(card)
});
}



// function add(product){
// cart.push(product)
// console.log(cart)
// }