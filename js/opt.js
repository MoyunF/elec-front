function opt1() {
    // JavaScript to simulate the optimization process
    let statusText = document.getElementById('status1');
    let checkmark = document.getElementById('checkmark1');

    // Function to update the status text
    function updateStatus(percentage) {
    statusText.textContent = `优化中 ${percentage}%`;
    }

    // Simulate the optimization progress
    let progress = 0;
    let interval = setInterval(() => {
    progress += 7;
    updateStatus(progress);

    // After reaching 60%, stop the spinner and show the checkmark
    if (progress >= 60) {
        clearInterval(interval);
        setTimeout(() => {
        document.getElementById('spinner1').style.display = 'none'; // Hide spinner
        checkmark.style.display = 'block'; // Show checkmark
        statusText.textContent = '优化完成!'; // Update status text
        }, 500); // Delay before showing the checkmark
    }

    if (progress >= 100) {
        clearInterval(interval);
    }
    }, 200); // Increase the percentage every 500ms
}

function opt2() {
    // JavaScript to simulate the optimization process
    let statusText = document.getElementById('status2');
    let checkmark = document.getElementById('checkmark2');

    // Function to update the status text
    function updateStatus(percentage) {
    statusText.textContent = `优化中 ${percentage}%`;
    }

    // Simulate the optimization progress
    let progress = 0;
    let interval = setInterval(() => {
    progress += 6;
    updateStatus(progress);

    // After reaching 60%, stop the spinner and show the checkmark
    if (progress >= 60) {
        clearInterval(interval);
        setTimeout(() => {
        document.getElementById('spinner2').style.display = 'none'; // Hide spinner
        checkmark.style.display = 'block'; // Show checkmark
        statusText.textContent = '优化完成!'; // Update status text
        }, 500); // Delay before showing the checkmark
    }

    if (progress >= 100) {
        clearInterval(interval);
    }
    }, 200); // Increase the percentage every 500ms
}

function opt3() {
    // JavaScript to simulate the optimization process
    let statusText = document.getElementById('status3');
    let checkmark = document.getElementById('checkmark3');

    // Function to update the status text
    function updateStatus(percentage) {
    statusText.textContent = `优化中 ${percentage}%`;
    }

    // Simulate the optimization progress
    let progress = 0;
    let interval = setInterval(() => {
    progress += 7;
    updateStatus(progress);

    // After reaching 60%, stop the spinner and show the checkmark
    if (progress >= 74) {
        clearInterval(interval);
        setTimeout(() => {
        document.getElementById('spinner3').style.display = 'none'; // Hide spinner
        checkmark.style.display = 'block'; // Show checkmark
        statusText.textContent = '优化完成!'; // Update status text
        }, 500); // Delay before showing the checkmark
    }

    if (progress >= 100) {
        clearInterval(interval);
    }
    }, 150); // Increase the percentage every 500ms
}
 

opt1();
opt2();
opt3();