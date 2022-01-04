const lista = document.querySelectorAll('.lista');
function activeLink(){
    lista.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
lista.forEach((item) =>
item.addEventListener('click', activeLink));