document.querySelector('img').addEventListener('click', () => {
    const random = Number(Math.floor(Math.random() * 6 + 1))
    document.querySelector('img').src = "./img/" + random + ".png"
})