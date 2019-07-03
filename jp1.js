

function link(t){
  var id = t.id;
  window.alert(id);

  if(id == 1){window.location.href = "p1.html";}
  if(id == 2){window.location.href ="p2.html";}
  if(id == 3){window.location.href ="p3.html";}
  if(id == 4){window.location.href ="p4.html";}
  if(id == 5){window.location.href ="p5.html";}
  if(id == 6){window.location.href ="p6.html";}
  if(id == 7){window.location.href ="p7.html";}
  if(id == 8){window.location.href ="p8.html";}
  if(id == 9){window.location.href ="news.html";}
  if(id == 10){window.location.href ="p8.html";}
  if(id == 11){window.location.href ="p8.html";}
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
