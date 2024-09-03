var clock = new Date()
var hour = clock.getHours()
var mins = clock.getMinutes()
        
document.getElementById('Times')
document.getElementById('bg')
document.getElementById('image')
Times.innerHTML = `<p>O Horario atual é ${hour} horas e ${mins} minutos.</p>`



if (hour >= 6 && hour < 12) {
    bg.style.backgroundColor = 'lightblue'
}
else if (hour >= 12 && hour < 18) {
    bg.style.backgroundColor = 'lightyellow'
}
else { 
    bg.style.backgroundColor = '#42426F'
}

if (hour >= 6 && hour < 12) {
    image.innerHTML = '<img src="imgs/caribe-brasileiro-capa-1-820x430.png" alt="Morning"></img>'
}
else if (hour >= 12 && hour < 18) {
    image.innerHTML = '<img src="imgs/depositphotos_83681132-stock-photo-sunset-on-the-beach.jpg" alt="Afternoon"></img>'
}
else {
    image.innerHTML = '<img src="imgs/luar-na-praia-das-ondas-ao-anoitecer_506134-6525.png">'
}