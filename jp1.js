

function link(t){
  var id = t.id;
  window.alert(id);

  if(id == 1){window.location.href = "operators.html";}
  if(id == 9){window.location.href ="news.html";}
}
function inlog(){
  var naam = document.getElementById('voornaam').value;
  var achternaam = document.getElementById('achternaam').value;
  var geboortedatum = document.getElementById('geboortedatum').value;
  var email = document.getElementById('email').value;
  var wachtwoord1 = document.getElementById('wachtwoord1').value;
  var wachtwoord2 = document.getElementById('wachtwoord2').value;

  var id = document.getElementById('print');


//<div class="alert alert-danger" role="alert">
//  This is a danger alert—check it out!
//</div>
  if(wachtwoord1 == wachtwoord2){

    window.alert("Test");
  }
  else{
    id.innerHTML = "<h1 class='groot'>test</h1>";
  }

  window.alert(naam);
  window.alert(achternaam);
  window.alert(geboortedatum);
  window.alert(email);
  window.alert(wachtwoord1);
  window.alert(wachtwoord2);
}
