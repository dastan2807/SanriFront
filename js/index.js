function nav_burger(){
    document.getElementById('nav').classList.toggle('nav_hidden');
    document.getElementById('main_container').classList.toggle('main_container_hidden');
}

function myFunction(x) {
    if (x.matches) { 
      document.getElementById("burger").src = "../../icons/bars-solid.svg";
    } else {
        document.getElementById("burger").src = "../../icons/bars-solid-black.svg";
    }
  }
  
  var x = window.matchMedia("(min-width: 426px)")
  myFunction(x)
  x.addListener(myFunction)