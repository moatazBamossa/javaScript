// get item
let inputName = document.getElementById('name');
let inputPrice = document.getElementById('price');
let inputTaxes = document.getElementById('taxes');
let inputAds = document.getElementById('ads');
let inputDiscount = document.getElementById('discount');
let inputCount = document.getElementById('count');
let inputCategory = document.getElementById('category');
let inputSearch = document.getElementById('search');
let btnCreate = document.getElementById('btnCreate');
let btnSearch = document.getElementById('btnSearch');
let totalNumber = document.getElementById('totalNumber');
let index_category = 0;
//
window.addEventListener('load', function() {
 showData()
});
// get total of price
function totalPrice(){
  if(inputPrice.value != ''){
    let result = (+inputPrice.value + +inputTaxes.value + +inputAds.value) - +inputDiscount.value;
    totalNumber.textContent = result
    totalNumber.style.background = 'green';

  }
  else {
    totalNumber.textContent = 0;
    totalNumber.style.background = 'red';
  }

}

// create product
let dataProduct;
if (localStorage.product != null){
  dataProduct = JSON.parse (localStorage.product)
}
else {
  dataProduct = [];
}
function createProduct() {
  let newProduct =
    {
      Name: inputName.value,
      Price: inputPrice.value,
      Text: inputTaxes.value,
      Ads: inputAds.value,
      Discount: inputDiscount.value,
      total: totalNumber.textContent,
      Count: inputCount.value,
      Category: inputCategory.value,
    }
    if(btnCreate.textContent == ' Create '){
      dataProduct.push(newProduct);
      localStorage.setItem('product', JSON.stringify(dataProduct));
    }
    else {
      dataProduct[index_category] = newProduct;
      totalPrice()
      inputCount.style.display = 'block';
      btnCreate.innerHTML = ' Create '
      index_category = 0;
    }

};
btnCreate.onclick = function (){
  createProduct();
  clean()
  showData()
}

// clean input
function clean(){
  inputName.value = '';
  inputPrice.value = '';
  inputTaxes.value = '';
  inputAds.value = '';
  inputDiscount.value = '';
  inputCount.value = '';
  inputCategory.value = '';
  totalPrice()

}
// show data
function showData(){
  let table = '';
  for(let i = 0; i < dataProduct.length; i++){
    table += `
      <tr>
        <td>${i}</td>
        <td>${dataProduct[i].Name}</td>
        <td>${dataProduct[i].Price}</td>
        <td>${dataProduct[i].Text}</td>
        <td>${dataProduct[i].Ads}</td>
        <td>${dataProduct[i].Discount}</td>
        <td>${dataProduct[i].total}</td>
        <td>${dataProduct[i].Count}</td>
        <td>${dataProduct[i].Category}</td>
        <td><button class="btn" onclick = "updateProduct(${i})" id="update">update</button></td>
        <td><button class="btn" onclick = "deleteProduct(${ i })" id="delete">delete</button></td>
      </tr>
    `
  }
  document.getElementById('tbody').innerHTML = table;
  let btnDelete = document.getElementById('btnDeleteAll');
  if(dataProduct.length > 0){
    btnDelete.innerHTML = `
    <button class="btn" onclick = "deleteAll()" id="btnDeleteAll ">Delete (${dataProduct.length})</button>`
  }
  else {
    btnDelete.innerHTML = '';
  }
}
// delete product
function deleteProduct(index){
  dataProduct.splice(index,1);
  localStorage.product = JSON.stringify(dataProduct);
  showData();
}
//update product
function updateProduct(index){
  index_category = index;
  inputName.value = dataProduct[index].Name;
  inputPrice.value = dataProduct[index].Price;
  inputTaxes.value = dataProduct[index].Text;
  inputAds.value = dataProduct[index].Ads;
  inputDiscount.value = dataProduct[index].Discount;
  inputCategory.value = dataProduct[index].Category;
  totalPrice()
  inputCount.style.display = 'none';
  btnCreate.innerHTML = "Update"
  index_category = index;
}
function deleteAll(){
  localStorage.clear();
  dataProduct.splice(0);
  showData()
}
//search
function search(value){
  let table = '';
  for(let i = 0; i< dataProduct.length; i++){
    if(dataProduct[i].Name.includes(value) || dataProduct[i].Category.includes(value)){
      table += `
      <tr>
        <td>${i}</td>
        <td>${dataProduct[i].Name}</td>
        <td>${dataProduct[i].Price}</td>
        <td>${dataProduct[i].Text}</td>
        <td>${dataProduct[i].Ads}</td>
        <td>${dataProduct[i].Discount}</td>
        <td>${dataProduct[i].total}</td>
        <td>${dataProduct[i].Count}</td>
        <td>${dataProduct[i].Category}</td>
        <td><button class="btn" onclick = "updateProduct(${i})" id="update">update</button></td>
        <td><button class="btn" onclick = "deleteProduct(${ i })" id="delete">delete</button></td>
      </tr>
    `
  }
  document.getElementById('tbody').innerHTML = table;
  }
}
