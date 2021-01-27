$(function() {
    $(document).ready(function() {
        // _______________chart 1_____________
        $(function () {
            var colors = ['#FFBE3C', '#246BBB','#16B37B'];
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'myChart1',
                    type: 'pie',
                    borderRadius: 0
                },
                credits: {
                    enabled: false
                },
                title: false,
                tooltip: false,
                plotOptions: {
                    pie: {
                        innerSize: '70%',
                        size: '100%',
                        dataLabels: false,
                        stickyTracking: false,
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        point: {
                        events: {
                        }
                        }
                    }
                },
                
                series: [{
                    data: [
                        {y:40, color: colors[0]},
                        {y:35, color: colors[1]},
                        {y:45, color: colors[2]},
                    ]
                }]
            });
        });
    // __________chart 2_____________
        $(function () {
            var colors = ['#16B37B', '#E1E1E1'];
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'myChart2',
                    type: 'pie',
                    borderRadius: 10
                },
                credits: {
                    enabled: false
                },
                title: false,
                tooltip: false,
                plotOptions: {
                    pie: {
                        innerSize: '70%',
                        size: '100%',
                        dataLabels: false,
                        stickyTracking: false,
                        startAngle: 180,
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        point: {
                        events: {
                        }
                        }
                    }
                },
                
                series: [{
                    data: [
                        {y:30, color: colors[0]},
                        {y:70, color: colors[1]},
                    ]
                }]
            });
        });

    // __________chart 3_____________

    $(function () {
        Highcharts.chart('myChart3', {

            chart: {
                type: 'column'
            },
        
            title: false,
        
            xAxis: {
                categories: ['eGov Portal 2.0', 'e-Health4.1', 'HRM 4.0', 'CRM 1.2', 'Base Drive1.1']
            },
        
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: false
            },
        
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
        
            plotOptions: {
                column: {
                    stacking: 'normal'
                },
                series: {
                    pointWidth: 40,
                    pointPadding:0.05,
                    groupPadding: 0,
                    pointPadding: 0
                }
            },

            colors: ['#FFBE3C', '#16B37B', '#246BBB'],
        
            series: [{
                name: 'New',
                data: [5, 3, 4, 5, 5]
            }, {
                name: 'Complete',
                data: [3, 4, 4, 5, 5]
            }, {
                name: 'In Progress',
                data: [4, 3, 1, 4, 4]
            }]
        });
        
    });
    
    // _____________________
    });
  });
  