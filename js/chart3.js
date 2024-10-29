var chartDom = document.getElementById('chart3');
var myChart = echarts.init(chartDom, "dark");

var option = {
    backgroundColor: '#0C2034',
   
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return params[0].name + '<br/>' +
                params.map(function (item) {
                    return item.seriesName + ': ' + (item.data * 100).toFixed(1) + '小时';
                }).join('<br/>');
        }
    },
    legend: {
        data: ['雨水泵', '污水泵'],
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
        min: 0,
        max: 100,
        interval: 10,
        axisLabel: {
            formatter: '{value}小时',
            textStyle: {
                color: '#61d2f7'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#333'
            }
        }
    },
    series: [
        {
            name: '雨水泵',
            type: 'line',
            data: [20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50], // 示例数据
            itemStyle: {
                color: '#ff5733',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            },
            lineStyle: {
                width: 3,
                type: 'solid'
            },
            smooth: true // 使线条平滑
        },
        {
            name: '污水泵',
            type: 'line',
            data: [30, 40, 20, 50, 70, 60, 50, 40, 30, 20, 40, 60], // 示例数据
            itemStyle: {
                color: '#33c3ff',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            },
            lineStyle: {
                width: 3,
                type: 'dotted' // 虚线
            },
            smooth: true
        }
    ]
};

myChart.setOption(option);
window.addEventListener('resize', function() {
    myChart.resize();
});