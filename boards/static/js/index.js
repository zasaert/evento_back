
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
			console.log(name);
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
			let id = selected.textContent.replace(/\D/g, '')
			console.log(id);
			$.ajax({
				url: 'update_record/',
				type: 'POST',
				data: {
					record_id: id, // ID записи, которую нужно обновить
					new_value: status, // Новое значение для обновления
					'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),
				},
				success: function(response) {
					if (response.success) {
						console.log('Record updated successfully');
					} else {
						console.error('Error updating record: ' + response.error);
					}
				},
				error: function() {
					console.error('Error updating record');
				}
			});
			selected = null
			
		})
		centerbox.addEventListener('dragover', function (e) {
			e.preventDefault()
		})

		centerbox.addEventListener('drop', function (e) {
			if(selected!==1){
			centerbox.appendChild(selected)
			}
			let status = 1
			let id = selected.textContent.replace(/\D/g, '')
			console.log(id);
			$.ajax({
				url: 'update_record/',
				type: 'POST',
				data: {
					record_id: id, // ID записи, которую нужно обновить
					new_value: status, // Новое значение для обновления
					'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),
				},
				success: function(response) {
					if (response.success) {
						console.log('Record updated successfully');
					} else {
						console.error('Error updating record: ' + response.error);
					}
				},
				error: function() {
					console.error('Error updating record');
				}
			});
			selected = null
			
			
		})
	})
}


function deleteRecord(recordId) {
	$.ajax({
		url: "delete_record/" + recordId,
		type: "DELETE",
		success: function(response) {
		  // Обработка успешного ответа
		  console.log(response);
		  location.reload(); // Обновление страницы после удаления
		},
		error: function(error) {
		  // Обработка ошибки
		  console.log(error);
		}
	  });
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

//для левого столбца
let center_list = document.querySelectorAll('#center.list')
console.log(center_list)



