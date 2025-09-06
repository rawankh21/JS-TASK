
(function () {
  var storedProducts = localStorage.getItem("products");
  var products = storedProducts ? JSON.parse(storedProducts) : [];
  displayProducts(products);
})();

function addProduct() {
  var brand = document.getElementById("Brand").value;
  var category = document.getElementById("Category").value;
  var price = document.getElementById("Price").value;

  if (brand === "" || category === "" || price === "") {
    alert("Please fill in all fields!");
    return;
  }

  var product = {
    brand: brand,
    category: category,
    price: price
  };

  
  var storedProducts = localStorage.getItem("products");
  var products = storedProducts ? JSON.parse(storedProducts) : [];

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts(products);


  document.getElementById("Brand").value = null;
  document.getElementById("Category").value = null;
  document.getElementById("Price").value = null;
}

function displayProducts(productList) {
var box = "";

for (var i = 0; i < productList.length; i++) {
  box += `
    <div class="card col-md-4 my-3" style="width: 18rem">
      <img src="/CSSsessions/imgs/Screenshot 2025-07-21 173239.jpg" 
           class="card-img-top" alt="Product Image" 
           style="height: 170px; width: 100px; margin-left:70px; object-fit: cover;" />
      <div class="card-body">
        <h5 class="card-title">${productList[i].brand}</h5>
        <p class="card-text fw-bold">Price: $${productList[i].price}</p>
        <p class="card-text text-secondary">Category: ${productList[i].category}</p>
        <div class="d-flex justify-content-between">
          <button class="btn btn-primary btn-sm">Update</button>
        </div>
      </div>
    </div>
  `;
}
  document.getElementById("productList").innerHTML = box;
}

