// var nameInput=document.getElementById("productName");
// var categoryInput=document.getElementById("productCategory");
// var priceInput=document.getElementById("productPrice");
// var descriptionInput=document.getElementById("productDescription");
// var tbody=document.getElementById("tbody");
// var searchInput=document.getElementById("searchInput");


// if(localStorage.getItem("ProductsStorage")==null){
//     var products=[];
// }else{
//     var products=JSON.parse(localStorage.getItem("ProductsStorage"));
//     console.log(products);
// }

// function addProduct(){
//     var product = {
//         pname: nameInput.value,
//         pcat : categoryInput.value,
//         pprice : Number(priceInput.value),
//         pdesc : descriptionInput.value,
//     }
//     // console.log(product);
//     products.push(product);
//     localStorage.setItem("ProductsStorage",JSON.stringify(products));
//     displayproduct();
//     clearproduct();
// }
// function clearproduct(){
//     nameInput.value="";
//     categoryInput.value="";
//     priceInput.value="";
//     descriptionInput.value="";
// }
// function displayproduct(){
//     var str="";
//     for(var i=0;i<products.length;i++){ 
//         str+=`
//         <tr>
//             <td>${i}</td>
//             <td>${products[i].pname}</td>
//             <td>${products[i].pcat}</td>
//             <td>${products[i].pprice}</td>
//             <td>${products[i].pdesc}</td>
//             <td>
//                 <button class="btn btn-warning" onclick="updateproduct(${i})"> update</button>
//             </td>
//             <td>
//                 <button class="btn btn-danger"> delete</button>
//             </td>
//         </tr>
//         `
//     }
//     tbody.innerHTML=str;
// }
// displayproduct();


// var button=document.getElementById("update");

// function updateproduct(k){
//     nameInput.value=products[k].pname;
//     categoryInput.value=products[k].pcat;
//     priceInput.value=products[k].pprice;
//     descriptionInput.value=products[k].pdesc;
//     button.innerHTML="update product";
//     button.classList.add("btn-secondary","text-white");
//     button.onclick=function(){
//         products=JSON.parse(localStorage.getItem("ProductsStorage"));
//         products[k].pname=nameInput.value;
//         products[k].pcat.categoryInput;
//         products[k].pprice= priceInput.value;
//         products[k].pdesc=descriptionInput.value;
//         localStorage. setItem("ProductsStorage", JSON.stringify(products));
//         displayproduct();
//         clearproduct();
//         button. innerHTML="add product";
//         button.classList.remove("btn-secondary" , "text-white");
//         button.onclick=function(){
//             addproduct();
//         } 
//     }
// }

var nameInput = document.getElementById("productName");
var categoryInput = document.getElementById("productCategory");
var priceInput = document.getElementById("productPrice");
var descriptionInput = document.getElementById("productDescription");
var tbody = document.getElementById("tbody");
var searchInput = document.getElementById("searchInput");

if (localStorage.getItem("ProductsStorage") == null) {
    var products = [];
} else {
    var products = JSON.parse(localStorage.getItem("ProductsStorage"));
    console.log(products);
}

function addProduct() {
    var product = {
        pname: nameInput.value,
        pcat: categoryInput.value,
        pprice: Number(priceInput.value),
        pdesc: descriptionInput.value,
    };

    products.push(product);
    localStorage.setItem("ProductsStorage", JSON.stringify(products));
    displayProducts();
    clearProduct();
}

function clearProduct() {
    nameInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
}

function displayProducts() {
    var str = "";
    for (var i = 0; i < products.length; i++) {
        str += `
        <tr>
            <td>${i}</td>
            <td>${products[i].pname}</td>
            <td>${products[i].pcat}</td>
            <td>${products[i].pprice}</td>
            <td>${products[i].pdesc}</td>
            <td>
                <button class="btn btn-warning" onclick="updateProduct(${i})"> update</button>
            </td>
            <td>
                <button class="btn btn-danger" onclick="deleteProduct(${i})"> delete</button>
            </td>
        </tr>
        `;
    }
    tbody.innerHTML = str;
    searchInput.value = ""; // Clear search input after displaying products
}

function searchProducts() {
    var searchTerm = searchInput.value.toLowerCase();
    var filteredProducts = [];

    for (var i = 0; i < products.length; i++) {
        if (
            products[i].pname.toLowerCase().includes(searchTerm) ||
            products[i].pcat.toLowerCase().includes(searchTerm) ||
            products[i].pdesc.toLowerCase().includes(searchTerm)
        ) {
            filteredProducts.push(products[i]);
        }
    }

    var str = "";
    for (var i = 0; i < filteredProducts.length; i++) {
        str += `
        <tr>
            <td>${i}</td>
            <td>${filteredProducts[i].pname}</td>
            <td>${filteredProducts[i].pcat}</td>
            <td>${filteredProducts[i].pprice}</td>
            <td>${filteredProducts[i].pdesc}</td>
            <td>
                <button class="btn btn-warning" onclick="updateProduct(${i})"> update</button>
            </td>
            <td>
                <button class="btn btn-danger" onclick="deleteProduct(${i})"> delete</button>
            </td>
        </tr>
        `;
    }
    tbody.innerHTML = str;
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("ProductsStorage", JSON.stringify(products));
    displayProducts();
}

displayProducts();

var button = document.getElementById("update");

function updateProduct(k) {
    nameInput.value = products[k].pname;
    categoryInput.value = products[k].pcat;
    priceInput.value = products[k].pprice;
    descriptionInput.value = products[k].pdesc;
    button.innerHTML = "update product";
    button.classList.add("btn-secondary", "text-white");
    button.onclick = function () {
        updateFunction(k);
    };
}

function updateFunction(index) {
    var updatedProduct = {
        pname: nameInput.value,
        pcat: categoryInput.value,
        pprice: Number(priceInput.value),
        pdesc: descriptionInput.value,
    };

    products.splice(index, 1, updatedProduct);
    localStorage.setItem("ProductsStorage", JSON.stringify(products));
    displayProducts();
    clearProduct();
    button.innerHTML = "add product";
    button.classList.remove("btn-secondary", "text-white");
    button.onclick = addProduct;
}

searchInput.addEventListener("input", searchProducts);