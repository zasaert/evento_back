let lists = document.getElementsByClassName('list')
let rightBox = document.getElementById('right')
let leftBox = document.getElementById('left')
let centerBox = document.getElementById('center')

for (list of lists) {
	list.addEventListener('dragstart', function (e) {
		let selected = e.target

		rightBox.addEventListener('dragover', function (e) {
			e.preventDefault()
		})
		rightBox.addEventListener('drop', function (e) {
			rightBox.appendChild(selected)
			selected = null
		})

		leftBox.addEventListener('dragover', function (e) {
			e.preventDefault()
		})
		leftBox.addEventListener('drop', function (e) {
			leftBox.appendChild(selected)
			selected = null
		})

		centerBox.addEventListener('dragover', function (e) {
			e.preventDefault()
		})
		centerBox.addEventListener('drop', function (e) {
			centerBox.appendChild(selected)
			selected = null
		})
	})
}

function openPopup() {
	var popup = document.getElementById('popup')
	popup.style.display = 'block'
}

// Функция для закрытия всплывающего окна
function closePopup() {
	var popup = document.getElementById('popup')
	popup.style.display = 'none'
}

////////////////////////для левого столбца
let center_list = document.querySelectorAll('#center.list')
console.log(center_list)
/*
function handleDrop(event) {
	event.preventDefault()
	var data = event.dataTransfer.getData('text')
	var droppedElement = document.getElementById(data)
	var container = event.target
	container.appendChild(droppedElement)
	// Собираем данные для сохранения в базе данных
	var elementId = droppedElement.id
	var newPosition = container.id
	saveToDatabase(elementId, newPosition)
}

function saveToDatabase(elementId, newPosition) {
	// Отправляем данные на сервер через AJAX запрос
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/save_to_database/", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	var data = JSON.stringify({
			"element_id": elementId,
			"new_position": newPosition
	});
	xhr.send(data);
}*/
