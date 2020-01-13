//variable

const cartBtn=document.querySelector('.cart-btn');
const closeCartBtn=document.querySelector('.close-cart');
const clearCartBtn=document.querySelector('#clear-cart');
const cartDOM=document.querySelector('.cart');
const cartOverlay=document.querySelector('.cart-overlay');
const cartItems=document.querySelector('#a');
const cartTotal=document.querySelector('.cart-total');
/* const cartContent=document.querySelector('.products-center'); */
/* const cartOverlay=document.querySelector('.cart-overlay'); */
const productDOM=document.querySelector('.products-center');
const cartContent=document.querySelector('.class-content');



//cart

let cart=[];

let buttonsDOM=[];

//getting the products
class Products{
 async getProducts(){
     

    try{
        let result=await fetch("products.json");
        let data=await result.json();

        
        

        let products=data.items;
        products=products.map(item =>{
            const {title,price,tit}=item.fields;
            const {id}=item.sys;
            const image=item.fields.image.fields.file.url;
            return {title,price,id,image,tit}
        })

        return products;

    }catch(error){ 
        console.log(error);

    }
  
 }

}
//display products
class UI{
displayProducts(products){
   let result=" ";
   products.forEach(product => {
       result += ` 

       <!--Card image-->
       <article class="product>
       <div class="img-container">
         <img src=${product.image}  height="250" width="25" class="card-img-top"  class="card-img-top"
           alt="product" class="product-img">
         
       </div>
       <div></div>
       <storng><br>
       <b><h5  class="font-weight-bold" >${product.title} </h5></storng></b>
     
           <strong>
           
           </strong>  
                  
     <strong> <h4 class="font-weight-bold blue-text">Rs.${product.price}</h4></strong>
           <button class="btn btn-primary shop-item-button" id="bag-btn"  data-id=${product.id} type="button" 
        >ADD TO CART</button>


       </div>
       </div>
       </div>
       </article>
       <!--Card content-->

    
     <!--Card-->`
     




       
   })
   productDOM.innerHTML=result;
}

getBagButtons(){
    const btns=[...document.querySelectorAll('#bag-btn')];
    buttonsDOM=btns;

   
    btns.forEach(btn =>{
        let id=btn.dataset.id;
        console.log(id);
        let inCart=cart.find(item =>item.id === id);
        if(inCart){
            btn.innerHTML="In Cart";
            btn.disabled=true;


        }
        {
            btn.addEventListener('click',(event)=>{
               event.target.innerHTML="In Cart";
               event.target.disabled=true;
               //getProducts from Products
               let cartItem={...Storage.getProduct(id),amount:1};
               console.log(cartItem);
               //add products to the cart
               cart =[...cart,cartItem];
               console.log(cart);
               //save cart in local Storage
               Storage.saveCart(cart);
               //set cart values
               this.setCartValues(cart);
               //display cart item
               this.addCartItem(cartItem);
               //show the cart
               this.showCart();


            })

        }

    })
}
setCartValues(cart){
    let tempTotal=0;
    let itemsTotal=0;
    cart.map(item =>{
        tempTotal +=item.price * item.amount;
        itemsTotal+=item.amount;
         
    })
    cartTotal.innerText =parseFloat(tempTotal.toFixed(2));
    cartItems.innerText=itemsTotal;
   
}
addCartItem(item){
const div = document.createElement('div');
 div.classList.add('cart-item');
 div.innerHTML=`
 <img src=${item.image}  alt="product">
<div>
  <h4>${item.title}</h4>
  <h5>Rs.${item.price}</h5>
  <span class="remove-item" data-id=${item.id}>remove</span>
 
</div>
<div>
  <i class="fas fa-chevron-up"  data-id=${item.id}> </i>
<p class="item-amount">${item.amount}</p>
<i class="fas fa-chevron-down" data-id=${item.id}></i>

</div>
 
 `;
 cartContent.appendChild(div);
}

showCart(){
    cartOverlay.classList.add('transparentBcg');
    cartDOM.classList.add('showCart');
} 
setupAPP(){
cart =Storage.getCart();
this.setCartValues(cart);
this.populateCart(cart);
cartBtn.addEventListener('click',this.showCart);
closeCartBtn.addEventListener('click',this.hideCart)
}
populateCart(cart){
    cart.forEach(item =>this.addCartItem(item));

}
hideCart(){
    cartOverlay.classList.remove('transparentBcg');
    cartDOM.classList.remove('showCart');
}
cartLogic(){
    clearCartBtn.addEventListener('click',()=>{
        this.clearCart();     
    });
    //cart functionality
    cartContent.addEventListener("click",event =>{
       if(event.target.classList.contains("remove-item")){

        let removeItem=event.target;
        let id=removeItem.dataset.id;
        cartContent.removeChild(removeItem.parentElement.parentElement);
        this.removeItem(id);



       }

    })
}
clearCart(){
   let cartItems=cart.map(item =>item.id);
   cartItems.forEach(id => this.removeItem(id))
   console.log(cartContent.children)
   while(cartContent.children.length>0){
       cartContent.removeChild(cartContent.children[0])
   }
   this.hideCart();

}
removeItem(id){
    cart = cart.filter(item => item.id !==id);
    this.setCartValues(cart);
    Storage.saveCart(cart);
    let button=this.getSingleButton(id);
    button.disabled=false;
    button.innerHTML=`  ADD TO CART</button>`
}
getSingleButton(id){
    return buttonsDOM.find(button => button.dataset.id===id);
     
}
}
//local Storage
class Storage{
    static saveProducts(products){
        localStorage.setItem("products",JSON.stringify(products));
        
    }
    static getProduct(id){
        let products=JSON.parse(localStorage.getItem('products'));
        return products.find(product=>product.id===id);

    }
    static saveCart(cart){
        localStorage.setItem('cart',JSON.stringify(cart));

    }
    static getCart(){
        return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]

    }

}

document.addEventListener("DOMContentLoaded",()=>{
    const ui=new UI();
    const products=new Products();
    //setup app
    ui.setupAPP();

//get all Products
products.getProducts().then(products =>{
    ui.displayProducts(products);
Storage.saveProducts(products);
}).then(() =>{
ui.getBagButtons();
ui.cartLogic();



});

});

