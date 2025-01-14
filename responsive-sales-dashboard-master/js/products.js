let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood ='create';
let indexUpdate;
//total
function getTotal() {
  // console.log('total');
  if(price.value && taxes.value  && discount.value) {
   let result= (+price.value + +taxes.value ) - +discount.value;
  
   total.innerHTML = result;
  }  
}
//create product

let products ;

if(localStorage.products){
  
  products=JSON.parse(localStorage.products);
}
else{
  products=[];
}

submit.onclick = function(){
 
  let product={
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    discount: discount.value,
    total: total.innerHTML, // innerHTML
    count: count.value,
    category: category.value
  };
  if(mood =='create' ){
   
    if(product.count>1 ){
      for(let i=0;i<product.count;i++){
        products.push(product);
      }
  
    }
    else{
      products.push(product);
    }
  }else{
    products[ indexUpdate ]=product;
    mood='create';
    submit.innerHTML='create';
    count.style.display='block';

  }
  //save localstorage
  localStorage.setItem('products', JSON.stringify(products));
// console.log(product);
clearFields();
readProducts();
}
//clear fields
function clearFields(){
  title.value='';
  price.value='';
  taxes.value='';
  discount.value='';
  total.innerHTML='';
  count.value='';
  category.value='';
}
//read
function readProducts(){
  let tab='';
  for(let i=0;i<products.length;i++){
    // console.log(products[i].title);
    tab+=  `
      <tr>
        <td>${i+1}</td>
        <td>${products[i].title}</td>
        <td>${products[i].price}</td>
        <td>${products[i].taxes}</td>  
        <td>${products[i].discount}</td>
        <td>${products[i].total}</td>
        <td>${products[i].category}</td>
        <td><button id="update" onclick="updateData(${i})">update</button></td>
        <td><button onclick="deleteProduct( ${i} ) " id="delete">delete</button></td>
      </tr>
        `;
  }
  document.getElementById('tbody').innerHTML=tab;
  let btnDelete=document.getElementById('deletAll');
  if(products.length>0){
  btnDelete.innerHTML=`
                      <button onclick="deleteAll() " id="deleteAll">delete all(${products.length})</button>
                      `;  
  // get products count
  }
  else{
    btnDelete.innerHTML='';
  }
}
readProducts();
//delete
function deleteProduct(index){
  // console.log(index);
   products.splice(index,1);
   localStorage.products=JSON.stringify(products);
  // localStorage
  readProducts();
  // updateProductCount(); // Update count

}

function deleteAll(){
 localStorage.clear();
 products.splice(0,products.length);
  readProducts();
  // updateProductCount(); // Update count
}
//update
function updateData(index){
  // console.log(index);
  indexUpdate=index;

  title.value=products[index].title;
  price.value=products[index].price;
  taxes.value=products[index].taxes;
  // ads.value=products[index].ads;
  discount.value=products[index].discount;
  getTotal();
  // total.innerHTML=products[index].total;
  // count.value=products[index].count;
  count.style.display='none';
  category.value=products[index].category;
  submit.innerHTML='update';
  mood='update';
  scroll({
    top: 0,
    behavior: 'smooth'
  })
}
readProducts();
readProducts();
// updateProductCount(); // Update count on page load


