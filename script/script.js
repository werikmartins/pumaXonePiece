let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicators = document.querySelector('.jollyRoger')
let flags = indicators.querySelectorAll('ul li')
let list = document.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

nextBtn.onclick = () => {
    list.style.setProperty('--calculation', 1)
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    let flagsOld = indicators.querySelector('ul li.active')
    flagsOld.classList.remove('active')
    flags[active].classList.add('active')
}

prevBtn.onclick = () => {
    list.style.setProperty('--calculation', -1)
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')

    let flagsOld = indicators.querySelector('ul li.active')
    flagsOld.classList.remove('active')
    flags[active].classList.add('active')
}