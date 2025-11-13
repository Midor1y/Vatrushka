// --------- Меню ---------
const MENU = [
  { id: "americano",  name: "Американо",      price: 800,  cat: "coffee" },
  { id: "cappuccino", name: "Капучино",       price: 900,  cat: "coffee" },
  { id: "raf",        name: "Раф",            price: 850,  cat: "coffee" },
  { id: "flatwhite",  name: "Флэт-уайт",      price: 900,  cat: "coffee" },
  { id: "latte",      name: "Латте",          price: 900,  cat: "coffee" },
  { id: "iced-am",    name: "Iced Americano", price:1100,  cat: "coffee" },
  { id: "iced-latte", name: "Iced Latte",     price:1200,  cat: "coffee" },
  { id: "cacao",      name: "Какао",          price: 700,  cat: "coffee" },

  // Сладкое
  { id: "vatru",      name: "Ватрушка",       price: 450,  cat: "sweet" },
  { id: "croiss-ch",  name: "Круассан (шок/фист)", price:650, cat:"sweet" },
  { id: "cinnabon",   name: "Синнабон",       price: 750,  cat: "sweet" },
  { id: "syrniki",    name: "Сырники",        price:1000,  cat:"sweet" },
  { id: "brownie",    name: "Шокол. брауни",  price:1200,  cat:"sweet" },

  // Еда
  { id: "croiss-chicken", name:"Круассан с курицей", price:850, cat:"food" },
  { id: "croiss-salmon",  name:"Круассан с семгой",  price:950, cat:"food" },
  { id: "ciabatta",  name:"Чиабатта",               price:900, cat:"food" },
  { id: "roll-caesar", name:"Ролл Цезарь",          price:800, cat:"food" },
  { id: "roll-phila",  name:"Ролл Филадельфия",     price:1000,cat:"food" },
  { id: "panini",   name:"Панини / Спортини / Мулатка", price:800, cat:"food" },
  { id: "panini-jal", name:"Панини с халапеньо",    price:800, cat:"food" },
  { id: "hotdog",   name:"Хот-догстер",             price:750, cat:"food" },
  { id: "burger",   name:"Бургер",                  price:850, cat:"food" },
  { id: "doner",    name:"Донер",                   price:850, cat:"food" },
  { id: "toast",    name:"Тост (сырный/кубинский)", price:800, cat:"food" },
  { id: "twister",  name:"Твистер с наггетсами",    price:800, cat:"food" },
  { id: "club",     name:"Клаб-сэндвич",            price:750, cat:"food" },
  { id: "onigiri",  name:"Онигири",                 price:800, cat:"food" },
  { id: "sausage",  name:"Сосиска в тесте",         price:450, cat:"food" },
  { id: "samsa",    name:"Самса (курица/сыр)",      price:400, cat:"food" },
  { id: "blini",    name:"Блины с курицей/лососем", price:1000,cat:"food" },
];

// --------- Рендер карточек ---------
const cardsEl = document.getElementById("cards");

function renderCards(list){
  cardsEl.innerHTML = "";
  list.forEach(item=>{
    const card = document.createElement("article");
    card.className = "card";

    const imgPath = `images/menu/${item.id}.jpg`;

    card.innerHTML = `
      <img class="card__img" src="${imgPath}" alt="${item.name}" loading="lazy">
      <div class="card__body">
        <h3>${item.name}</h3>
        <div class="card__meta">
          <span class="badge">${labelByCat(item.cat)}</span>
          <span class="price">${item.price} ₸</span>
        </div>
        <button class="primary add" data-id="${item.id}">Добавить</button>
      </div>`;
    cardsEl.appendChild(card);
  });
}

function labelByCat(cat){
  if(cat==="coffee") return "кофе";
  if(cat==="sweet") return "сладкое";
  return "еда";
}

// Рендер по умолчанию
renderCards(MENU);
