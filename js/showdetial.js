//优化1
document.getElementById('optimizeBtn1').addEventListener('click', function() {
    // 显示悬浮子页面
    document.getElementById('popup1').style.display = 'flex';
    renderChart1_1();
    renderChart1_2();
});

document.getElementById('closePopup1').addEventListener('click', function() {
    // 隐藏悬浮子页面
    document.getElementById('popup1').style.display = 'none';
});   

//优化2
document.getElementById('optimizeBtn2').addEventListener('click', function() {
    // 显示悬浮子页面
    document.getElementById('popup2').style.display = 'flex';
    opt2_tableBody();
    renderChart2_1();
    renderChart2_2();
});

document.getElementById('closePopup2').addEventListener('click', function() {
    // 隐藏悬浮子页面
    document.getElementById('popup2').style.display = 'none';

    // 清空表格内容
    const tableBody = document.getElementById('table-body-opt2');
    tableBody.innerHTML = ''; // 清空现有内容
});   


//优化3
document.getElementById('optimizeBtn3').addEventListener('click', function() {
    // 显示悬浮子页面
    document.getElementById('popup3').style.display = 'flex';
    opt3table();
});

document.getElementById('closePopup3').addEventListener('click', function() {
    // 隐藏悬浮子页面
    document.getElementById('popup3').style.display = 'none';
    // 清空表格内容
    const tableBody = document.getElementById('tb-opt3');
    tableBody.innerHTML = ''; // 清空现有内容
    
});   