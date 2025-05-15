







const buttonEl = document.querySelector('.btn')
const inputEl = document.querySelector('.input');
const headingEl = document.querySelector('.heading');
const contentEl = document.querySelector('.content');

buttonEl.textContent = 'New text'
buttonEl.style.color = 'orange'

buttonEl.addEventListener('click', function (e) {
    alert('Я изучаю javascript')
});

inputEl.addEventListener('input', function (e) {
    headingEl.textContent = inputEl.value
});

const newData = [
    { heading: 'Новость 1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio' },
    { heading: 'Новость 2', text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio' },
]

newData.forEach(news => {
    contentEl.innerHTML += `
        <div>
            <h3>${news.heading}</h3>
            <p>${news.text}</p>
            <p>Дата</p>
            <a href="">смотреть новость</a>
        </div>
    `
});