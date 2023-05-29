fetch('https://fakestoreapi.com/products')
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    completedata.forEach((values) => {
      data1 += `<div class="card">
                    <img src="${values.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="title">${values.title}</p>
                            
                            
                            <p class="card-price">$${values.price}</p>
                            <p class="card-details"><a href="detalhes.html?id=${values.id}">See details</a></p>
                            <button class="price-button" type="submit">Add to cart</button>
                        </div>
                </div>`;
    });

    document.getElementById('cardContainer').innerHTML = data1;
    if (data1 === "") {
      alert("Nenhum produto encontrado para essa categoria.");
    }    

    // Filtrar produtos por categoria
    const searchInput = document.querySelector('input[type="search"]');
    const form = document.querySelector('form[role="search"]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = searchInput.value.toLowerCase();
      const filteredData = completedata.filter((product) =>
  product.category.toLowerCase().includes(searchTerm.toLowerCase())
);


      let filteredDataHTML = "";
      filteredData.forEach((values) => {
        filteredDataHTML += `<div class="card">
                    <img src="${values.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="title">${values.title}</p>
                            <p class="card-text">${values.description}</p>
                            <p class="card-category">Category:${values.category}</p>
                            <p class="card-price">$${values.price}</p>
                            <p class="card-details"><a href="detalhes.html?id=${values.id}">See details</a></p>
                            <button class="price-button" type="submit">Add to cart</button>
                        </div>
                </div>`;
      });

      document.getElementById('cardContainer').innerHTML = filteredDataHTML;
    });
  })
  .catch((err) => {
    console.log(err);
    alert("Error to find your product, please reload the page")
  });
