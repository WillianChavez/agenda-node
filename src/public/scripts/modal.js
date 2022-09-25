const modalContacts = document.getElementById('modalContacts')
const modalContactsDelete = document.getElementById('modalDelete')

modalContacts.addEventListener('show.bs.modal', function (event) {
    let title = 'Titulo'

    // Button that triggered the modal
    let button = event.relatedTarget
    // Extract info from data-bs-* attributes
    let action = button.getAttribute('data-bs-action')
    let itemListId = button.getAttribute('data-bs-item-list')
    let modalTitle = modalContacts.querySelector('.modal-title')
    let form = modalContacts.querySelector('#formModalContacts')

    if (action == 'edit') {
        title = 'Editar'
        let itemList = document.getElementById(itemListId)

        let inputName = modalContacts.querySelector('#name')
        let inputPhone = modalContacts.querySelector('#phone')
        let inputEmail = modalContacts.querySelector('#email')
        let checkIsFavorite = modalContacts.querySelector('#isFavorite')

        inputName.value = itemList.querySelector('.list-item-name').textContent
        inputPhone.value = itemList.querySelector('.list-item-phone').textContent
        inputEmail.value = itemList.querySelector('.list-item-email').textContent

        let isFav = itemList.contains(itemList.querySelector('.list-item-is-favorite'))
        checkIsFavorite.checked = isFav
        form.setAttribute('action', '/contacts/update')
    } else if (action == 'create') {
        title = 'Nuevo'
        modalContacts.querySelector('#formModalContacts').reset()
        form.setAttribute('action', '/contacts/create')
    }

    modalTitle.textContent = title
})

modalContactsDelete.addEventListener('show.bs.modal', function (e) {
    let button = event.relatedTarget
    let itemListId = button.getAttribute('data-bs-item-list')
    let itemList = document.getElementById(itemListId)
    console.dir(itemList)
})
