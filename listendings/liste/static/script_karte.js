dragElement(document.getElementById("karte"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    xpos = elmnt.offsetLeft - pos1;
    ypos = elmnt.offsetTop - pos2;
    if (xpos <= window.innerWidth*0.35) {
        console.log('links');
        document.getElementById("td_links").style.background = 'red';
    }
    else if (xpos >= window.innerWidth-innerWidth*0.35) {
        console.log('rechts');
        document.getElementById("td_rechts").style.background = 'green';

    }
    else {
        console.log('mitte');
        document.getElementById("td_rechts").style.background = 'white';
        document.getElementById("td_links").style.background = 'white';
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    recall();
    document.onmouseup = null;
    document.onmousemove = null;
    
  }

  function recall() {
    elmnt.style.top = window.innerHeight*0.5 + "px";
    elmnt.style.left = window.innerWidth*0.5 + "px";

  }
};

  