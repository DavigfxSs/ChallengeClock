var clock = new Date()
var hour = clock.getHours()
var mins = clock.getMinutes()
        
document.getElementById('Times')
document.getElementById('bg')
document.getElementById('image')
Times.innerHTML = `<p>O Horario atual é ${hour} horas e ${mins} minutos.</p>`



if (hour < 12) {
    bg.style.backgroundColor = 'lightblue'
}
else if (hour > 11) {
    bg.style.backgroundColor = 'lightyellow'
}
else if (hour > 17) { 
        bg.style.backgroundColor = '#42426F'
}

if (hour < 12) {
    image.innerHTML = '<img src="imgs/caribe-brasileiro-capa-1-820x430.png" alt="Morning"></img>'
}
else if (hour > 11) {
    image.innerHTML = '<img src="imgs/depositphotos_83681132-stock-photo-sunset-on-the-beach.jpg" alt="Afternoon"></img>'
}
else if (hour > 17) {
    image.innerHTML = '<img src="imgs/luar-na-praia-das-ondas-ao-anoitecer_506134-6525.png" alt="Night">'
}