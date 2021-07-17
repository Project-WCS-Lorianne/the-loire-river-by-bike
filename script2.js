/* Mobile contact form  */
function popForm(){
  const popUpContact = document.getElementById('contact-drop');

  if (popUpContact.style.display === "none"){
      popUpContact.style.display = "block";
  } else {
      popUpContact.style.display = "none";
      }
};

/* Weather Map */
!function(d,s,id){
var js,fjs=d.getElementsByTagName(s)[0];
if(!d.getElementById(id))
{js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');


/* Restaurant Cards Code */
const restoCards = document.querySelector("#resto-cards");
const restoCardInfo = [
  {
    name: "Vibe",
    hours: "9 - 14 / 18 - 22",
    phone: "123 456 789",
    address: "16 rue Cordon Bleu",
    website: "site",
    link: "www",
    description: "A mix of bistro and gastronomic, a fusion paradise.",
    picture:
      "assets/images/resto1.jpg",
    food: "Sandwiches, Fusion, Vegetarian",
    price: `€€`
  },
  {
    name: "La Rivière Bleue",
    hours: "9 - 14 / 18 - 22",
    phone: "123 456 789",
    address: "25 rue St. Clair",
    website: "site",
    link: "www",
    description: "French gastronomy at its finest.",
    picture:
      "assets/images/resto2.jpg",
    food: "Traditional French",
    price: `€€€`
  },
  {
    name: "Brasserie La Beouf",
    hours: "9 - 14 / 18 - 22",
    phone: "123 456 789",
    address: "5 rue Résistance",
    website: "site",
    link: "www",
    description: "Well known and loved dishes with French flair.",
    picture:
      "assets/images/resto3.jpg",
    food: "Burgers, Steak",
    price: `€€`
  },
  {
    name: "Rêve Vert",
    hours: "9 - 14 / 18 - 22",
    phone: "123 456 789",
    address: "22 rue Marianne",
    website: "site",
    link: "www",
    description: "A veggie paradise with a diverse menu.",
    picture:
      "assets/images/resto4.jpg",
    food: "Vegetarian, Vegan",
    price: `€€`
  },
  {
    name: "Brasserie Laura",
    hours: "9 - 14 / 18 - 22",
    phone: "123 456 789",
    address: "48 rue Violet",
    website: "site",
    link: "www",
    description: "A brasserie with gastronomic flair. Fusion delights.",
    picture:
      "assets/images/resto5.jpg",
    food: "Fusion, Vegetarian, Sea Food",
    price: `€€`
  },
  {
    name: "Café Ma Fôret",
    hours: "9 - 14",
    phone: "123 456 789",
    address: "5 rue Fragrante",
    link: "www",
    description: "A breakfast café to indulge every appetite.",
    picture:
      "assets/images/resto6.jpg",
    food: "Breakfast, Sandwiches, Breads",
    price: `€`
  }
]

function createRestoCards(title, hours, phone, address, link, description, imageURL1, food, price) {

  const restoCardsContainer = document.querySelector(".resto-cards-container");

  const restoCards = document.createElement("div");
  restoCards.classList.add("resto-cards");
  restoCardsContainer.appendChild(restoCards);

  const restoImgBox = document.createElement("div");
  restoImgBox.classList.add("resto-img-box");
  restoImgBox.innerHTML = `<img src="${imageURL1}" alt="${title}">`;
  restoCards.appendChild(restoImgBox);

  /* bottom box content */

  const restoInfoBox = document.createElement("div");
  restoInfoBox.classList.add("resto-info-box");
  restoCards.appendChild(restoInfoBox);

  const restoTextTitle = document.createElement("div");
  restoTextTitle.classList.add("resto-text-title");
  restoTextTitle.innerHTML = `<h5>${title}</h5>`;
  restoInfoBox.appendChild(restoTextTitle);

  const restoText = document.createElement("div");
  restoText.classList.add("resto-text");
  restoText.innerHTML = description;
  restoTextTitle.appendChild(restoText);

  const restoData = document.createElement("div");
  restoData.classList.add("resto-data");
  restoInfoBox.appendChild(restoData);

  // left box
  const restoDataLeft = document.createElement("div");
  restoDataLeft.classList.add("resto-data-left");
  restoData.appendChild(restoDataLeft);

  const theHours = document.createElement("div");
  theHours.classList.add("resto-hours");
  theHours.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
  </svg> ${hours}`;
  restoDataLeft.appendChild(theHours);

  const restoAddress = document.createElement("div");
  restoAddress.classList.add("resto-address");
  restoAddress.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  </svg> ${address}`;
  restoDataLeft.appendChild(restoAddress);

  const foodType = document.createElement("div");
  foodType.classList.add("resto-food-type");
  foodType.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-straw" viewBox="0 0 16 16">
  <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"/>
  </svg> ${food}`;
  restoDataLeft.appendChild(foodType);

  // right box
  const restoDataRight = document.createElement("div");
  restoDataRight.classList.add("resto-data-right");
  restoData.appendChild(restoDataRight);

  const phoneNumber = document.createElement("div");
  phoneNumber.classList.add("resto-phone-number");
  phoneNumber.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
  </svg> ${phone}`;
 restoDataRight.appendChild(phoneNumber);

 const priceRange = document.createElement("div");
 priceRange.classList.add("resto-price-range");
 priceRange.innerHTML = `Price range: ${price}`;
 restoDataRight.appendChild(priceRange);
  
  const siteLink = document.createElement("div");
  siteLink.classList.add("resto-website");
  siteLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
  </svg> <a href="${link}">Website</a>`;
  restoDataRight.appendChild(siteLink);
}

for (let i = 0; i < restoCardInfo.length; i++) {
  createRestoCards(
    restoCardInfo[i].name,
    restoCardInfo[i].hours,
    restoCardInfo[i].phone,
    restoCardInfo[i].address,
    restoCardInfo[i].link,
    restoCardInfo[i].description,
    restoCardInfo[i].picture,
    restoCardInfo[i].food,
    restoCardInfo[i].price,
  )
};
