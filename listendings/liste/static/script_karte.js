
dragElement(document.getElementById("karte"));
var i=0;
var last_pos;
const gewaehlt = [];

function dragElement(elmnt) {
  
  inhaltaendern();
  reset();
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  /*if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.ontouchstart = dragMouseDown;
  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.touches[0].clientX;
    pos4 = e.clientY;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.clientY;
    elmnt.style.marginLeft = "0";
    // set the element's new position:
    //elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    elmnt.style.right = 0;
    left = elmnt.style.left

    let xpos = elmnt.offsetLeft;
    let ypos = elmnt.offsetTop - pos2;

    let height = elmnt.offsetHeight;
    let width = elmnt.offsetWidth-5;
    
    

    console.log(xpos)

    if (xpos > window.innerWidth) {
      closeDragElement();
    }
    else if (xpos <= -5) {
        console.log('links');
        //document.getElementById("td_links").style.background = 'red';
        elmnt.style.boxShadow = "0px 0px 40px red";
        last_pos='links'
    }
    else if (xpos >= window.innerWidth*0.1) {
        console.log('rechts');
        
        console.log(xpos+width + '/' + window.innerWidth*0.1)

        //document.getElementById("td_rechts").style.background = 'green';
        elmnt.style.boxShadow = "0px 0px 40px green";
        
        last_pos = "rechts"
    }
    else {
        console.log('mitte');
        document.getElementById("td_rechts").style.background = 'white';
        document.getElementById("td_links").style.background = 'white';
        elmnt.style.boxShadow = "0 0 20px white";
        last_pos ="nop"
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    recall();
    document.ontouchend = null;
    document.ontouchmove = null;
    
  }

  function recall() {
    reset()
    
    i = i+1;
    
    
    inhaltaendern();

  }

  function reset() {
    elmnt.style.top = 0 + "px";
    elmnt.style.left = 0 + "px";
    elmnt.style.right = 0 + "px";
    elmnt.style.bottom = 0 + "px";

    elmnt.style.marginLeft = "auto";
    document.getElementById("td_rechts").style.background = 'white';
    document.getElementById("td_links").style.background = 'white';
    elmnt.style.boxShadow = "0 0 20px white";
  }

  
};



function inhaltaendern() {
  text = document.getElementById("karte_text");
  var eintraege_text = document.getElementById('eintrag_data').innerHTML;
  const alleE = JSON.parse(eintraege_text);
  var imax = alleE.length
  if (i >= imax+1) {
    document.getElementById('dia_win').innerHTML = 'Ausgewählt:' + '<br/>' + gewaehlt;
    document.getElementById('dialog').style.display = "flex";
    document.getElementById('dialog').style.marginLeft = "10%";
    document.getElementById('dialog').style.width = "80%";
  }
  else if (i <= imax) {

    if (last_pos == "rechts") {
      gewaehlt.push('►' + alleE[i].Beschreibung + '<br/>')

      console.log(gewaehlt)
    }

    console.log(i);
    console.log(alleE[i-1].Beschreibung);
    text.innerHTML = alleE[i].Beschreibung;}
    fitty('#karte_text')
};





function umschalten() {
  
  formular = document.getElementById("dialog");

  if (formular.style.display == "flex") {
      console.log('bla')
      formular.style.display = "none";}
  else {formular.style.display = "flex"};

  if (document.getElementById('karte_text').innerHTML == "Erst Liste Auswählen") {
    document.getElementById('karte_text').innerHTML += '<a onClick="umschalten()">' + 'Erst Liste Auswählen' +'</a>';
    console.log('Adwadw')
  }
  else {};
};