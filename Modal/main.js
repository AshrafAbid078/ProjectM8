document.addEventListener('DOMContentLoaded', function() {
    let openModalBTN = document.getElementById('openModalBTN');
    let closeModalBTN = document.getElementById('closeModalBTN');
    let modal = document.getElementById('myModal');

    openModalBTN.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBTN.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }});

});