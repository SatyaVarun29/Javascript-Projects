// document.addEventListener("DOMContentLoaded",()=>{
// let products=[
//   {
//     id:1, name:'product1', price:29.99,
//     id:2, name:'product2', price:49.99,
//     id:3, name:'product3', price:79.99
//   }
// ]

// const cart=[]
// const productlist=document.getElementById("product-list")
// const cartItems=document.getElementById("cart-items")
// const emptyCart=document.getElementById("empty-cart")
// const cartTotal=document.getElementById("cart-total")
// const totalPrice=document.getElementById("total-price")
// const checkoutBtn=document.getElementById("checkout-btn")



// products.forEach(products=>{
//  let productdiv= document.createElement('div')
//  productdiv.classList.add('product')

// })



// })

let productlist=document.querySelector('.listofProducts')
function renderproducts(prod){
   productlist.innerHTML=prod.map((products)=>
  `<p>${products.title}</p>`)
}

const fetchproducts=async()=>{
   try {
    const res=await fetch('https://dummyjson.com/products')
    const data=await res.json()
    console.log(data)
   
    if(data?.products?.length>0 ) renderproducts(data.products)

   } catch (error) {
    console.log(error)
   }
}

fetchproducts()