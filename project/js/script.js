

//alerts that show up on top and above the 

$(".close-button").click(function(){
    $(".alert").hide();
    $(".submit-alert").hide();
    $(".error-alert").hide();
});

$(".error-alert").hide();
$(".submit-alert").hide();

//validat

function validateForm(event) {
    var messageUser = document.getElementById("name").value;
    var messageContent = document.getElementById("message").value;
    if ( messageUser === null || messageUser === "" ) {
        $('.error-alert').fadeIn('slow').delay(2000).fadeOut('slow');
        event.preventDefault(event);
    } else if ( messageContent === null || messageContent === "" ) {
        $('.error-alert').fadeIn('slow').delay(2000).fadeOut('slow');
        event.preventDefault(event);
    } else {
        $('.submit-alert').fadeIn('slow').delay(2000).fadeOut('slow');
         $("input[name='searchUser']").val("");
         $("textarea").val("");
         event.preventDefault(event);
    }
}

$(".send").click(function(event) {
    validateForm(event);
});



//charts

var lineChart = document.getElementById("traffic").getContext('2d');
var myChart = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '# of visits',
            data: [500, 600, 1100, 1000, 1500, 2000, 1500, 1300, 1700, 2300, 2400, 2500, 2300],
            backgroundColor: [
                'rgba(116, 119, 191, 0.2)',
                'rgba(77, 76, 114, 0.2)'

            ],
            borderColor: [
                'rgba(77, 76, 114, 1)',
                'rgba(54, 162, 235, 1)'

            ],
            borderWidth: 1,
            pointBorderWidth: 3,
            pointRadius: 8,
            pointBackgroundColor: 'rgba(255, 255, 255, 0.8)',
            lineTension: 0
        }]
    },
    options: {
      legend: {
        display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var barChart = document.getElementById("chartDailyTraffic").getContext('2d');
var thisChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of daily users',
            data: [50, 100, 170, 125, 200, 180, 70],
            backgroundColor: [
                'rgba(116, 119, 191, 1)',
                'rgba(116, 119, 191, 1)',
                'rgba(116, 119, 191, 1)',
                'rgba(116, 119, 191, 1)',
                'rgba(116, 119, 191, 1)',
                'rgba(116, 119, 191, 1)',
                'rgba(116, 119, 191, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
        },
        scales: {
            yAxes: [{

                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



var donutChart = document.getElementById("chartMobileUsers").getContext('2d');
var thisChart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(116, 119, 191, 1)',
                'rgba(77, 76, 114, 1)',
                'rgba(129,201,143, 1)'
            ],
            borderColor: [
                'rgba(116, 119, 191, 1)',
                'rgba(77, 76, 114, 1)',
                'rgba(129,201,143, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        position: "right"
        },
        scales: {
          xAxes: [{
              display: false,
              gridLines: false
            }],
            yAxes: [{
                display: false,
                gridLines: false,
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
