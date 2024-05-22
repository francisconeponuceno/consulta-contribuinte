const insEstadual = document.getElementById('insEstadual');
const buttons = document.getElementById('buttons');

const ExibeOcuta = ( event) => {
    if (event.target.id == "mostrar") {
       insEstadual.classList.add('exibir');
    }

    if (event.target.id == "fechar") {
        insEstadual.classList.remove('exibir');
     }

}

buttons.addEventListener('click', ExibeOcuta);