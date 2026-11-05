document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const regexName = /^[А-ЯІЇЄ][а-яіїє]+\s[А-ЯІЇЄ]\.[А-ЯІЇЄ]\.$/;
    const regexGroup = /^[А-ЯІЇЄA-Z]{2}-\d{2}$/;
    const regexId = /^[А-ЯІЇЄA-Z]{2}\s№\d{6}$/;
    const regexDob = /^\d{2}\.\d{2}\.\d{4}$/;
    const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

    let isValid = true;

    function validateField(id, regex) {
        const element = document.getElementById(id);
        if (!regex.test(element.value.trim())) {
            element.classList.add('error');
            isValid = false;
        } else {
            element.classList.remove('error');
        }
    }

    validateField('name', regexName);
    validateField('group', regexGroup);
    validateField('idcard', regexId);
    validateField('dob', regexDob);
    validateField('email', regexEmail);

    const output = document.getElementById('outputWindow');
    if (isValid) {
        document.getElementById('outName').innerText = "ПІБ: " + document.getElementById('name').value;
        document.getElementById('outGroup').innerText = "Група: " + document.getElementById('group').value;
        document.getElementById('outId').innerText = "ID-card: " + document.getElementById('idcard').value;
        document.getElementById('outDob').innerText = "Дата народж.: " + document.getElementById('dob').value;
        document.getElementById('outEmail').innerText = "e-mail: " + document.getElementById('email').value;
        
        output.style.display = 'block';
    } else {
        output.style.display = 'none';
        alert("У формі є помилки! Виправте поля, виділені червоним.");
    }
});

const table = document.getElementById('interactiveTable');
let counter = 1;
let targetCell = null;

for (let i = 0; i < 6; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        let cell = document.createElement('td');
        cell.innerText = counter;

        if (counter === 8) {
            targetCell = cell;
            targetCell.id = "cell-8";
            targetCell.dataset.colIndex = j; 
        }
        
        row.appendChild(cell);
        counter++;
    }
    table.appendChild(row);
}

if (targetCell) {
    targetCell.addEventListener('mouseover', function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    });

    targetCell.addEventListener('click', function() {
        const chosenColor = document.getElementById('colorPalette').value;
        this.style.backgroundColor = chosenColor;
    });

    targetCell.addEventListener('dblclick', function() {
        const paletteColor = document.getElementById('colorPalette').value;
        const startCol = parseInt(this.dataset.colIndex);
        
        for (let i = 0; i < table.rows.length; i++) {
            let row = table.rows[i];
            for (let j = startCol; j < row.cells.length; j += 2) {
                row.cells[j].style.backgroundColor = paletteColor;
            }
        }
    });
}