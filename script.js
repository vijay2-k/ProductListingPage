const products = [
  { name: "Smartphone", category: "electronics", price: 20000, rating: 4.5 },
  { name: "T-Shirt", category: "clothing", price: 500, rating: 4.0 },
  { name: "Laptop", category: "electronics", price: 60000, rating: 4.8 },
  { name: "Jeans", category: "clothing", price: 1200, rating: 4.2 }
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

function displayProducts(items) {
  productContainer.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    productContainer.appendChild(div);
  });
}

function filterAndSort() {
  let filtered = [...products];

  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  const sort = sortFilter.value;
  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortFilter.addEventListener("change", filterAndSort);

displayProducts(products);
