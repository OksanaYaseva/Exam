const items = [
    {
      title: "Мухоловка",
      description: "Главным преимуществом мухоловки является ее необычный внешний вид.",
      tags: ["flowers"],
      price: 900,
      img: "./img/1.jpg",
    },
    {
      title: "Трахиандра тортилис",
      description: "Редкое сокровище для коллекционеров",
      tags: ["flowers"],
      price: 1900,
      img: "./img/2.jpg",
    },
    {
      title: "Мирт",
      description: "Оживляющее изящные силуэты",
      tags: ["flowers", "tree"],
      price: 2300,
      img: "./img/3.jpg",
    },
    {
      title: "Монстера",
      description: "Пользуется популярностью благодаря неприхотливости в уходе и быстрому росту.",
      tags: ["tree", "flowers"],
      price: 2660,
      img: "./img/4.jpg",
    },
    {
      title: "Алоэ Вера",
      description: "Алоэ может существовать в условиях, когда другие растения вянут и умирают.",
      tags: ["flowers"],
      price: 1400,
      img: "./img/5.jpg",
    },
    {
      title: "Эчеверия",
      description: "«Каменная роза» прочно занимает лидирующие позиции по выращиванию. ",
      tags: ["flowers"],
      price: 3200,
      img: "./img/6.jpg",
    },
    {
      title: "Антоцефалус кадамба",
      description: "Цветы используются в парфюмерии",
      tags: ["flowers"],
      price: 5300,
      img: "./img/7.jpg",
    },
    {
      title: "Самшит ниваки",
      description: "Стиль ниваки помогает обустроить сад в японском стиле",
      tags: ["flowers", "tree"],
      price: 10500,
      img: "./img/8.jpg",
    },
    {
      title: "Чили Сельва",
      description: "Тропический цветок!",
      tags: ["tree", "flowers"],
      price: 7500,
      img: "./img/9.jpg",
    },
    {
      title: "Цикас",
      description: "Цикас часто называют пальмой, потому что внешне он, действительно, ее напоминает",
      tags: ["flowers", "tree"],
      price: 12800,
      img: "./img/10.jpg",
    },
    {
      title: "Тилландсия",
      description: "Цветок, внешне напоминающий клубок вязальных нитей",
      tags: ["flowers"],
      price: 8500,
      img: "./img/11.jpg",
    },
    {
      title: "Фуксия Катарина",
      description: "Кустовая сильнорослая хорошо ветвящаяся трёхлистная фуксия",
      tags: ["flowers"],
      price: 1800,
      img: "./img/12.jpg",
    },
  ];
  
  const shopItem = document.querySelector('#shop-items');
  const itemTemplate = document.querySelector('#item-template');
  
  function makeItemByTemplate(item) {
  
    const cardProductTemplate = itemTemplate.content.cloneNode(true);
    const tags = cardProductTemplate.querySelector(".tags");
  
    cardProductTemplate.querySelector("h1").textContent = item.title;
    cardProductTemplate.querySelector("p").textContent = item.description;
    cardProductTemplate.querySelector("img").src = item.img;
    cardProductTemplate.querySelector(".price").textContent = item.price;
  
  
    item.tags.forEach((tag) => {
      const divForTag = document.createElement("span");
      divForTag.classList.add("tag");
      divForTag.textContent = tag;
      tags.append(divForTag);
    });
  
    return cardProductTemplate;
  
  };
  
  
  function renderItems(items) {
    items.forEach((item) => {
      const newItem = makeItemByTemplate(item)
      shopItem.append(newItem)
    })
  
  }
  renderItems(items);
  
  
  let currentState = [...items];
  function sortByAlphabet(a, b) {
    if (a.title > b.title) {
      return 1;
    }
  
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  }
  
  renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));
  
  
  const sortontrol = document.querySelector("#sort");
  sortControl.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
  
    switch (selectedOption) {
      case "expensive": {
        currentState.sort((a, b) => b.price - a.price);
        break;
      }
      case "cheap": {
        currentState.sort((a, b) => a.price - b - price);
        break;
      }
      case "rating": {
  
        currentState.sort((a, b) => b.rating - a.rating);
        break;
      }
      case "alphabet": {
        currentState.sort((a, b) => sortByAlphabet(a, b));
        break;
      }
    }
    renderItems(currentState);
  });
  
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-btn");
  
  function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();
  
    currentState = items.filter((el) =>
      el.title.toLowerCase().includes(searchString)
    );
  
    currentState.sort((a, b) => sortByAlphabet(a, b));
    sortControl.selectedIndex = 0;
  
    renderItems(currentState);
  }
  
  searchButton.addEventListener("click", applySearch);
  searchInput.addEventListener("search", applySearch);