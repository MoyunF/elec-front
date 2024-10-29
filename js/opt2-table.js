function opt2_tableBody() {

    const mockdata = [
        {
            "property1": "1",
            "property2": "2023年1月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "1",
            "property2": "2023年1月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "1",
            "property2": "2023年1月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "2",
            "property2": "2023年2月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "3",
            "property2": "2023年3月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "4",
            "property2": "2023年4月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "5",
            "property2": "2023年5月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "6",
            "property2": "2023年6月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "7",
            "property2": "2023年7月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "8",
            "property2": "2023年8月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "9",
            "property2": "2023年9月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "10",
            "property2": "2023年10月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "11",
            "property2": "2023年11月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        },
        {
            "property1": "12",
            "property2": "2023年12月",
            "property3": "31221010248",
            "property4": "分时",
            "property5": "0%",
            "property6": "0%",
            "property7": "0%",
            "property8": "0%",
            "property9": "0"
        }
    ];    

    const tableBody = document.querySelector('#table-body-opt2');
    mockdata.forEach(item => {
        const row = document.createElement('tr'); // 创建行
        for (let key in item) {
            const cell = document.createElement('td'); // 创建单元格
            cell.textContent = item[key]; // 设置单元格内容
            row.appendChild(cell); // 将单元格添加到行
        }
        tableBody.appendChild(row); // 将行添加到表格主体
    });

    // // 使用 fetch API 从本地 JSON 文件加载数据
    // fetch('./mockdata/opt2.json')
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok ' + response.statusText);
    //     }
    //     return response.json(); // 解析 JSON 数据
    // })
    // .then(jsonData => {
    //     const tableBody = document.querySelector('#table-body-opt2'); // 获取表格主体

    //     // 遍历 JSON 数据并添加到表格中
    //     jsonData.forEach(item => {
    //         const row = document.createElement('tr'); // 创建行
    //         for (let key in item) {
    //             const cell = document.createElement('td'); // 创建单元格
    //             cell.textContent = item[key]; // 设置单元格内容
    //             row.appendChild(cell); // 将单元格添加到行
    //         }
    //         tableBody.appendChild(row); // 将行添加到表格主体
    //     });
    // })
    // .catch(error => {
    //     console.error('Error fetching the JSON data: ', error); // 错误处理
    // });

    
    const zoomTable = document.getElementById('zoomTable2');
    let scale = 1; // Initial scale factor
    let isDragging = false; // Flag to track if dragging
    let startX, startY, initialLeft, initialTop; // Variables to track positions

    // Function to handle zoom
    function zoomTableFunc(event) {
    event.preventDefault(); // Prevent default scroll behavior
    const zoomSpeed = 0.1; // Adjust this value to control zoom speed
    // Check if user is scrolling up or down
    if (event.deltaY < 0) {
        scale += zoomSpeed; // Zoom in
    } else {
        scale = Math.max(0.5, scale - zoomSpeed); // Zoom out, minimum scale is 0.5
    }
    // Apply the scale transformation
    zoomTable.style.transform = `scale(${scale})`;
    }

    // Function to handle mousedown (start dragging)
    function startDrag(event) {
    isDragging = true;
    startX = event.clientX; // Initial mouse X
    startY = event.clientY; // Initial mouse Y
    initialLeft = zoomTable.offsetLeft; // Initial table left position
    initialTop = zoomTable.offsetTop; // Initial table top position
    }

    // Function to handle mousemove (dragging)
    function drag(event) {
    if (isDragging) {
        const currentX = event.clientX;
        const currentY = event.clientY;
        const dx = currentX - startX; // Change in X
        const dy = currentY - startY; // Change in Y
        zoomTable.style.left = initialLeft + dx + 'px';
        zoomTable.style.top = initialTop + dy + 'px';
    }
    }

    // Function to handle mouseup (stop dragging)
    function stopDrag() {
    isDragging = false;
    }

    // Add event listeners for dragging
    zoomTable.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);

    // Add event listener for mouse wheel scroll (zoom)
    document.addEventListener('wheel', zoomTableFunc, { passive: false });

}


function opt3table() {
    const tableHeader = document.getElementById('th-opt3');
    const tableBody = document.getElementById('tb-opt3');

    const data =[
        {
            "序号": 1,
            "年月": "2023年1月",
            "户号": "020101000759",
            "基本电费": 53550,
            "基本电费占比": "85%",
            "电度电费": 4284.27,
            "电度电费占比": "7%",
            "力调电费": 5250.02,
            "力调电费占比": "8%",
            "实际功率因数": 0.29,
            "调整系数": 0,
            "月总电费": 63084.29,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 6039,
            "电量/容量": 2
        },
        {
            "序号": 2,
            "年月": "2023年2月",
            "户号": "020101000759",
            "基本电费": 53550,
            "基本电费占比": "86%",
            "电度电费": 4000.19,
            "电度电费占比": "6%",
            "力调电费": 5052.73,
            "力调电费占比": "8%",
            "实际功率因数": 0.31,
            "调整系数": 0,
            "月总电费": 62602.92,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 5689,
            "电量/容量": 2
        },
        {
            "序号": 3,
            "年月": "2023年3月",
            "户号": "020101000759",
            "基本电费": 53550,
            "基本电费占比": "85%",
            "电度电费": 4203.05,
            "电度电费占比": "7%",
            "力调电费": 5147.00,
            "力调电费占比": "8%",
            "实际功率因数": 0.30,
            "调整系数": 0,
            "月总电费": 62900.05,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 5934,
            "电量/容量": 2
        },
        {
            "序号": 4,
            "年月": "2023年4月",
            "户号": "020101000759",
            "基本电费": 53550,
            "基本电费占比": "85%",
            "电度电费": 4103.70,
            "电度电费占比": "7%",
            "力调电费": 5137.38,
            "力调电费占比": "8%",
            "实际功率因数": 0.30,
            "调整系数": 0,
            "月总电费": 62791.08,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 5829,
            "电量/容量": 2
        },
        {
            "序号": 5,
            "年月": "2023年5月",
            "户号": "020101000759",
            "基本电费": 53550,
            "基本电费占比": "85%",
            "电度电费": 4125.78,
            "电度电费占比": "7%",
            "力调电费": 5146.68,
            "力调电费占比": "8%",
            "实际功率因数": 0.30,
            "调整系数": 0,
            "月总电费": 62822.46,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 5969,
            "电量/容量": 2
        },
        {
            "序号": 6,
            "年月": "2023年6月",
            "户号": "020101000759",
            "基本电费": 75600,
            "基本电费占比": "87%",
            "电度电费": 5092.89,
            "电度电费占比": "6%",
            "力调电费": 6036.38,
            "力调电费占比": "7%",
            "实际功率因数": 0.40,
            "调整系数": 0,
            "月总电费": 86729.27,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 7649,
            "电量/容量": 2
        },
        {
            "序号": 7,
            "年月": "2023年7月",
            "户号": "020101000759",
            "基本电费": 75600,
            "基本电费占比": "86%",
            "电度电费": 7549.29,
            "电度电费占比": "9%",
            "力调电费": 5095.23,
            "力调电费占比": "6%",
            "实际功率因数": 0.49,
            "调整系数": 0,
            "月总电费": 88244.52,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 11044,
            "电量/容量": 4
        },
        {
            "序号": 8,
            "年月": "2023年8月",
            "户号": "020101000759",
            "基本电费": 75600,
            "基本电费占比": "85%",
            "电度电费": 8835.31,
            "电度电费占比": "10%",
            "力调电费": 4918.69,
            "力调电费占比": "6%",
            "实际功率因数": 0.51,
            "调整系数": 0,
            "月总电费": 89354.00,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 13074,
            "电量/容量": 4
        },
        {
            "序号": 9,
            "年月": "2023年9月",
            "户号": "020101000759",
            "基本电费": 75600,
            "基本电费占比": "87%",
            "电度电费": 4148.38,
            "电度电费占比": "5%",
            "力调电费": 7400.63,
            "力调电费占比": "8%",
            "实际功率因数": 0.28,
            "调整系数": 0,
            "月总电费": 87149.01,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 6319,
            "电量/容量": 2
        },
        {
            "序号": 10,
            "年月": "2023年10月",
            "户号": "020101000759",
            "基本电费": 75600,
            "基本电费占比": "87%",
            "电度电费": 4066.71,
            "电度电费占比": "5%",
            "力调电费": 7393.83,
            "力调电费占比": "8%",
            "实际功率因数": 0.28,
            "调整系数": 0,
            "月总电费": 87060.54,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 6004,
            "电量/容量": 2
        },
        {
            "序号": 11,
            "年月": "2023年11月",
            "户号": "020101000759",
            "基本电费": 75600,
            "基本电费占比": "87%",
            "电度电费": 4141.15,
            "电度电费占比": "5%",
            "力调电费": 7281.56,
            "力调电费占比": "8%",
            "实际功率因数": 0.29,
            "调整系数": 0,
            "月总电费": 87022.71,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 5934,
            "电量/容量": 2
        },
        {
            "序号": 12,
            "年月": "2023年12月",
            "户号": "020101000759",
            "基本电费": 75600,
            "基本电费占比": "87%",
            "电度电费": 4141.15,
            "电度电费占比": "5%",
            "力调电费": 7281.56,
            "力调电费占比": "8%",
            "实际功率因数": 0.29,
            "调整系数": 0,
            "月总电费": 87022.71,
            "最大需量": 0,
            "占容量比": "0%",
            "运行时长-雨": 0,
            "运行时长-污": 0,
            "总电量": 5934,
            "电量/容量": 2
        }
      ]
      
      
      // Dynamically generate table body (13 rows and 18 columns)
      // 动态生成表格行
      data.forEach((item, index) => {
        const tr = document.createElement('tr');
      
        // 每隔一行更改背景色和阴影
        if (index % 2 === 0) {
            tr.style.backgroundColor = '#072951';
            tr.style.boxShadow = "-10px 0px 15px #2C58A6 inset, 10px 0px 15px #2C58A6 inset";
        }
      
        // 遍历对象的每个属性并创建单元格
        for (const key in item) {
            const td = document.createElement('td');
            td.textContent = item[key]; // 将属性值添加到单元格
            tr.appendChild(td);
        }
      
        // 将行添加到表格主体
        tableBody.appendChild(tr);
      });
}

