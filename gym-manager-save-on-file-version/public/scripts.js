//Lógica link selecionado
const currentPage = location.pathname;
const menuItems = document.querySelectorAll('header .links a');

for (const item of menuItems) {
  if (currentPage.includes(item.getAttribute('href'))) {
    item.classList.add("active")
  }
}

//Lógica confirmação de deletar
const formDelete = document.querySelector("#form-delete");
formDelete.addEventListener("submit", (event) => {
  const confirmation = confirm("Deseja realmente deletar?");
  if(!confirmation) {
    event.preventDefault();
  } else {
    alert("Registro deletado com sucesso!");
  }
  
});
