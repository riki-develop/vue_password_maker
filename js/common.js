window.onload = () => {
    if (window.innerWidth <= 620) {
        const appChild = document.querySelector('#app > .row').firstElementChild
        appChild.classList.remove('col-12')
        appChild.classList.remove('offset-6')
        appChild.classList.add('col-20')
        appChild.classList.add('offset-2')
    }
}