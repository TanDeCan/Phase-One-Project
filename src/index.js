// Makes the price easier to read.
const pricing = (price) =>{
    let formattedPricing = Number(price).toFixed(2);
    return `$${formattedPricing}`;
}


//Creates the already known list of manga
function acquiredManga(manga) {
    const li = document.createElement('li')
    li.className = 'current-manga'

    const h3 = document.createElement('h3')
    h3.textContent = manga.title
    
    const pVolume = document.createElement('p')
    pVolume.textContent = `Volume: ${manga.volume}`

    const pAuthor = document.createElement('p')
    pAuthor.textContent = manga.author

    const pPrice = document.createElement('p')
    pPrice.textContent = `Bought for ${pricing(manga.price)}`

    const img = document.createElement('img')
    img.src = manga.imageUrl
    img.alt = `${manga.title} cover`

    const btn = document.createElement('button')
    btn.textContent = 'Delete'

    btn.addEventListener('click', () => {
        li.remove()})

    li.append(h3, pVolume, pAuthor, pPrice, img, btn)
    document.querySelector('#manga-list').append(li)
}

mangaSection.inventory.forEach(manga => {
    acquiredManga(manga);
})

// Allows new manga to be added
const newManga = document.querySelector('#manga-form')

newManga.addEventListener('submit', (e) => {
    e.preventDefault()
    const addingManga = {
        title: e.target.title.value,
        volume: e.target.volume.value,
        author: e.target.author.value,
        price: e.target.price.value,
        imageUrl: e.target.imageUrl.value
    }
    acquiredManga(addingManga)
    
})
