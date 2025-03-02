// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const productDiv = document.querySelector(".card-container");
//     data.products.forEach((product) => {
//       productDiv.innerHTML += `
//        <div class="card"">
//         <img src="${product.images[0]}" class="card-img-top" alt="${product.title}">
//         <div class="card-body">
//           <h5 class="card-title">${product.title}</h5>
//           <p class="card-text">${product.description}</p>
//         </div>
//       </div>
//       `;
//     });
//   })
//   .catch((error) => console.error("Error fetching data:", error));

const fetchProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    console.log(data);

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

// Call the function
fetchProducts();
