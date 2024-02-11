function formularU(id) {

    formular = document.getElementById(id);

    if (formular.style.display == "none") {
        formular.style.display = "block";}
    else {formular.style.display = "none"};
}; 

function durchstreichen(id) {
    
    box = document.getElementById(id);
    let id_li = 'li_' + id.slice(9,20);
    console.log(id_li)
    list_item = document.getElementById(id_li);

    if (box.checked){
        list_item.style.textDecorationLine = "line-through";
    }  
    else {list_item.style.textDecorationLine = 'none';}; 
};
  
