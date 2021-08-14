//Leitura de todo o meu documento HTML
$(document).ready(function(){ //Executou a leitura do nosso documento e o preparou para executar uma função

  //Função determinada
  //alert('Oi eu sou o jQuery') 

  //Monitorar todos os clicks em nosso elemento lonk "a" do HTML
  $('a').click(function(e){
    e.preventDefault()

    //alert('Oi eu sou jQuery!')


    let pagina = $(this).attr('href')
    //alert(pagina)

    $('.modal-title').empty()
    $('.modal-body').empty()

    switch(pagina){
      case 'Projetos':
        $('.modal-title').append('Meus Projetos')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-4 col-md-4">
                <img src="img/projetos2.jpg" alt="Projetos" class="img-fluid">
              </div>
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-danger">Meus Projetos</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae earum ex reprehenderit, provident doloremque fugiat possimus quaerat assumenda, tempora accusantium placeat quasi explicabo. Ea dicta eos quia error tempora quod!</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'Parceiros':
        $('.modal-title').append('Meus Clientes/Parceiros')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-4 col-md-4">
                <img src="img/clientes2.jpg" alt="Clientes" class="img-fluid">
              </div>
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-danger">Meus Clientes</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae earum ex reprehenderit, provident doloremque fugiat possimus quaerat assumenda, tempora accusantium placeat quasi explicabo. Ea dicta eos quia error tempora quod!</p>
              </div>
            </div>
          </div>
        `)
      break
      case 'Contatos':
        $('.modal-title').append('Meus Contatos')
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-4 col-md-4">
                <img src="img/contatos2.jpg" alt="Contatos" class="img-fluid">
              </div>
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-danger">Meus Contatos</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae earum ex reprehenderit, provident doloremque fugiat possimus quaerat assumenda, tempora accusantium placeat quasi explicabo. Ea dicta eos quia error tempora quod!</p>
              </div>
            </div>
          </div>
        `)
      break
      default: alert('Página não encontrada')
    }


    $('#modal-info').modal('show')

  })
})