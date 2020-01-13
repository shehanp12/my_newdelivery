function checkoutCart(){
    var items = localStorage.getItem("itemArray");
    var itemsObj = [];
    if (items != null) {
        itemsObj = JSON.parse(items);
    }    
    
    document.getElementById("oi").innerHTML = itemsObj[0].price;

}