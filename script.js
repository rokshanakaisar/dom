// ===========Body==========
let body = document.getElementById('body');
body.style.backgroundColor = "#FEE4C3";
body.style.margin = "0";
body.style.padding = "0";
body.style.height = "100vh";

// ======Main======
let mainDiv = document.getElementById('main');
mainDiv.style.display ="flex";
mainDiv.style.flexDirection = "column";
mainDiv.style.alignItems = "center";
mainDiv.style.paddingTop = "50px";

// ====Heading======
let head = document.getElementById('heading');
head.style.backgroundColor = "red";
head.style.padding = "20px 50px";
head.innerText = 'Welcome To JS DOM Test!! :)';

// ====Div1===
let Div1 = document.getElementById('div1');
Div1.style.display = "flex";


//===== Div2====
let Div2 = document.getElementById('div2');
Div2.style.display = 'flex';

// =====p====
let para = document.getElementsByClassName('paragraph');
para[0].style.color = 'red';
para[1].style.color = 'green';
para[2].style.color = 'blue';
para[3].style.color = 'brown';
para[4].style.color = 'skyblue';
para[0].style.fontSize = '22px';
para[1].style.fontSize = '22px';
para[2].style.fontSize = '22px';
para[3].style.fontSize = '22px';
para[4].style.fontSize = '22px';
para[0].style.fontWeight = 'bold';
para[1].style.fontWeight = 'bold';
para[2].style.fontWeight = 'bold';
para[3].style.fontWeight = 'bold';
para[4].style.fontWeight = 'bold';

// =====BookList===
let BookList =document.getElementsByClassName('book-list');
BookList[2].style.color = 'skyblue';

// ======Fruits====
let FruitsList =document.getElementsByClassName('fruits-list');
FruitsList[3].style.color = 'skyblue';
FruitsList[0].setAttribute('li', 'ol');
// ======PlaceList====
let PlaceList =document.getElementsByClassName('place-list');
PlaceList[3].style.color = 'skyblue';


