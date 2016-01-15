
// Get the values in the form
// calculate values
// graph

var vi, vf, r, c;

function dischargeBtnClick() {
	console.log('Graphing for discharging');
	// snag the values
	vi = document.getElementById('vi').value;
	vf = document.getElementById('vf').value;
	r = document.getElementById('r').value;
	c = document.getElementById('c').value;

	console.log('\nVI: ' + vi + "\nVF: " + vf + '\nR: ' + r + '\nC: ' + c);

}