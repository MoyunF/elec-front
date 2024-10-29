var chartDom = document.getElementById('chart2');
var myChart = echarts.init(chartDom, "dark");

var option = {
    backgroundColor: '#0C2034',
    
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return params[0].name + '<br/>' +
                params.map(function (item) {
                    return item.seriesName + ': ' + (item.data * 100).toFixed(1) + '%';
                }).join('<br/>');
        }
    },
    legend: {
        data: ['实际功率因数', '考核标准'],
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
        max: 1,
        interval: 0.1,
        axisLabel: {
            formatter: '{value}%',
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
            name: '实际功率因数',
            type: 'line',
            data: [0.8, 0.85, 0.9, 0.75, 0.7, 0.9, 0.95, 0.8, 0.85, 0.9, 0.88, 0.9], // 示例数据
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
            name: '考核标准',
            type: 'line',
            data: [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85], // 示例数据
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