// Button Disable, Task Value Decrease, Marks Increase
const taskBtns = document.querySelectorAll('.task-btn')
const marks = document.getElementById('marks')
const taskLeft = document.getElementById('task-left')

const taskBtnsArray = Array.from(taskBtns);

for (const btn of taskBtnsArray) {
    btn.addEventListener('click', function (event) {
        alert('Board Updated Successfully')
        const updatedMarks = parseInt(marks.innerText);
        marks.innerText = updatedMarks + 1;
        const updatedTask = taskLeft.innerText;
        taskResult = updatedTask - 1;
        taskLeft.innerText = `0${taskResult}`;
        if (taskResult === 0) {
            alert('Congrates!!! You have completed all the current task.')
        }
        btn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        btn.classList.add('bg-blue-200', 'text-gray-200', 'cursor-not-allowed');
        btn.disabled = true;



        // Activity add to history log.
        const selectedTitle = `title-${taskBtnsArray.indexOf(btn) + 1}`;
        const title = document.getElementById(selectedTitle).innerText;
        const historyContainer = document.getElementById('activity-log-container');

        const getTime = currentTime(new Date());

        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
            <p class="bg-custom1 p-3 mb-4 rounded-md shadow-md">
            You have completed the task <span class="font-semibold text-blue-500">${title}</span> at ${getTime}
            </p>
        `;

        historyContainer.appendChild(newHistory)
    })
}

// Clear History
document.getElementById('clear-history-btn').addEventListener('click', function () {
    document.getElementById('activity-log-container').innerHTML = '';
})


// Background Change 
const bgColors = ['#BECEF3', '#C8E3D7', '#EBEBFB', '#CBB8D6', '#98D4C5'];

let clickIndex = 0;
const bgChageBtn = document.getElementById('bg-change-btn');

let rotation = 0;

bgChageBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = bgColors[clickIndex];
    clickIndex++
    if (clickIndex >= bgColors.length) {
        clickIndex = 0;
    }

    rotation += 20;
    bgChageBtn.style.transform = `rotate(${rotation}deg)`;

});


// Link to blog html

document.getElementById('discover').addEventListener('click', function () {
    window.location.href = 'blog.html';
})


