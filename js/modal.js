const modal = document.querySelector('.modal')
const modalOpenButton = document.querySelector('#btn-get')
const modalClose = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
openModal()
 const closeModal = () => {
     modal.style.display = 'none'
     document.body.style.overflow = ''
 }
modalOpenButton.onclick = () => {openModal()}
modalClose.onclick = () => {closeModal()}

modal.onclick = (event) => {
    if (event.target === modal){closeModal()}
}

setTimeout(() => {
    openModal()
}, 10000)

const scrollWindow = () => {
    if ((window.innerHeight + window.scrollY + 10) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', scrollWindow)
    }
}

window.addEventListener('scroll', scrollWindow)