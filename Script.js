const btnCadastrar = document.querySelector('#btn-cadastrar')

function cadastrar(event) {
    
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();

    event.preventDefault()

    const modelo = document.querySelector('#MODELO');
    const placa = document.querySelector('#placa')
    if(modelo.value==''){
        alert('digite o modelo do veiculo');
        return false;
    }

    if(placa.value==''){
        alert('digite a placa do veiculo');
        return false;
    }

    let linha = `
        <tr>
            <td>${modelo.value}</th>
            <td>${placa.value}</td>
            <td>${horas}:${minutos}</td>
            <td><button onclick = "deletar(this.parentNode.parentNode)" class="btn btn-danger"><i class="fa fa-close"></i></button></td>

          </tr > `;

    const lista = document.querySelector('#lista');
    lista.innerHTML = lista.innerHTML + linha;
    modelo.value= '';
    placa.value= '';

}








btnCadastrar.addEventListener('click', cadastrar);


function deletar(qualquernome) {







Swal.fire({
  title: 'Tem certeza disso ?',
  text: "Você  não poderá reverter, caso queira!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sim, estou certo disto!'
}).then((result) => {
  if (result.isConfirmed) {
      qualquernome.remove();
    Swal.fire(
      'deletado!',
      'Seu arquivo foi deletedo.',
      'success'
    )
  }
})










}





