// CANVAS OPHALEN HTML
// import * as dat from 'dat.gui'
// const gui = new dat.GUI()
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// SIZE 
canvas.width = innerWidth;
canvas.height = innerHeight;

const wave = {
    y: canvas.height / 2,
    lenght: 0.002,
    amplitude: 300,
    frequency: 0.01
}

const strokeColor = {
    h: 0,
    s: 100,
    l: 50
}

const backgroundColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 0.03
}

/* LIJN */
let increment = wave.frequency
function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.beginPath()
    c.moveTo(0, canvas.height / 2)

    for(var i = 0; i< canvas.width; i++){
        c.lineTo(i, wave.y + Math.sin(i * wave.lenght + increment) * wave.amplitude * Math.sin(increment))
    }
    c.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`
    c.stroke()
    increment += wave.frequency
}
animate()


