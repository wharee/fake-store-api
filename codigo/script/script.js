fetch('https://fakestoreapi.com/products')
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let allData = completedata; // Armazena todos os dados iniciais

    function renderData(data) {
      let dataHTML = "";
      data.forEach((values) => {
        dataHTML += `<div class="card">
          <img src="${values.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="title">${values.title}</p>
            
        
            <p class="card-price">$${values.price}</p>
            <p class="card-details"><a href="detalhes.html?id=${values.id}">See details</a></p>
            <button class="price-button" type="submit">Add to cart</button>
          </div>
        </div>`;
      });

      document.getElementById('cardContainer').innerHTML = dataHTML;
    }

    renderData(allData); // Renderiza todos os produtos inicialmente

    const searchInput = document.querySelector('input[type="search"]');
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredData = allData.filter((product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
      );

      renderData(filteredData); // Renderiza os produtos filtrados por nome e categoria
    });
  })
  .catch((err) => {
    console.log(err);
    alert("Error to find your product, please reload the page");
  });
