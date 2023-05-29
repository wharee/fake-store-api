function detailId(id) {
    fetch('https://fakestoreapi.com/products/' + id)
      .then((data) => {
        return data.json();
      })
      .then((product) => {
        let data1 = `<div class="card">
                      <img src="${product.image}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <p class="title">${product.title}</p>
                        <p class="card-text">${product.description}</p>
                        <p class="card-category">Category: ${product.category}</p>
                        <p class="card-price">$${product.price}</p>
                        <button class="price-button" type="submit">Add to cart</button>
                      </div>
                    </div>`;
  
        document.getElementById("product-details").innerHTML = data1;
      });
  }
  
  window.onload = () => {
    let idParameter = new URLSearchParams(window.location.search);
    let identificador = idParameter.get("id");
    detailId(identificador);
  };
  