// requirejs(['file:///Users/nikhil/development/Resistometer/Dependencies/Chart.js-master/Chart.js'], function (Chart) {
// 	    var Chartjs = Chart.noConflict();

// });
	// Get the context of the canvas element we want to select

// require('chart');		

// to be called after the document has been loaded

function loadchart() {

    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};


    var barChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,0.8)",
                highlightFill : "rgba(151,187,205,0.75)",
                highlightStroke : "rgba(151,187,205,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    }
    window.onload = function(){
        var ctx = document.getElementById("canvas").getContext("2d");
        window.myBar = new Chart(ctx).Line(barChartData, {
            responsive : true
        });
    }
} // end of chart

loadchart();

// document.addEventListener("DOMContentLoaded", loadchart, false);
// 	console.log("wassup")