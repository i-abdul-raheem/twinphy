var dzSparkLine = function(){

    var screenWidth = $( window ).width();
    
    var pieChart = function(){
        //pie chart
        if(jQuery('#dzPieChart').length > 0 ){
            //pie chart
            const pie_chart = document.getElementById('dzPieChart');
            const dzPieChart = new Chart(pie_chart, {
                type: 'pie',
                data: {
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow',
                        'grey'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [20, 50, 50, 90],
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(255, 205, 86)',
                          'rgb(54, 162, 235)',
                          'rgb(117, 187, 190)'
                        ],
                        hoverOffset: 4,
                       
                    }]
                    
                   
                },
                options: {
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,    
                                boxHeight: 20,    
                            }    
                        }
                    }
                }
            });
        }
    }
    
    var doughnutChart = function(){
        //Doughnut Chart
        if(jQuery('#dzDoughnutChart').length > 0 ){
            //Doughnut Chart
            const doughnutChart = document.getElementById('dzDoughnutChart');
            const dzDoughnutChart = new Chart(doughnutChart, {
                type: 'doughnut',
                data: {
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow',
                        'grey'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [100, 30, 60, 80],
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(54, 162, 235)',
                          'rgb(255, 205, 86)',
                          'rgb(117, 187, 190)'
                        ],
                        hoverOffset: 4
                    }]
                    
                },
                options: {
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,    
                                boxHeight: 20,    
                            }    
                        }
                    }
                }
            });
        }
    }
    
    var polarChart = function(){
        //polar chart
        if(jQuery('#dzPolarChart').length > 0 ){
            //polar chart
            const polar_Chart = document.getElementById('dzPolarChart');
            const dzPolarChart = new Chart(polar_Chart, {
                type: 'polarArea',
                data: {
                    labels: [
                        'Red',
                        'Green',
                        'Yellow',
                        'grey'
                      ],
                      datasets: [{
                        label: 'My First Dataset',
                        data: [60, 50, 120, 100],
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(75, 192, 192)',
                          'rgb(255, 205, 86)',
						  'rgb(117, 187, 190)'
                        ]
                    }]
                    
                },
                options: {
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,    
                                boxHeight: 20,    
                            }    
                        }
                    }
                }
            });
        }
    }
    
	/* Function ============ */
	return {
		init:function(){
			//dzSparkLine();
		},

		load:function(){
			pieChart();
			doughnutChart();
			polarChart();
		},
		
		resize:function(){
            pieChart();
            doughnutChart();
            polarChart();
		}
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	//dzSparkLine.init();
    
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	dzSparkLine.load();
	
});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	//dzSparkLine.resize();
    
});
/*  Window Resize END */