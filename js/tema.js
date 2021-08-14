$(document).ready(function(){
  
  $('.btn-dark').click(function(dark){
    dark.preventDefault()

    $('body').removeClass('original')
    $('body').removeClass('light')
    $('body').addClass('dark')
    $('p').removeClass('text-dark')
    $('p').addClass('text-white')
    //$('h3').removeClass('text-dark')
    //$('h3').addClass('text-white')
    $('h4').removeClass('text-dark')
    $('h4').addClass('text-white')
  })

  $('.btn-light').click(function(e){
    e.preventDefault()

    $('body').removeClass('original')
    $('body').removeClass('dark')
    $('body').addClass('light')
    $('p').removeClass('text-white')
    $('p').addClass('text-dark')
    //$('h3').removeClass('text-white')
    //$('h3').addClass('text-dark')
    $('h4').removeClass('text-white')
    $('h4').addClass('text-dark')
  })

  $('.btn-primary').click(function(e){
    e.preventDefault()

    $('body').removeClass('dark')
    $('body').removeClass('light')
    $('body').addClass('original')
    $('p').removeClass('text-dark')
    $('p').addClass('text-white')
    //$('h3').removeClass('text-dark')
    //$('h3').addClass('text-white')
    $('h4').removeClass('text-dark')
    $('h4').addClass('text-white')
  })

})