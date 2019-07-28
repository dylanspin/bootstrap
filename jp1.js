

function link(t){
  var id = t.id;
  //window.alert(id);

  if(id == 1){window.location.href = "operators.html";}
  if(id == 9){window.location.href ="news.html";}
}

function aanmelden(){

  var naam = document.getElementById('voornaam').value;
  var achternaam = document.getElementById('achternaam').value;
  var geboortedatum = document.getElementById('geboortedatum').value;
  var email = document.getElementById('email').value;
  var wachtwoord1 = document.getElementById('wachtwoord1').value;
  var wachtwoord2 = document.getElementById('wachtwoord2').value;
  var print = document.getElementById('print');

  var l = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  var check = (l.test(email));

  if(check){
    print.innerHTML = "test";
  }
  else{
    window.alert("geen email");
  }

  if(wachtwoord1 == wachtwoord2){
    window.alert("wachtwoorden zijn het zelfde");
  }
  else{
    print.innerHTML = "ok";
  }
}
