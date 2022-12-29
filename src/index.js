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
        fetch(`http://localhost:3000/mangas/${manga.id}`, {
            method: 'DELETE',
        })
        li.remove()})

    li.append(h3, pVolume, pAuthor, pPrice, img, btn)
    document.querySelector('#manga-list').append(li)
}

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
    
    fetch('http://localhost:3000/mangas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addingManga)
    })
})

fetch('http://localhost:3000/mangas')
   .then(response => response.json())
   .then(mangas => 
    {console.log(mangas);
    mangas.forEach(manga => {acquiredManga(manga)})
    })
    .catch(err => {
        console.error(err);
        makeError('Make sure to start json-server!')
      });
    
function makeError(message) {
    const main = document.querySelector('main');
    const errorDiv = document.createElement('div');
    errorDiv.className = "error";
    errorDiv.textContent = message;
    main.prepend(errorDiv);
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
          errorDiv.remove();
        }
    })
} 