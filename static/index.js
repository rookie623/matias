let header = document.querySelector('h1')
let items = document.getElementsByClassName('item')
let etiqueta = document.querySelector('label')
let boton = document.querySelector('input')

boton.addEventListener('click', () => {
    document.body.classList.toggle("dark-body")
    header.classList.toggle("dark-item")
    etiqueta.classList.toggle('dark-text')
    if(header.classList.contains('dark-item')){
        etiqueta.innerHTML = "Light Mode"
    }
    else {
        etiqueta.innerHTML = "Dark Mode"
    }
    for (const item of items) {
            item.classList.toggle('dark-item')
            item.classList.toggle('dark-text')
    }
})

//confirm para que la pagina se ponga modo oscuro 
// if(window.confirm("¿Desea que la página se ponga en modo oscuro?")){

// }
