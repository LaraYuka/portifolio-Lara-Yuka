//Leitura de todo o meu documento HTML
$(document).ready(function(){ //Executou a leitura do nosso documento e o preparou para executar uma função

  //Função determinada
  //alert('Oi eu sou o jQuery') 

  //Monitorar todos os clicks em nosso elemento lonk "a" do HTML
  $('a').click(function(e){
    e.preventDefault()

    //alert('Oi eu sou jQuery!')

    $('#modal-info').modal('show')

  })
})