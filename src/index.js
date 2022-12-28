
const pricing = (priceNum) =>{
    return `$${priceNum.toFixed(2)}`
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

    li.append(h3, pVolume, pAuthor, pPrice, img)
    document.querySelector('#manga-list').append(li)
}

mangaSection.inventory.forEach(manga => {
    acquiredManga(manga);
})
