/* Castle Collapse */
for (let i = 0; i < 6; i++) {
    const theButton = document.querySelector(`.castle-click-button-${[i]}`);
    const theContent = document.querySelector(`.bottom-castle-content-${[i]}`);
  
    theButton.addEventListener("click", function(){
      if(theContent.style.display === "none") {
        theContent.style.display = "flex";
      } else {
        theContent.style.display = "none"
      }
    })
  };