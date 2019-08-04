
var print = document.getElementById('print');
var print2 = document.getElementById('print2');
var print3 = document.getElementById('print3');
var goed = 0;
//print.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Mislukt</h1></div>";

function link(t){
  var id = t.id;
  //window.alert(id);

  if(id == 1){window.location.href = "operators.html";}
  if(id == 9){window.location.href ="news.html";}
}

function aanmelden(){

  var naam = document.getElementById('voornaam').value;
  var geboortedatum = document.getElementById('geboortedatum').value;
  var email = document.getElementById('email').value;
  var wachtwoord1 = document.getElementById('wachtwoord1').value;
  var wachtwoord2 = document.getElementById('wachtwoord2').value;
  var tell = (wachtwoord1.length);

  var l = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  var k = /[a-zA-Z]+/g;

  var check = (l.test(email));
  var check2 = (k.test(naam));
  //var check3 = (k.test(achternaam));

  if(check){//email
    goed += 1;
  }
  else{
    goed -= 1;
    print2.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Email Klopt niet</h1></div>";
  }

  if(check2){//naam
    goed += 1;
  }
  else{
    goed -= 1;
    window.alert("geen naam");
  }

  if(wachtwoord1 == wachtwoord2){
    if(tell <= 0){
        goed -= 1;
        print.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Wachtwoord is nog niet ingevult</h1></div>";
    }
    else{
      goed += 1;
    }
  }
  else{
    goed -= 1;
    print.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Wachtwoorden zijn niet het zelfde</h1></div>";
  }
       var dag = +new Date(geboortedatum);
       var lf = ((Date.now() - dag) / (31557600000));
       var leeftijd = parseInt(lf);
       if(leeftijd < 18){
         goed -= 1
         print3.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Niet oud genoeg</h1></div>";
       }
       else{
         goed += 1;
       }
       if(goed == 4){//checkt als alles goed is ingevult
         print.innerHTML = "<div class='alert alert-success' role='alert'><h1>Gelukt</h1></div>";
       }
       else{
         goed = 0;
       }
}
