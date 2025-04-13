const fetchProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const productDiv = document.querySelector(".card-container");

    data.products.forEach((product) => {
      productDiv.innerHTML += `
        <div class="card"">
        <img src="${product.images[0]}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchProducts();
