const el9 = document.getElementById('ninth-element');
const el10 = document.querySelector('.tenth-element');

if (el9) {
    el9.onclick = function() {
        el9.classList.toggle('highlight-1');
    };
}

if (el10) {
    el10.onclick = function() {
        el10.classList.toggle('highlight-2');
    };
}

const imgLink = document.getElementById('img-link');

document.getElementById('add-btn').onclick = function() {
    if (!document.getElementById('city-image')) {
        const newImg = document.createElement('img');
        newImg.src = 'Hmelnytsky.jpg';
        newImg.id = 'city-image';
        newImg.alt = 'Фото улюбленого міста';
        newImg.width = 600;
        
        imgLink.appendChild(newImg);
    }
};

document.getElementById('increase-btn').onclick = function() {
    const img = document.getElementById('city-image');
    if (img) {
        img.width += 50;
    }
};

document.getElementById('decrease-btn').onclick = function() {
    const img = document.getElementById('city-image');
    if (img && img.width > 50) {
        img.width -= 50;
    }
};

document.getElementById('delete-btn').onclick = function() {
    const img = document.getElementById('city-image');
    if (img) {
        img.remove();
    }
};