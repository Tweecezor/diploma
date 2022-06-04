import './styles/main.pcss'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
const axios = require('axios')
// axios.baseUrl = "http://localhost:3000/";
axios.baseUrl = 'https://young-anchorage-15160.herokuapp.com/'
let select = document.querySelector('.actions__subject')
let link = document.querySelector('.actions__confirm_button')
let currentSelected
;(function() {
	var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		w = (canvas.width = innerWidth),
		h = (canvas.height = innerHeight),
		particles = [],
		properties = {
			bgColor: 'white',
			particleColor: '#0078cf',
			particleRadius: 3,
			particleCount: 60,
			particleMaxVelocity: 0.5,
			lineLength: 150,
			particleLife: 6,
		}
	canvas.classList.add('canvas')

	document.querySelector('body').appendChild(canvas)

	window.onresize = function() {
		;(w = canvas.width = innerWidth), (h = canvas.height = innerHeight)
	}

	class Particle {
		constructor() {
			this.x = Math.random() * w
			this.y = Math.random() * h
			this.velocityX =
				Math.random() * (properties.particleMaxVelocity * 2) -
				properties.particleMaxVelocity
			this.velocityY =
				Math.random() * (properties.particleMaxVelocity * 2) -
				properties.particleMaxVelocity
			this.life = Math.random() * properties.particleLife * 60
		}
		position() {
			;(this.x + this.velocityX > w && this.velocityX > 0) ||
			(this.x + this.velocityX < 0 && this.velocityX < 0)
				? (this.velocityX *= -1)
				: this.velocityX
			;(this.y + this.velocityY > h && this.velocityY > 0) ||
			(this.y + this.velocityY < 0 && this.velocityY < 0)
				? (this.velocityY *= -1)
				: this.velocityY
			this.x += this.velocityX
			this.y += this.velocityY
		}
		reDraw() {
			ctx.beginPath()
			ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2)
			ctx.closePath()
			ctx.fillStyle = properties.particleColor
			ctx.fill()
		}
		reCalculateLife() {
			if (this.life < 1) {
				this.x = Math.random() * w
				this.y = Math.random() * h
				this.velocityX =
					Math.random() * (properties.particleMaxVelocity * 2) -
					properties.particleMaxVelocity
				this.velocityY =
					Math.random() * (properties.particleMaxVelocity * 2) -
					properties.particleMaxVelocity
				this.life = Math.random() * properties.particleLife * 60
			}
			this.life--
		}
	}

	function reDrawBackground() {
		ctx.fillStyle = properties.bgColor
		ctx.fillRect(0, 0, w, h)
	}

	function drawLines() {
		var x1, y1, x2, y2, length, opacity
		for (var i in particles) {
			for (var j in particles) {
				x1 = particles[i].x
				y1 = particles[i].y
				x2 = particles[j].x
				y2 = particles[j].y
				length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
				if (length < properties.lineLength) {
					opacity = 1 - length / properties.lineLength
					ctx.lineWidth = '0.5'
					ctx.strokeStyle = '#0078cf'
					ctx.beginPath()
					ctx.moveTo(x1, y1)
					ctx.lineTo(x2, y2)
					ctx.closePath()
					ctx.stroke()
				}
			}
		}
	}

	function reDrawParticles() {
		for (var i in particles) {
			particles[i].reCalculateLife()
			particles[i].position()
			particles[i].reDraw()
		}
	}

	function loop() {
		reDrawBackground()
		reDrawParticles()
		drawLines()
		requestAnimationFrame(loop)
	}

	function init() {
		for (var i = 0; i < properties.particleCount; i++) {
			particles.push(new Particle())
		}
		loop()
	}

	init()
})()
;(function() {
	var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		w = (canvas.width = innerWidth),
		h = (canvas.height = innerHeight),
		particles = [],
		properties = {
			bgColor: 'white',
			particleColor: '#0078cf',
			particleRadius: 3,
			particleCount: 60,
			particleMaxVelocity: 0.5,
			lineLength: 150,
			particleLife: 6,
		}
	canvas.classList.add('canvas3')

	document.querySelector('body').appendChild(canvas)

	window.onresize = function() {
		;(w = canvas.width = innerWidth), (h = canvas.height = innerHeight)
	}

	class Particle {
		constructor() {
			this.x = Math.random() * w
			this.y = Math.random() * h
			this.velocityX =
				Math.random() * (properties.particleMaxVelocity * 2) -
				properties.particleMaxVelocity
			this.velocityY =
				Math.random() * (properties.particleMaxVelocity * 2) -
				properties.particleMaxVelocity
			this.life = Math.random() * properties.particleLife * 60
		}
		position() {
			;(this.x + this.velocityX > w && this.velocityX > 0) ||
			(this.x + this.velocityX < 0 && this.velocityX < 0)
				? (this.velocityX *= -1)
				: this.velocityX
			;(this.y + this.velocityY > h && this.velocityY > 0) ||
			(this.y + this.velocityY < 0 && this.velocityY < 0)
				? (this.velocityY *= -1)
				: this.velocityY
			this.x += this.velocityX
			this.y += this.velocityY
		}
		reDraw() {
			ctx.beginPath()
			ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2)
			ctx.closePath()
			ctx.fillStyle = properties.particleColor
			ctx.fill()
		}
		reCalculateLife() {
			if (this.life < 1) {
				this.x = Math.random() * w
				this.y = Math.random() * h
				this.velocityX =
					Math.random() * (properties.particleMaxVelocity * 2) -
					properties.particleMaxVelocity
				this.velocityY =
					Math.random() * (properties.particleMaxVelocity * 2) -
					properties.particleMaxVelocity
				this.life = Math.random() * properties.particleLife * 60
			}
			this.life--
		}
	}

	function reDrawBackground() {
		ctx.fillStyle = properties.bgColor
		ctx.fillRect(0, 0, w, h)
	}

	function drawLines() {
		var x1, y1, x2, y2, length, opacity
		for (var i in particles) {
			for (var j in particles) {
				x1 = particles[i].x
				y1 = particles[i].y
				x2 = particles[j].x
				y2 = particles[j].y
				length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
				if (length < properties.lineLength) {
					opacity = 1 - length / properties.lineLength
					ctx.lineWidth = '0.5'
					ctx.strokeStyle = '#0078cf'
					ctx.beginPath()
					ctx.moveTo(x1, y1)
					ctx.lineTo(x2, y2)
					ctx.closePath()
					ctx.stroke()
				}
			}
		}
	}

	function reDrawParticles() {
		for (var i in particles) {
			particles[i].reCalculateLife()
			particles[i].position()
			particles[i].reDraw()
		}
	}

	function loop() {
		reDrawBackground()
		reDrawParticles()
		drawLines()
		requestAnimationFrame(loop)
	}

	function init() {
		for (var i = 0; i < properties.particleCount; i++) {
			particles.push(new Particle())
		}
		loop()
	}

	init()
})()
;(function() {
	var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		w = (canvas.width = innerWidth),
		h = (canvas.height = innerHeight),
		particles = [],
		properties = {
			bgColor: 'white',
			particleColor: '#0078cf',
			particleRadius: 3,
			particleCount: 60,
			particleMaxVelocity: 0.5,
			lineLength: 150,
			particleLife: 6,
		}
	canvas.classList.add('canvas4')

	document.querySelector('body').appendChild(canvas)

	window.onresize = function() {
		;(w = canvas.width = innerWidth), (h = canvas.height = innerHeight)
	}

	class Particle {
		constructor() {
			this.x = Math.random() * w
			this.y = Math.random() * h
			this.velocityX =
				Math.random() * (properties.particleMaxVelocity * 2) -
				properties.particleMaxVelocity
			this.velocityY =
				Math.random() * (properties.particleMaxVelocity * 2) -
				properties.particleMaxVelocity
			this.life = Math.random() * properties.particleLife * 60
		}
		position() {
			;(this.x + this.velocityX > w && this.velocityX > 0) ||
			(this.x + this.velocityX < 0 && this.velocityX < 0)
				? (this.velocityX *= -1)
				: this.velocityX
			;(this.y + this.velocityY > h && this.velocityY > 0) ||
			(this.y + this.velocityY < 0 && this.velocityY < 0)
				? (this.velocityY *= -1)
				: this.velocityY
			this.x += this.velocityX
			this.y += this.velocityY
		}
		reDraw() {
			ctx.beginPath()
			ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2)
			ctx.closePath()
			ctx.fillStyle = properties.particleColor
			ctx.fill()
		}
		reCalculateLife() {
			if (this.life < 1) {
				this.x = Math.random() * w
				this.y = Math.random() * h
				this.velocityX =
					Math.random() * (properties.particleMaxVelocity * 2) -
					properties.particleMaxVelocity
				this.velocityY =
					Math.random() * (properties.particleMaxVelocity * 2) -
					properties.particleMaxVelocity
				this.life = Math.random() * properties.particleLife * 60
			}
			this.life--
		}
	}

	function reDrawBackground() {
		ctx.fillStyle = properties.bgColor
		ctx.fillRect(0, 0, w, h)
	}

	function drawLines() {
		var x1, y1, x2, y2, length, opacity
		for (var i in particles) {
			for (var j in particles) {
				x1 = particles[i].x
				y1 = particles[i].y
				x2 = particles[j].x
				y2 = particles[j].y
				length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
				if (length < properties.lineLength) {
					opacity = 1 - length / properties.lineLength
					ctx.lineWidth = '0.5'
					ctx.strokeStyle = '#0078cf'
					ctx.beginPath()
					ctx.moveTo(x1, y1)
					ctx.lineTo(x2, y2)
					ctx.closePath()
					ctx.stroke()
				}
			}
		}
	}

	function reDrawParticles() {
		for (var i in particles) {
			particles[i].reCalculateLife()
			particles[i].position()
			particles[i].reDraw()
		}
	}

	function loop() {
		reDrawBackground()
		reDrawParticles()
		drawLines()
		requestAnimationFrame(loop)
	}

	function init() {
		for (var i = 0; i < properties.particleCount; i++) {
			particles.push(new Particle())
		}
		loop()
	}

	init()
})()
;(function() {
	var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		w = (canvas.width = innerWidth),
		h = (canvas.height = innerHeight),
		particles = [],
		properties = {
			bgColor: 'white',
			particleColor: '#0078cf',
			particleRadius: 3,
			particleCount: 60,
			particleMaxVelocity: 0.5,
			lineLength: 150,
			particleLife: 6,
		}
	canvas.classList.add('canvas2')

	document.querySelector('body').appendChild(canvas)

	window.onresize = function() {
		;(w = canvas.width = innerWidth), (h = canvas.height = innerHeight)
	}

	class Particle {
		constructor() {
			this.x = Math.random() * w
			this.y = Math.random() * h
			this.velocityX =
				Math.random() * (properties.particleMaxVelocity * 2) -
				properties.particleMaxVelocity
			this.velocityY =
				Math.random() * (properties.particleMaxVelocity * 2) -
				properties.particleMaxVelocity
			this.life = Math.random() * properties.particleLife * 60
		}
		position() {
			;(this.x + this.velocityX > w && this.velocityX > 0) ||
			(this.x + this.velocityX < 0 && this.velocityX < 0)
				? (this.velocityX *= -1)
				: this.velocityX
			;(this.y + this.velocityY > h && this.velocityY > 0) ||
			(this.y + this.velocityY < 0 && this.velocityY < 0)
				? (this.velocityY *= -1)
				: this.velocityY
			this.x += this.velocityX
			this.y += this.velocityY
		}
		reDraw() {
			ctx.beginPath()
			ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2)
			ctx.closePath()
			ctx.fillStyle = properties.particleColor
			ctx.fill()
		}
		reCalculateLife() {
			if (this.life < 1) {
				this.x = Math.random() * w
				this.y = Math.random() * h
				this.velocityX =
					Math.random() * (properties.particleMaxVelocity * 2) -
					properties.particleMaxVelocity
				this.velocityY =
					Math.random() * (properties.particleMaxVelocity * 2) -
					properties.particleMaxVelocity
				this.life = Math.random() * properties.particleLife * 60
			}
			this.life--
		}
	}

	function reDrawBackground() {
		ctx.fillStyle = properties.bgColor
		ctx.fillRect(0, 0, w, h)
	}

	function drawLines() {
		var x1, y1, x2, y2, length, opacity
		for (var i in particles) {
			for (var j in particles) {
				x1 = particles[i].x
				y1 = particles[i].y
				x2 = particles[j].x
				y2 = particles[j].y
				length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
				if (length < properties.lineLength) {
					opacity = 1 - length / properties.lineLength
					ctx.lineWidth = '0.5'
					ctx.strokeStyle = '#0078cf'
					ctx.beginPath()
					ctx.moveTo(x1, y1)
					ctx.lineTo(x2, y2)
					ctx.closePath()
					ctx.stroke()
				}
			}
		}
	}

	function reDrawParticles() {
		for (var i in particles) {
			particles[i].reCalculateLife()
			particles[i].position()
			particles[i].reDraw()
		}
	}

	function loop() {
		reDrawBackground()
		reDrawParticles()
		drawLines()
		requestAnimationFrame(loop)
	}

	function init() {
		for (var i = 0; i < properties.particleCount; i++) {
			particles.push(new Particle())
		}
		loop()
	}

	init()
})()

new Vue({
	el: '#test',
	data: function() {
		return {
			visible: false,
			subjects: [],
			value: '',
			currentData: '',
		}
	},
	methods: {
		async changePage() {
			if (this.value) {
				this.filterSubject()
				console.log(this.currentData)
				localStorage.setItem('currentSubject', this.currentData.subjectName)
				localStorage.setItem('creatorIdPublic', this.currentData.creatorId)
				// window.location.href = "http://localhost:8080/welcome";
				window.location.href =
					'https://tweecezor.github.io/diploma/dist/welcome'
			}
		},
		filterSubject() {
			this.subjects.map((item) =>
				item._id === this.value ? (this.currentData = item) : ''
			)
		},
	},
	async created() {
		// let response = await axios.get('http://localhost:3000/api/allSubjects')
		let response = await axios.get(
			'https://young-anchorage-15160.herokuapp.com/api/allSubjects'
		)
		this.subjects = response.data
		// response.data.forEach((item) => {
		//   this.subjects.push(item.subjectName);
		// });
	},
})
