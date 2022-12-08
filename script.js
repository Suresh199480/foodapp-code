menuItems = document.querySelectorAll('nav ul li')
    //console.lo(menuItems)
menuItems.forEach((li) => {
    //console.log(li)
    li.addEventListener('click', () => {
        removeActive()
        li.classList.add('active')
    })
});

function removeActive() {
    menuItems.forEach((li) => {
        li.classList.remove('active')
    })
}