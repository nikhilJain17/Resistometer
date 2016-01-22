
// Get the values in the form
// calculate values
// graph
// require(['Chartjs'], function (Chart) {

// });

var vi, r, c, tau;


function dischargeBtnClick() {

	var ctx = document.getElementById("myChart").getContext("2d");

	console.log('Graphing for discharging');
	// snag the values
	vi = document.getElementById('vi').value;
	// vf = document.getElementById('vf').value;
	r = document.getElementById('r').value;
	c = document.getElementById('c').value;

	tau = r * c;

	console.log('\nVI: ' + vi + '\nR: ' + r + '\nC: ' + c + '\nTau: ' + tau);

	// for (var i = 0; i < 10; i++) {
	// 	calculateVc(tau * i);
	// }

	var data = {

		labels: ['Tau', '2 Tau', '3 Tau', '4 Tau', '5 Tau', ],

		datasets: [
			{

				label: 'Vc, Discharging',
				fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [ calculateVc(tau), calculateVc(2 * tau), calculateVc(3 * tau), calculateVc(4 * tau), calculateVc(5 * tau) ]


			} // end of data set 1
		] // end of datasets array

	}; // end of data object

	var myLineChart = new Chart(ctx).Line(data, {
		pointDot : true
	});


}

// calculate the stuff
function calculateVc(time) {

	console.log('\n\nTime over tau: ' + time/tau);

	var vc = vi * Math.pow(Math.E, (-time/tau)); 
	console.log("Time: " + time + " tau, Vc = " + vc);
	return vc;

}

// set on change for slider

