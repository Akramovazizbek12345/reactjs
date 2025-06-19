// import { useState } from 'react'
import './App.css'
function App() {
	let age =20
	const tekshirish = () => {
		if (age < 18) {
			document.getElementById('on').style.backgroundColor = 'red'
			document.getElementById('on').disabled = true
		} else if (age >= 18) {
			document.getElementById('on').style.backgroundColor = 'green'
		}
	}
	const bosganda = () => {
		if (document.getElementById('on').style.backgroundColor === 'green') {
			alert('siz 18 yoshdan kattasiz')
		}
	}
	return (
		<div>
			<button onClick={tekshirish}>Tekshirish</button>
			<button id='on' onClick={bosganda}>
				18+
			</button>
		</div>
	)
}

export default App
