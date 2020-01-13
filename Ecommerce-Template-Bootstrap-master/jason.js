function myJsFunc(name, price) {
    console.log(name)
    console.log(price)
    const item = {
      
        "price": price
    }
    var items = localStorage.getItem("itemArray");
    var itemsObj = [];
    if (items != null) {
        itemsObj = JSON.parse(items);
    }    
    console.log(itemsObj);
    itemsObj.push(item);

    localStorage.setItem("itemArray", JSON.stringify(itemsObj));
    window.location.href = "F:/Downloads/Ecommerce-Template-Bootstrap-master/my_newdelivery/Ecommerce-Template-Bootstrap-master/checkout-page.html";


}

