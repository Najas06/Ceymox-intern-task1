const menu = document.getElementById('menu')
menu.style.display = 'none'
const toggle = ()=>{
    const menu = document.getElementById('menu')
    menu.style.display = menu.style.display == 'none' ? 'block' : 'none'
}

const darkMode = ()=>{
    const body = document.querySelector('body')
    if(body.style.backgroundColor == 'rgb(24, 24, 27)'){
        body.style.backgroundColor = 'white'
        menu.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        dashboard.style.color = 'rgb(24, 24, 27)'
    }
    else{
        body.style.backgroundColor = 'rgb(24, 24, 27)'
        const dashboard =   document.getElementById('dashboard')
        dashboard.style.color = 'white'

        menu.style.backgroundColor = 'rgb(24, 24, 27)';

        const search = document.getElementById('search')
        search.style.backgroundColor = 'white';
    }
}

