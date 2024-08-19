import { showModal, hideModal } from "./share.js";

window.addEventListener('load', () => {
    const addProductBtn = document.querySelector('#add-product-btn')
    const coverElem = document.querySelector('.cover')
    const closeModalBtn = document.querySelector('#modal-close-btn')


    hideModal(closeModalBtn)
    showModal(coverElem)
    showModal(addProductBtn)
})