const btnFavoriteContacts = [...document.querySelectorAll('.btn-favorite-contact')]

btnFavoriteContacts.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('list-item-is-favorite')
    })
})
