import './styles/main.pcss'
// import currentSubject from "./welcomePage";

if (process.env.NODE_ENV === 'development') {
	require('file-loader!./index.pug')
}
// console.log(currentSubject);
let title = localStorage.getItem('currentSubject')

console.log(title)
const subjectName = document.querySelector('.welcome-section__name-title')
document.querySelector('.main-title').innerText = title
subjectName.innerText = title

// geting canvas by Boujjou Achraf
var c = document.getElementById('c')
var ctx = c.getContext('2d')

//making the canvas full screen
c.height = window.innerHeight
c.width = window.innerWidth

//chinese characters - taken from the unicode charset
// var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
var matrix = '01'
//converting the string into an array of single characters
matrix = matrix.split('')

var font_size = 10
var columns = c.width / font_size //number of columns for the rain
//an array of drops - one per column
var drops = []
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++) drops[x] = 1

//drawing the characters
function draw() {
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
	ctx.fillRect(0, 0, c.width, c.height)

	ctx.fillStyle = '#18629e' // text color
	ctx.font = font_size + 'px NewZelek'
	//looping over drops
	for (var i = 0; i < drops.length; i++) {
		//a random chinese character to print
		var text = matrix[Math.floor(Math.random() * matrix.length)]
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i * font_size, drops[i] * font_size)

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0

		//incrementing Y coordinate
		drops[i]++
	}
}

let timeInterval = 1

function changeTimeInterval() {
	timeInterval = 35
}
// setTimeout(changeTimeInterval, 1)
var drawInterval = setInterval(draw, 15)
setTimeout(() => {
	clearInterval(drawInterval)
	// timeInterval = 35
	setInterval(draw, 45)
}, 1100)

// import "./scripts/skills";
// import "./scripts/parallax";
// import "./scripts/reviews";
// import "./welcomePage";
import './scripts/hamburger-menu'
// import "./scripts/style";
import './scripts/myWorks'
// import "./scripts/contact-form-validate";
// import "./scripts/scrollTo";
