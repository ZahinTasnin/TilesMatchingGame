let open = 0;
let dupes = 0;

function initialize(){
  for(i = 1; i<=16; i++){
    comp = document.getElementById("image"+i);
    comp.style.opacity=0;
    comp.style.pointerEvents = "auto";
    (i%2==0)? div1(comp):div2(comp);
  }
}

let div1 = (element) => {
  element.parentNode.style.backgroundColor="#3D405B";
  element.parentNode.style.borderColor="#81B29A";
}

let div2 = (element) => {
  element.parentNode.style.backgroundColor="#81B29A";
  element.parentNode.style.borderColor="#3D405B";
}

let add = (element) => {
 
  if(open===1 && element.style.opacity!=1){
    checkDups(element);
  }

  document.getElementById("tracker").innerHTML = parseInt(document.getElementById("tracker").innerHTML)+1;
  
  if(element.style.opacity==0){
    element.style.opacity = 1;
    element.style.transitionDuration = "0.5s";  
    if(element.style.pointerEvents != "none"){
      open++;
    }

  } else{
    element.style.opacity = 0;
    element.style.transitionDuration = "0.5s";
    open--;
  }

}

function checkDups(picture){  
  let source = picture.src;
  let pictureID = picture.id;
  let pictures = document.querySelectorAll(".image");
  for(i = 0; i<pictures.length; i++){

    if(pictures[i].src == source && pictures[i].id == pictureID){
      pictures[i].style.opacity=0;
    }  

    if(pictures[i].src == source && pictures[i].style.opacity==1 && pictures[i].id != pictureID){
      picture.style.pointerEvents = "none";
      pictures[i].style.pointerEvents = "none";
      console.log(open);
      open=0;
      dupes++;
      if(dupes===8){
        score = document.getElementById("tracker").innerHTML;
        setTimeout(() => { 
          alert(`You have won! You have clicked ${parseInt(score)+1} times`);
          initialize();
          document.getElementById("tracker").innerHTML = "0";
        }, 1000);
      }
      break;
    } 
    if(pictures[i].style.pointerEvents != "none"){
      picture.style.opacity=0;
      pictures[i].style.opacity= 0;
      open=0;
      console.log(open);
    }
  }
}
  
let reset = () =>{
  document.getElementById("tracker").innerHTML = "0";
  initialize();
}