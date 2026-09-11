const phoneUrl = 'https://dummyjson.com/products/category/smartphones'
const laptopUrl = 'https://dummyjson.com/products/category/laptops'
const acceryUrl = 'https://dummyjson.com/products/category/mobile-accessories'
const tabletpUrl = 'https://dummyjson.com/products/category/tablets'

const phoneBtn = document.querySelector('.total-phone')
const laptopBtn = document.querySelector('.total-laptop')
const acceryBtn = document.querySelector('.total-accessory')
const tabletBtn = document.querySelector('.total-tablet')

if (phoneBtn) {
    phoneBtn.addEventListener('click', () => {
        window.open('total.html', '_blank')
    })
}

if (laptopBtn) {
    laptopBtn.addEventListener('click', () => {
        window.open('totalLaptop.html', '_blank')
    })
}

if (acceryBtn) {
    acceryBtn.addEventListener('click', () => {
        window.open('accessory.html', '_blank')
    })
}

if (tabletBtn) {
    tabletBtn.addEventListener('click', () => {
        window.open('totalTablet.html', '_blank')
    })
}


const phoneCard2 = document.querySelector('.phone-card-2')
const laptopCard2 = document.querySelector('.laptop-card-2')
const acceryCard2 = document.querySelector('.accessories-card-2')
const tabletCard2 = document.querySelector('.tablet-card-2')

async function name() {

    const response = await fetch(phoneUrl)
    const data = await response.json()

    console.log(data.products)

    if (phoneCard2) {
        data.products.slice(0, 10).forEach(item => {
            phoneCard2.innerHTML += `
                <div class="cards-2">
                    <img src="${item.images[0]}">
                    <h3>${item.title}</h3>
                    <button class="detail-btn" data-id="${item.id}">Info</button>
                </div>
                `;
        })
    }

    if (phoneCard2) {
        phoneCard2.addEventListener('click', (e) => {

            if (e.target.classList.contains('detail-btn')) {

                const id = e.target.dataset.id;

                window.location.href = `info.html?id=${id}`;
            }

        });
    }


    const response2 = await fetch(laptopUrl)
    const data2 = await response2.json()

    console.log(data2.products)

    if (laptopCard2) {
        data2.products.slice(0, 10).forEach(item => {
            laptopCard2.innerHTML += `
                <div class="cards-3">
                    <img src="${item.images[0]}">
                    <h3>${item.title}</h3>
                    <button class="detail-btn" data-id="${item.id}">Info</button>
                </div>
            `
        })
    }

    if (laptopCard2) {
        laptopCard2.addEventListener('click', (e) => {

            if (e.target.classList.contains('detail-btn')) {

                const id = e.target.dataset.id;

                window.location.href = `info.html?id=${id}`;
            }

        });
    }

    const response3 = await fetch(acceryUrl)
    const data3 = await response3.json()

    console.log(data3.products)

    if (acceryCard2) {
        data3.products.slice(0, 10).forEach(item => {
            acceryCard2.innerHTML += `
                <div class="cards-4">
                    <img src="${item.images[0]}">
                    <h3>${item.title}</h3>
                    <button class="detail-btn" data-id="${item.id}">Info</button>
                </div>
            `
        })
    }

    if (acceryCard2) {
        acceryCard2.addEventListener('click', (e) => {

            if (e.target.classList.contains('detail-btn')) {

                const id = e.target.dataset.id;

                window.location.href = `info.html?id=${id}`;
            }

        });
    }


    const response4 = await fetch(tabletpUrl)
    const data4 = await response4.json()

    console.log(data4.products)

    if (tabletCard2) {
        data4.products.slice(0, 10).forEach(item => {
            tabletCard2.innerHTML += `
                <div class="cards-5">
                    <img src="${item.images[0]}">
                    <h3>${item.title}</h3>
                    <button class="detail-btn" data-id="${item.id}">Info</button>
                </div>
            `
        })
    }

    if (tabletCard2) {
        tabletCard2.addEventListener('click', (e) => {

            if (e.target.classList.contains('detail-btn')) {

                const id = e.target.dataset.id;

                window.location.href = `info.html?id=${id}`;
            }

        });
    }

}

name()