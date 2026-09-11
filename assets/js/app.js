
const url = 'https://dummyjson.com/products/category/smartphones'
const laptopUrl = 'https://dummyjson.com/products/category/laptops'
const speakersUrl = 'https://dummyjson.com/products/category/mobile-accessories'

const phoneCard = document.querySelector('.phone-card')
const laptops = document.querySelector('.laptop-card')
const speakers = document.querySelector('.speaker-card')


async function name(search = '') {

    const searchText = search.toLowerCase()


    const response = await fetch(url)
    const data = await response.json()

    const phoneSearch = data.products.filter(item =>
        item.title.toLowerCase().includes(searchText)
    )

    phoneSearch.slice(0, 5).forEach(item => {
        phoneCard.innerHTML += `
            <div class="cards">
                <img src="${item.images[0]}">
                <h3>${item.title}</h3>
                <button class="detail-btn" data-id="${item.id}">Info</button>
            </div>
        `
    })

    if (phoneCard) {
        phoneCard.addEventListener('click', (e) => {

            if (e.target.classList.contains('detail-btn')) {

                const id = e.target.dataset.id;

                window.location.href = `info.html?id=${id}`;
            }

        });
    }


    const response2 = await fetch(laptopUrl)
    const data2 = await response2.json()

    const laptopSearch = data2.products.filter(item =>
        item.title.toLowerCase().includes(searchText)
    )

    laptopSearch.slice(0, 5).forEach(item => {
        laptops.innerHTML += `
            <div class="cards2">
                <img src="${item.images[0]}">
                <h3>${item.title}</h3>
                <button class="detail-btn" data-id="${item.id}">Info</button>
            </div>
        `
    })

     if (laptops) {
        laptops.addEventListener('click', (e) => {

            if (e.target.classList.contains('detail-btn')) {

                const id = e.target.dataset.id;

                window.location.href = `info.html?id=${id}`;
            }

        });
    }



    const response3 = await fetch(speakersUrl)
    const data3 = await response3.json()

    const speakerSearch = data3.products.filter(item =>
        item.title.toLowerCase().includes(searchText)
    )

    speakerSearch.slice(0, 5).forEach(item => {
        speakers.innerHTML += `
            <div class="cards3">
                <img src="${item.images[0]}">
                <h3>${item.title}</h3>
               <button class="detail-btn" data-id="${item.id}">Info</button>
            </div>
        `
    })

    if (speakers) {
        speakers.addEventListener('click', (e) => {

            if (e.target.classList.contains('detail-btn')) {

                const id = e.target.dataset.id;

                window.location.href = `info.html?id=${id}`;
            }

        });
    }

}


const input = document.querySelector('.input-1')
const headImg = document.querySelector('.main-head-2')
const service = document.querySelector('.service')

input.addEventListener('keydown', (e) => {

    if (e.key == 'Enter') {

        phoneCard.innerHTML = ''
        laptops.innerHTML = ''
        speakers.innerHTML = ''

        name(input.value)
    }

})


name()