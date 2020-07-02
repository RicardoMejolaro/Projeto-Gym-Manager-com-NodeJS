//selecionando todos os cards 
const cards = document.querySelectorAll('.card');
//Percorrendo os cards
for (const card of cards) {
  //Escutando o evento de click no card
  card.addEventListener('click', () => {
  //Pegando o atributo id do card 
  const videoId = card.getAttribute('id');
    window.location.href = `watch-video?id=${videoId}`;
  });
}
