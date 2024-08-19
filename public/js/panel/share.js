window.addEventListener('load', () => {
    const panelMenuItemBtns = document.querySelectorAll('.panel-menu__item-btn')
    const panelMenuBtn = document.querySelector('#panel-menu-btn')
    const panelMenuCloseBtn = document.querySelector('#panel-menu-close-btn')
    const panelMenu = document.querySelector('#panel-menu')
    const panelProfileBtn = document.querySelector('#panel-profile-btn')
    const panelProfileCloseBtn = document.querySelector('#panel-profile-close-btn')
    const panelProfile = document.querySelector('#panel-profile')

    panelMenuBtn.addEventListener('click', () => {
        panelMenu.classList.add('panel-menu--open')
    })
    panelMenuCloseBtn.addEventListener('click', () => {
        panelMenu.classList.remove('panel-menu--open')
    })
    panelProfileBtn.addEventListener('click', () => {
        panelProfile.classList.add('panel-profile--open')
    })
    panelProfileCloseBtn.addEventListener('click', () => {
        panelProfile.classList.remove('panel-profile--open')
    })

    panelMenuItemBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            btn.classList.toggle('panel-menu__item-btn--open')
            e.currentTarget.parentElement.classList.toggle('bg-gray-700')
        })
    })
})

const coverElem = document.querySelector('.cover')
const modal = document.querySelector('#modal')

const showModal = elem => {

    elem.addEventListener('click', () => {
        coverElem.classList.add('cover--show')   
        modal.classList.add('modal--show')
    })
}

const hideModal = elem => {
    elem.addEventListener('click', () => {
        coverElem.classList.remove('cover--show')   
        modal.classList.remove('modal--show')
    })
}

export {
    showModal,
    hideModal
}