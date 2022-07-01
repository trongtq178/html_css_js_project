const buyTicketsBtns = document.querySelectorAll('.place-buy-btn');
const ticketModal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-close');
const ticketModalContainer = document.querySelector('.modal-container');

for (const buyTicketsBtn of buyTicketsBtns) {
  buyTicketsBtn.addEventListener('click', toggleModal);
}

closeModalBtn.addEventListener('click', toggleModal);

ticketModal.addEventListener('click', toggleModal);

ticketModalContainer.addEventListener('click', function(e) {
  e.stopPropagation();
});

function toggleModal(e) {
  e.preventDefault()
  ticketModal.classList.toggle('modal-open');
}
