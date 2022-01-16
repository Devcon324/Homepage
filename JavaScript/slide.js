var slides = [];
slides[0] = "Pictures/PLsquat.jpg";
slides[1] = "Pictures/PLbench.jpg";
slides[2] = "Pictures/PLdeadlift.jpg";
let i = 0;

function next(){
	i = i + 1;
	if (i > 2){
		i = 0;
	}
	document.getElementById('slide').src = slides[i];
//	document.getElementById('state').innerHTML = "next_i = " + i;
	return i
}

function prev(){
	i = i - 1;
	if (i < 0){
		i = 2;
	}
	document.getElementById('slide').src = slides[i];
//	document.getElementById('state').innerHTML = " prev_i = " + i;
	return i;
}