const avanca = document. querySelectorAll(".btn-proximo");

avanca.forEach(button => {
  button.addEventistlener('click', function(){
     const atual = document.querySelector('ativo');
     const proximoPasso = 'passo-' + this.getAttribute('date-proximo')

     atual.classList.remove('ativo');
     document.getElementById(proximoPasso).classList.add('ativo');
    })
})