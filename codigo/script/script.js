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
                            <p class="card-text">${values.description}</p>
                            <p class="card-price">${values.price}</p>
                            <button class="price-button" type="submit">Adicionar ao carrinho</button>
                        </div>
                </div>`;
    });

    document.getElementById('cardContainer').innerHTML = data1;
  })
.catch((err) => {
    console.log(err);
});
