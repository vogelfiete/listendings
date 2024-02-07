dragElement(document.getElementById("karte"));

function dragElement(elmnt) {
  recall();
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  /*if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  

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
    elmnt.style.marginLeft = "0";
    // set the element's new position:
    //elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    let xpos = elmnt.offsetLeft;
    let ypos = elmnt.offsetTop - pos2;

    let height = elmnt.offsetHeight;
    let width = elmnt.offsetWidth-5;

    console.log(xpos)

    if (xpos <= -5) {
        console.log('links');
        document.getElementById("td_links").style.background = 'red';
        elmnt.style.boxShadow = "0px 0px 20px red";
    }
    else if (xpos+width >= window.innerWidth*0.3) {
        console.log('rechts');
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
    document.onmouseup = null;
    document.onmousemove = null;
    
  }

  function recall() {
    
    elmnt.style.top = 0 + "px";
    elmnt.style.left = 0 + "px"
    elmnt.style.marginLeft = "auto";
    document.getElementById("td_rechts").style.background = 'white';
    document.getElementById("td_links").style.background = 'white';
    elmnt.style.boxShadow = "0 0 20px white";


  }
};

  