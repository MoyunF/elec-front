function renderChart1_1() {
    // 全年用电负荷曲线
    var chartDom = document.getElementById('chart1-1');
    var myChart = echarts.init(chartDom,"dark");
    var option1_1 = {
        backgroundColor:'#0C2034',
        title: {
            text: '全年用电负荷曲线',
            textStyle: {
                color: '#61d2f7'
            },
            left: 'center' //
        },
        tooltip: {},
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
            name: '用电负荷 (kW)',
            nameTextStyle: {
                color: '#61d2f7'
            }
        },
        series: [{
            name: '负荷',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210, 300, 320, 400, 380, 360],
            itemStyle: {
                color: '#5470c6'
            }
        }]
    };
    myChart.setOption(option1_1);

    window.addEventListener('resize', function() {
        myChart.resize();
    });

}

function renderChart1_2() {
    // 全年用电负荷曲线
    var chartDom = document.getElementById('chart1-2');
    var myChart = echarts.init(chartDom,"dark");
    var option1_1 = {
        backgroundColor:'#0C2034',
        title: {
            text: '实际需量曲线',
            textStyle: {
                color: '#61d2f7'
            },
            left: 'center' //
        },
        tooltip: {},
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
            name: '用电负荷 (kW)',
            nameTextStyle: {
                color: '#61d2f7'
            }
        },
        series: [{
            name: '负荷',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210, 300, 320, 400, 380, 360],
            itemStyle: {
                color: '#5470c6'
            }
        }]
    };
    myChart.setOption(option1_1);

    window.addEventListener('resize', function() {
        myChart.resize();
    });

}

function renderChart2_1() {
    var chartDom = document.getElementById('chart2-1');
    var myChart = echarts.init(chartDom, "dark");

    var option = {
        backgroundColor: '#0C2034',
        title: {
            left: 'center',
            text: '各时段用电占比情况图',
            textStyle: {
                color: '#61d2f7'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow' // 让提示框在柱子上面
            }
        },
        legend: {
            data: ['尖', '峰', '平', '谷'],
            textStyle: {
                color: '#61d2f7'
            },
            left: 'right'
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                textStyle: {
                    color: '#61d2f7'
                }
            }
        },
        yAxis: {
            type: 'value',
            max: 100,
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#61d2f7'
                }
            }
        },
        series: [
            {
                name: '尖峰',
                type: 'bar',
                stack: '总量',
                data: [30, 40, 25, 50, 60, 70, 80, 90, 60, 50, 40, 30],
                itemStyle: {
                    color: '#ff5733'
                },
                barWidth: '30%' // 设置柱子的宽度
            },
            {
                name: '平',
                type: 'bar',
                stack: '总量',
                data: [40, 30, 45, 30, 20, 10, 20, 10, 30, 40, 50, 60],
                itemStyle: {
                    color: '#33c3ff'
                },
                barWidth: '30%' // 设置柱子的宽度
            },
            {
                name: '谷',
                type: 'bar',
                stack: '总量',
                data: [20, 20, 25, 10, 10, 10, 0, 0, 10, 5, 5, 10],
                itemStyle: {
                    color: '#75ff33'
                },
                barWidth: '30%' // 设置柱子的宽度
            },
            {
                name: '其他',
                type: 'bar',
                stack: '总量',
                data: [10, 10, 5, 10, 10, 10, 0, 0, 0, 5, 5, 0],
                itemStyle: {
                    color: '#ffcc33'
                },
                barWidth: '80%' // 设置柱子的宽度
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });



}


function renderChart2_2() {
    var chartDom = document.getElementById('chart2-2');
        var myChart = echarts.init(chartDom,"dark");

        var option = {
            title: {
                left:"center",
                text: '分时用电与不分时的经济性比较',
                textStyle: {
                    color: '#61d2f7'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                left:"right",
                data: ['峰谷因子', '单一值', '峰谷最大'],
                textStyle: {
                    color: '#61d2f7'
                }
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisLabel: {
                    textStyle: {
                        color: '#61d2f7'
                    }
                }
            },
            yAxis: {
                type: 'value',
                min: -0.1,
                max: 1.3,
                interval: 0.2,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#61d2f7'
                    }
                }
            },
            series: [
                {
                    name: '峰谷因子',
                    type: 'line',
                    data: [0.5, 0.6, 0.7, 0.8, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0],
                    itemStyle: {
                        color: '#ff5733'
                    }
                },
                {
                    name: '单一值',
                    type: 'line',
                    data: [0.3, 0.4, 0.45, 0.5, 0.55, 0.5, 0.55, 0.6, 0.6, 0.65, 0.7, 0.75],
                    itemStyle: {
                        color: '#33c3ff'
                    }
                },
                {
                    name: '峰谷最大',
                    type: 'line',
                    data: [0.8, 0.9, 1.0, 1.1, 1.15, 1.2, 1.25, 1.3, 1.2, 1.1, 1.0, 0.9],
                    itemStyle: {
                        color: '#75ff33'
                    }
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        });

}