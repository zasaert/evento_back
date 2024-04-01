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

//для левого столбца
let center_list = document.querySelectorAll('#center.list')
console.log(center_list)
