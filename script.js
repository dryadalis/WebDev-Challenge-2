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

}

viewMoreBtn.addEventListener('click', showMore);
