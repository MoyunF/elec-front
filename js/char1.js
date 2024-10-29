// Function to initialize the chart
function initChart() {
    var chartDom = document.getElementById('chart_1'); // 假设你的容器id为chart2-2
    var myChart = echarts.init(chartDom, "dark");

    var option = {
        backgroundColor: '#0C2034',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow' // 让提示框在柱子上面
            },
            formatter: function (params) {
                return params[0].name + '<br/>' +
                    params.map(function (item) {
                        return item.seriesName + ': ' + item.data + '%';
                    }).join('<br/>');
            }
        },
        legend: {
            data: ['基本电费', '电度电费', '力调电费'],
            textStyle: {
                color: '#61d2f7',
                fontSize: 16,
                fontWeight: 'bold'
            },
            left: 'center'
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
            },
            splitLine: {
                lineStyle: {
                    color: '#333' // 修改分割线颜色
                }
            }
        },
        series: [
            {
                name: '基本电费',
                type: 'bar',
                stack: '总费用',
                data: [30, 25, 20, 35, 40, 30, 50, 45, 35, 30, 20, 25], // 示例数据
                itemStyle: {
                    // 使用渐变色
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: '#ff5733' }, // 0% 处的颜色
                            { offset: 1, color: '#ffcc33' }  // 100% 处的颜色
                        ]
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                },
                barWidth: '30%' // 设置柱子的宽度
            },
            {
                name: '电度电费',
                type: 'bar',
                stack: '总费用',
                data: [50, 55, 60, 45, 40, 50, 30, 35, 50, 50, 60, 55], // 示例数据
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: '#33c3ff' },
                            { offset: 1, color: '#0099ff' }
                        ]
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                },
                barWidth: '30%' // 设置柱子的宽度
            },
            {
                name: '力调电费',
                type: 'bar',
                stack: '总费用',
                data: [20, 20, 20, 20, 20, 20, 20, 20, 15, 20, 20, 20], // 示例数据
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: '#75ff33' },
                            { offset: 1, color: '#00ff7f' }
                        ]
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                },
                barWidth: '30%' // 设置柱子的宽度
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });

}

// Call the function to initialize the chart
initChart();
