
document.addEventListener("DOMContentLoaded", () => {
  const productData = JSON.parse(localStorage.getItem("products")) || [];
  const allProductsContainer = document.getElementById("allProducts");
  const productCardTemplate = document.getElementById("productCardTemplate");

  function displayAllProducts() {
    // Clear the container before displaying products
    allProductsContainer.innerHTML = "";

    if (productData.length > 0) {
      productData.forEach((product, index) => {
        const { name, price, images, discount } = product;
        const productCard = productCardTemplate.content.cloneNode(true);

        // Populate product details
        productCard.querySelector(".accessorieName").textContent = name;
        productCard.querySelector(".accessoriePrice").textContent = price;

        const discountElement = productCard.querySelector(".accessorieDiscount");
        discountElement.textContent = discount ? `${discount}%` : "No discount";

        // Select the image container
        const imageContainer = productCard.querySelector(".acessorieImg");
        if (images && images.length > 0) {
            const img = document.createElement("img");
            img.src = images[0]; // Display only the first image
            img.alt = "Product Image";
            imageContainer.appendChild(img);
        } else {
            // Handle case where no images are available
            const placeholder = document.createElement("div");
            placeholder.textContent = "No image available";
            imageContainer.appendChild(placeholder);
        }

        // Add event listener to open details page on click
        const productButton = productCard.querySelector("button");
        productButton.addEventListener("click", () => {
          localStorage.setItem("selectedProduct", JSON.stringify(product));
          window.location.href = "acessorieDetail.html";
        });

        // Append the product card to the container
        allProductsContainer.appendChild(productCard);
      });
    } else {
      allProductsContainer.innerHTML = `<p>No products available.</p>`;
    }
  }

  displayAllProducts();
});

