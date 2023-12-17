/*
Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/

/* Алгоритм решения задачи */
// 1. Найти на странице "действующие" элементы(с которыми будеи взаимодействовать)
const carImage = document.querySelector("#imgHolder img");
const buttons = document.querySelectorAll(".colorItem");

// 2. Отслеживаем пользовательские события
buttons.forEach(item => item.addEventListener('click', function(e){

  // Получаем содержание дата-атрибута
  const fileName = e.target.dataset.file

  // 3. Пишем функции, которые сработают на действия пользователя
  carImage.src = `https://webcademy.ru/files/js2020/solaris/${fileName}`
  
  // Убираем обрамление у дефолтной кноки
  const prevButton = document.querySelector('.colorItem--active')
  prevButton.classList.remove('colorItem--active')

  // Делаем обрамление кнопки
  e.target.classList.add('colorItem--active')
}))
