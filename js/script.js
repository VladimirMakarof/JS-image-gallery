const search = document.querySelector('.fa-search');
const input = document.getElementById('input');
const grid = document.getElementById('grid');

const key = 'EuAqDWSjvx_5xaYeLp7nQ1W53JBUeBPWw9d8m4eE7io';

// светлая и темная тема

dayNightTheme = () => {
  let date = new Date();
  let hour = date.getHours();

  if (hour >= 7 && hour < 19) {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
  else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
}

// Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы.

window.addEventListener('load', dayNightTheme);

// Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.

input.addEventListener("keydown", (event) => {

  // Свойство event.key – это непосредственно символ "Enter"
  if (event.key == "Enter")
    // запускаем функцию apiRequest();
    apiRequest();
});

// запуск функции apiRequest(); по нажатию значка search

search.addEventListener("click", () => {
  apiRequest();
});

function apiRequest() {

  // удаляем фотографии перед новой загрузкой 

  grid.textContent = "";


  const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&client_id=' + `${key}`;

  fetch(url)

    .then(response => {
      // console.log(response);
      if (response.ok)
        return response.json();
      else
        alert(response.status)
    })

    .then(data => {
      loadImages(data);
    })

    .catch(error => console.log(error));
}
function loadImages(data) {
  for (let i = 0; i < data.results.length; i++) {
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage = "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")";
    image.addEventListener("dblclick", function () {
      window.open(data.results[i].links.download, '_blank');
    })
    grid.appendChild(image);
  }
}

// const mainContainer = document.querySelector('.container');
// const form = document.querySelector('.');
// const search = document.querySelector('.search_input');

// const key = 'EuAqDWSjvx_5xaYeLp7nQ1W53JBUeBPWw9d8m4eE7io';
// let query = '';
// let urlPopular = `https://api.unsplash.com/search/photos?query=spring&client_id=${key}`;
// let urlSearch = `https://api.unsplash.com/search/photos?page=1&query=`;

// getData(urlPopular)

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const newApi = `${urlSearch}${search.value}`

//     if (search.value) {
//         getData(newApi)
//     }
// })

// async function getData() {
//     const res = await fetch(adress);
//     const data = await res.json();
//     data.results.forEach((element) => {
//         showData(element)
//     })
// }

// function showData(data) {


// }
// getData();
// ===================================================

// const key = 'EuAqDWSjvx_5xaYeLp7nQ1W53JBUeBPWw9d8m4eE7io';


// let urlPopular = `https://api.unsplash.com/search/photos?query=spring&client_id=${key}`;

// const input = document.getElementById('input');
// const grid = document.getElementById('grid')[0];

// window.addEventListener('load', dayNightMode)

// input.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter')
//         loadImg();
// })

// function loadImg() {
//     removeImages();

//     const url = `https://api.unsplash.com/photos/random?client_id=${key}&count=30`;

//     fetch(url)

//         .then(response => {
//             // console.log(response);
//             if (response.ok)
//                 return response.json();
//             else
//                 alert(response.status)
//         })

//         .then(data => {
//             const imageNodes = [];
//             for (let i = 0; i < data.results.length; i++) {
//                 imageNodes[i] = document.createElement('div');
//                 imageNodes[i].className = 'img';
//                 imageNodes[i].style.backgroundImage = 'url('
//                     + data.results[i].urls.raw + ')';
//                 imageNodes[i].addEventListener('dblclick', function () {
//                     window.onpagehide(data.results[i].link.download, '_blank');
//                 })
//                 grid.appendChild(imageNodes[i]);
//             }
//         })
// }


// function removeImages() {
//     grid.innerHTML = '';
// }

// ============================