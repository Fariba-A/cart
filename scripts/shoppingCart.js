let basketItem = document.querySelectorAll(".body-basket-items");
let headBasketItem=document.querySelector(".heade-basket-items")
let closeItem = document.querySelectorAll(".close");
// closeItem.forEach(function (item) {
// debugger;
//     let basketItem = item.querySelector(".basket-item");

//     item.addEventListener("click", function () {
//         basketItem.classList.add("remove");
//     })

// })

for(let i=0;i<basketItem.length;i++){

    closeItem[i].addEventListener("click",function(e){
        e.preventDefault();  
        
        if(basketItem.length=0){
            headBasketItem.classList.add("remove");
        }
        basketItem[i].classList.add("remove");
     
     
    })
}