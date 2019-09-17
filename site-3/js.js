
var print = document.getElementById('print');
var print2 = document.getElementById('print2');
var print3 = document.getElementById('print3');
var print4 = document.getElementById('print4');
var goed = 0;
var tell = 0;

function comments(){
  var naam = document.getElementById('naam').value;
  var comment = document.getElementById('comment').value;
  var fout1 = document.getElementById('f1');
  var fout2 = document.getElementById('f2');

  fout1.innerHTML="";
  fout2.innerHTML="";

  tell++;
  var print = 0;
  console.log(tell);
  if(naam.length >= 1){
    print ++;
  }
  else{
    fout1.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Geen naam</h1></div>";
  }
  if(comment.length >= 1){
    print++
  }
  else{
    fout2.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Geen comment</h1></div>";
  }

  if(print == 2){
    document.getElementById(tell).innerHTML =
    "<div class='comment'>"+
      "<div class='comment_text'>"+
        "<span class='comment_naam'>"+
        naam +
        "</span>"+
        "<span class='ster'>"+
          "<i class='fa fa-star'></i>"+
          "<i class='fa fa-star'></i>"+
          "<i class='fa fa-star'></i>"+
          "<i class='fa fa-star'></i>"+
          "<i class='fa fa-star'></i>"+
        "</span>"+
        "<span class='comment_text'><br>"+
        comment+
        "</span>"+
      "</div>"+
    "<hr>"+
    "</div>";

    fout1.innerHTML="<div class='alert alert-success' role='alert'><h1>Gepost</h1></div>";
    fout2.innerHTML="";
  }
  else{
    print = 0;
  }
}

function niks(){
  var naam = document.getElementById('voornaam').value;
  var wachtwoord1 = document.getElementById('wachtwoord1').value;
  if(naam.length >= 0 && wachtwoord1.length >= 0){
    window.alert(naam + " jij gebruikt dit (" + wachtwoord1 + ") als wachtwoord ?");
  }
}
function aanmelden(){
  var naam = document.getElementById('voornaam').value;
  var geboortedatum = document.getElementById('geboortedatum').value;
  var email = document.getElementById('email').value;
  var wachtwoord1 = document.getElementById('wachtwoord1').value;
  var wachtwoord2 = document.getElementById('wachtwoord2').value;
  var tell = (wachtwoord1.length);
  var tell3 = (email.length);
  var check2 = (naam.length);

  var l = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  var check = (l.test(email));

  if(check && tell3 >= 1){//email
    goed += 1;
    print2.innerHTML ="";
  }
  else{
    goed -= 1;
    print2.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Geen Email</h1></div>";
  }

  if(check2 >= 1){//naam
    goed += 1;
    print.innerHTML ="";
  }
  else{
    goed -= 1;
    print.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Geen naam</h1></div>";
  }

  if(wachtwoord1 === wachtwoord2){
    if(tell <= 0){
        goed -= 1;
        print3.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Wachtwoord is nog niet ingevult</h1></div>";
    }
    else{
      goed += 1;
      print3.innerHTML = "";
    }
  }
  else{
    goed -= 1;
    print3.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Wachtwoorden zijn niet het zelfde</h1></div>";
  }
       var dag = +new Date(geboortedatum);
       var lf = ((Date.now() - dag) / (31557600000));
       var leeftijd = parseInt(lf);
       if(leeftijd < 18){
         goed -= 1
         print4.innerHTML = "<div class='alert alert-danger' role='alert'><h1>Niet oud genoeg</h1></div>";
       }
       else{
         goed += 1;
       }
       if(goed == 4){//checkt als alles goed is ingevult
         print.innerHTML = "<div class='alert alert-success' role='alert'><h1>Gelukt</h1></div>";
         print1.innerHTML ="";
         print2.innerHTML ="";
         print3.innerHTML ="";
         print4.innerHTML ="";
       }
       else{
         goed = 0;
       }
}
