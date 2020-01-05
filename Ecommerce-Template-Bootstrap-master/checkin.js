
function checkoutCart(){
  var items = localStorage.getItem("itemArray");
  var itemsObj = [];
  if (items != null) {
      itemsObj = JSON.parse(items);
  }    
  console.log(itemsObj);

 


document.getElementById('oi').innerHTML=items;




}















