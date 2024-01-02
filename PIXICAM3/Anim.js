//------------------------ 1/ We rezise the color block --------------------------// 

window.addEventListener('resize', adjustDivSize);
window.addEventListener('load', adjustDivSize);
const ScalingFactor = 0.04
const ScalingFactorMobile = 0.08
        function adjustDivSize() {
          console.log()
          if(window.location.pathname.includes("/index.html"))//this will make the container always squared even for small width 
            {
              const Container = document.getElementById("Container");
              let Height = Container.offsetHeight;
              let Width  = Container.offsetWidth;
              if(Width <= Height){
                Container.style.height = Container.offsetWidth + "px";
                console.log("height",Container.style.height)
                console.log("width",Container.style.width)
                console.log("square resize",Container.style.height ,Container.offsetWidth)
              }
              else{
                Container.style.height = "60vh";
              }
            }
            const resizeTool = document.getElementsByClassName('resizeToolBlock');
            const colorChoice = document.getElementById('colorChoice');
            const windowHeight = window.innerHeight;
            let newHeight=0;
            if(window.location.pathname.includes("/indexMobile.html")){// Scaling the resize factor for the color on Mobile/tablet
              newHeight = windowHeight * ScalingFactorMobile;
              newInerMargin = windowHeight * 0.02;
              for (let i = 0; i < resizeTool.length; i++) {//applying the margin resize
              resizeTool[i].style.margin = newInerMargin + 'px';
              }
            }
            else{ // Scaling the resize factor for the color on other device
              newHeight = windowHeight * ScalingFactor;
              }
            for (let i = 0; i < resizeTool.length; i++) {//applying the resize
              resizeTool[i].style.height = newHeight + 'px';
              resizeTool[i].style.width = newHeight + 'px';
          }
          const newRadius = (newHeight *0.4 ); // Resizing tthe border radius according to the new Height
          colorChoice.style.borderRadius = newRadius + 'px';
        }

//-----------------------------2/ POP UP-------------------------------//

function OpenPopUp(){
  let PopupOkay = document.getElementById("Popup-Okay");
  let PopupOverlay = document.getElementById("Popup-Overlay");

  PopupOverlay.removeAttribute('class', 'close');
  PopupOverlay.setAttribute('class', 'open');

    if (PopupOkay) {// if statement prevent error on mobile page wich doesn't contain popUp
    PopupOkay.addEventListener('click' , function (e) {
      PopupOverlay.setAttribute('class', 'close');
    });
  }
}

//-------------------3/ Animation scale for the selected color------------------//

let resizeToolBlock = document.getElementsByClassName("resizeToolBlock");

// Loop through each element with the class "resizeToolBlock"
for (var i = 0; i < resizeToolBlock.length; i++) {
  // Add an event listener to each element
  resizeToolBlock[i].addEventListener("click", (function (index) {
    return function (e) {
      // Change the class for the clicked element
      resizeToolBlock[index].classList.add("color-Selected");
       for (var j = 0; j < resizeToolBlock.length; j++) {
         if (j !== index) {
           resizeToolBlock[j].classList.remove("color-Selected");
         }
       }
    };
  })(i));
}

//---------------------------4/ Hiding tool bar-----------------------------------//
let hiden = Boolean;
hiden = false
function HideToolbar(){
  if(hiden === true){//case if the toolbar is hiden
    hiden=false;
    colorChoice.querySelectorAll('div').forEach(item => {
      item.style.display = "flex";
      });
    colorChoice.querySelectorAll("section").forEach((item, index) => {
      if (index === 1 || index === 0 ) {
        item.style.display= "flex";
        }
        if(index=== 2 ){
          item.innerHTML='<i class="fa-solid fa-eye-slash"></i>'
        }
    });
    colorChoice.style.background =  "#668bcb";  
  }
  else if(hiden===false){//case if the toolbar is visible
    hiden=true;
    colorChoice.querySelectorAll('div').forEach(item => {
      item.style.display = "none"; // Clear the innerHTML of each color item
      });
    colorChoice.querySelectorAll("section").forEach((item, index) => {
      if (index === 1 || index === 0 ) {
        item.style.display= "none";
        }
      if(index=== 2 ){
        item.innerHTML='<i class="fa-solid fa-eye"></i>'
      }
    });
    colorChoice.style.background =  "none";
    colorChoice.style.boxShadow =  "none";
  }
}

//------------------------5/ Redirect to the mobilie app-----------------------//

if(!window.location.pathname.includes('indexMobile.html'))
{window.addEventListener('touchstart', function() {
  allerAPage("indexMobile");
  });
}
//---------------------------6/ Open page function-------------------------------//

function allerAPage(nouvellePage) {
  window.location.href = nouvellePage + '.html';
  if(nouvellePage==="indexMobile")
  {alert("YOU ARE JOINING THE MOBILE VERSION");}
}

