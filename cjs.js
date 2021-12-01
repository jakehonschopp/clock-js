

setInterval(clock, 1000); 

function clock() {
	const d = new Date(); 
	document.getElementById("timer").innerHTML = d.toLocaleTimeString(); 

}