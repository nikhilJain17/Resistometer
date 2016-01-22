
// Get the values in the form
// calculate values
// graph

var vi, r, c, tau;

var ctx = document.getElementById("myChart").getContext("2d");


function dischargeBtnClick() {
	console.log('Graphing for discharging');
	// snag the values
	vi = document.getElementById('vi').value;
	// vf = document.getElementById('vf').value;
	r = document.getElementById('r').value;
	c = document.getElementById('c').value;

	tau = r * c;

	console.log('\nVI: ' + vi + '\nR: ' + r + '\nC: ' + c + '\nTau: ' + tau);

	for (var i = 0; i < 10; i++) {
		calculateVc(tau * i);
	}


}

// calculate the stuff
function calculateVc(time) {

	console.log('\n\nTime over tau: ' + time/tau);

	var vc = vi * Math.pow(Math.E, (-time/tau)); 
	console.log("Time: " + time + " tau, Vc = " + vc);
	return vc;

}

// set on change for slider

