let elements = document.querySelector('.elements');
const deleteButton = elements.querySelector('.card__delete-button');
deleteButton.addEventListener('click', function() {
    const deleteCard = deleteButton.closest('.card');
    deleteCard.remove();
});
