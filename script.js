/* Mobile contact form  */
function popForm(){
    const popUpContact = document.getElementById('contact-drop');

    if (popUpContact.style.display === "none"){
        popUpContact.style.display = "block";
    } else {
        popUpContact.style.display = "none";
        }
};

/*Castle Cards */
const castleCards = document.querySelector(".castle-cards");
const castleCardInfo = [
  {
    name: "Azray-le-Rideau",
    picture: "assets/images/azray-le-rideau.jpg",
    picture2: "assets/images/2azray.jpg"
  },
  {
    name: "Chenonceau",
    picture: "assets/images/chenonceau.jpg",
    picture2: "assets/images/3chenonceau.jpg"
  },
  {
    name: "Château Chaumont",
    picture: "assets/images/chaumont.jpg",
    picture2: "assets/images/4chaumont.jpg"
  },
  {
    name: "Royal de Blois",
    picture: "assets/images/royal-de-blois.jpg",
    picture2: "assets/images/5blois.jpg"
  },
  {
    name: "Chambord",
    picture: "assets/images/chambord.jpg",
    picture2: "assets/images/6chambord.jpg"
  }
];

function createCastleCards(title, imageURL1, imageURL2) {

  const body = document.querySelector(".castle-card-box");
  const castleCards = document.createElement("div");
  castleCards.classList.add("castle-cards");
  body.appendChild(castleCards);

  const castleWrapper = document.createElement("div");
  castleWrapper.classList.add("castle-wrapper");
  castleCards.appendChild(castleWrapper);

  const castleMapBox = document.createElement("div");
  castleMapBox.classList.add("castle-map-box");
  castleWrapper.appendChild(castleMapBox);

  const castleMapImg = document.createElement("div");
  castleMapImg.innerHTML = `<img src="${imageURL2}">`;
  castleMapBox.appendChild(castleMapImg);

  const castleImgBox = document.createElement("div");
  castleImgBox.classList.add("castle-img-box");
  castleWrapper.appendChild(castleImgBox);
  
  const castleImg = document.createElement("div");
  castleImg.classList.add("castle-img-box");
  castleImg.innerHTML = `<img src="${imageURL1}">`;
  castleImgBox.appendChild(castleImg);

  const castleOverlay = document.createElement("div");
  castleOverlay.classList.add("castleImgBoxOverlay");
  castleImgBox.appendChild(castleOverlay);

  const castleImgBoxText = document.createElement("div");
  castleImgBoxText.classList.add("castle-img-box-text");
  castleImgBoxText.innerHTML = title;
  castleOverlay.appendChild(castleImgBoxText);
}
for (let i = 0; i < castleCardInfo.length; i++) {
  createCastleCards(castleCardInfo[i].name, castleCardInfo[i].picture, castleCardInfo[i].picture2);
};


/* Weather Map */
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src='https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js,fjs);
    }}(document,'script','weatherwidget-io-js');

    