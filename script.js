const viewMoreBtn = document.getElementById('viewMoreBtn');

const showMore = () => {
    const column = document.createElement('div');
    column.classList.add('col-sm-6');
    document.getElementById('lastImage').append(column);

    const img = document.createElement('img');
    img.src = 'images/strawberries.jpg';
    img.classList.add('page--gallery__img');

    column.appendChild(img);

    const columnTwo = document.createElement('div');
    columnTwo.classList.add('col-sm-6');
    document.getElementById('lastImage').append(columnTwo);

    const imgTwo = document.createElement('img');
    imgTwo.src = 'images/kiwi.jpg';
    imgTwo.classList.add('page--gallery__img');

    columnTwo.appendChild(imgTwo);

    viewMoreBtn.classList.add('btn__hidden');

};

viewMoreBtn.addEventListener('click', showMore);


//SCROLLSPY

$('body').scrollspy({ target: '#navbar' });

//SMOOTH SCROLL
import('https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/14.2.1/smooth-scroll.min.js')
    .then( () => {
        var scroll = new SmoothScroll('a[href*="#"]');
    });