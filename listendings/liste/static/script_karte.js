dragElement(document.getElementById("karte"));
var i=0;

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
        document.getElementById("td_links").style.background = 'red';
        elmnt.style.boxShadow = "0px 0px 20px red";
    }
    else if (xpos >= window.innerWidth*0.1) {
        console.log('rechts');
        console.log(xpos+width + '/' + window.innerWidth*0.1)

        document.getElementById("td_rechts").style.background = 'green';
        elmnt.style.boxShadow = "0px 0px 20px green";

    }
    else {
        console.log('mitte');
        document.getElementById("td_rechts").style.background = 'white';
        document.getElementById("td_links").style.background = 'white';
        elmnt.style.boxShadow = "0 0 20px white";
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
  if (i >= imax) {
    
    }
  else if (i < imax) {
    console.log(i);
    console.log(alleE[i].description);
    text.innerHTML = alleE[i].description;}
};




  