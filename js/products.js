const DATA_URL= "https://japceibal.github.io/emercado-api/cats_products/101.json";
const container = document.querySelector(".container");
fetch(DATA_URL)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let lista = "";
    for(let item of data.products){
        lista += `      <div class="autos"
        <h2 class="nombreProducto">${item.name}</h2>
        <p class="precio">${item.cost}</p>
        <p class="vendidos">${item.soldCount}</p>
        <p class="descripcion">${item.description}</p>
        <img src="${item.image}" class="imgProducto">
        </div>`
    }
    container.innerHTML = lista;
})
.catch(function(error){
    console.log(error);
});