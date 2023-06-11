fetch('https://diwserver.vps.webdock.cloud/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error retrieving products');
    }
    return response.json();
  })
  .then(data => {
    // Verificar os dados no console
    console.log(data);

    const products = data.products; // Acessar o array de produtos

    // Renderizar os produtos
    function renderData(data) {
      let dataHTML = "";
      data.forEach(product => {
        dataHTML += `<div class="card">
          <img src="${product.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="title">${product.title}</p>
            <p class="card-price">$${product.price}</p>
            <p class="card-details"><a href="detalhes.html?id=${product.id}">See details</a></p>
            <button class="price-button" type="submit">Add to cart</button>
          </div>
        </div>`;
      });

      document.getElementById('cardContainer').innerHTML = dataHTML;
    }

    renderData(products); // Renderizar os produtos

    const searchInput = document.querySelector('input[type="search"]');
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredData = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
      );

      renderData(filteredData); // Renderiza os produtos filtrados por nome e categoria
    });
  })
  .catch(error => {
    console.log(error);
    alert('Error retrieving products, please reload the page');
  });
