let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let centerBox = document.getElementById('center');

for (list of lists) {
    list.addEventListener('dragstart', function (e) {
        let selected = e.target;
        selected.classList.add('dragging');
    });

    list.addEventListener('dragend', function (e) {
        let selected = document.querySelector('.list.dragging');
        selected.classList.remove('dragging');
        let newPosition = selected.parentElement.id;
        let elementId = selected.id;
        saveToDatabase(elementId, newPosition);
    });
}

function saveToDatabase(elementId, newPosition) {
    // Отправка данных на сервер с использованием AJAX
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/save_to_database/', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Данные успешно сохранены в базе данных.');
        }
    };
    let data = JSON.stringify({
        'element_id': elementId,
        'new_position': newPosition
    });
    xhr.send(data);
}
