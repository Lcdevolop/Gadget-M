const params = new URLSearchParams(window.location.search);
const id = params.get('id');
console.log(id);


async function movieApp() {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();

    console.log(data);

    const title = document.querySelector('.title').innerHTML = data.title
    const poster = document.querySelector('.img2').src = data.images[0]
    const category = document.querySelector('.category').innerHTML = data.category;
    const brand = document.querySelector('.brand').innerHTML = data.brand;
    const returnn = document.querySelector('.return').innerHTML = data.returnPolicy;
    const price = document.querySelector('.price').innerHTML = data.price;
}

movieApp();