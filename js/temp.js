function setPopupVisibility(show){
let popup = document.getElementById("popup");
if(show == true){
  popup.style.visibility = "visible";
}
else{
  popup.style.visibility = "hidden";
}

}

function make_a_folder(){
  let name = document.getElementById("folder_name").value;
  let trimName = name.trim();
  if(trimName === ""){
    alert("Please name the folder with letters or numbers");
  }
  else{
    alert(name + " created");
    name = ' ';
    setPopupVisibility(false);
  }
  //need to fix error of the text not clearing after calling make_a_folder
  name = ' ';
}

function user_effed_up(){
  alert("Please select the appropriate button");
}