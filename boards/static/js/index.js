let lists = document.getElementsByClassName('list')
let leftbox = document.getElementById('left')
let centerbox = document.getElementById('center')
let rightbox = document.getElementById('right')



for (list of lists) {
	list.addEventListener('dragstart', function (e) {
	 let selected = e.target

		leftbox.addEventListener('dragover', function (e) {
			e.preventDefault()
		})

		leftbox.addEventListener('drop', function (e) {
			if(selected!=1){
			rightbox.appendChild(selected)
			}
			let name = e.target.textContent
			let status = 0
			updateStatus(name,status)
			selected = null

		})
		rightbox.addEventListener('dragover', function (e) {
			e.preventDefault()
		})

		rightbox.addEventListener('drop', function (e) {
			
			if(selected!=1){
			rightbox.appendChild(selected)
			}
			let status = 2
			let name = selected.textContent
			updateStatus(name,status)
			selected = null
			
		})
		centerbox.addEventListener('dragover', function (e) {
			e.preventDefault()
		})

		centerbox.addEventListener('drop', function (e) {
			if(selected!=1){
			centerbox.appendChild(selected)
			}
			let status = 1
			let name = selected.textContent
			updateStatus(name,status)
			selected = null
			
		})
	})
}
function updateStatus(name, newStatus) { 
	// Подключение к базе данных
	const sqlite3 = require('sqlite3').verbose();
	let db = new sqlite3.Database('../db.sqlite3', (err) => {
	  if (err) {
		console.error('Ошибка подключения к базе данных:', err.message);
		return;
	  }
	  console.log('Подключено к базе данных.');
	  // Подготовка запроса
	  const stmt = db.prepare("UPDATE boards_card SET status = ? WHERE name = ?");
  
	  // Выполнение запроса
	  stmt.run(newStatus, name, (err) => {
		if (err) {
		  console.error('Ошибка обновления статуса:', err.message);
		} else {
		  console.log(`Статус строки с name ${id} обновлен на ${newStatus}`);
		}
  
		// Закрытие подготовленного запроса
		stmt.finalize((err) => {
		  if (err) {
			console.error('Ошибка завершения запроса:', err.message);
		  }
		});
	  });
	});
  
	 db.close((err) => {
	   if (err) {
	     console.error('Ошибка закрытия соединения с базой данных:', err.message);
	   } else {
	    console.log('Соединение с базой данных закрыто.');
	 }
	 });

function openPopup() {
	var popup = document.getElementById('popup')
	popup.style.display = 'block'
}

// Функция для закрытия всплывающего окна
function closePopup() {
	var popup = document.getElementById('popup')
	popup.style.display = 'none'
}

//для левого столбца
let center_list = document.querySelectorAll('#center.list')
console.log(center_list)
}