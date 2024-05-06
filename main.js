let words = ['Ser', 'Pensar', 'Actuar', 'Observar', 'Interactuar'],
    wordWrapper = document.getElementById('word'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }

}, 150);


let ubicacionPrincipal = window.pageYOffset;

//animaciones aparecer

  AOS.init();

window.addEventListener("scroll", function(){
  let desplazamientoActual = window.pageYOffset;
  if(ubicacionPrincipal>=desplazamientoActual){
    document.getElementsByTagName("nav")[0].style.top = "0px"
  }
  else{
    document.getElementsByTagName("nav")[0].style.top = "-100px"
  }
  ubicacionPrincipal = desplazamientoActual;
});

//menu

let enlacesHeader = document.querySelectorAll('.enlaces-header')[0];
let semaforo = true;
document.querySelectorAll('.hamburguer')[0].addEventListener('click', function(){
  if(semaforo){
    document.querySelectorAll('.hamburguer')[0].style.color = "#000";
    semaforo = false;
  }
  else{
    document.querySelectorAll('.hamburguer')[0].style.color = "#000";
    semaforo = true;
  }
  enlacesHeader.classList.toggle('menudos')
})










