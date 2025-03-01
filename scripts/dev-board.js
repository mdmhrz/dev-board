// Button Disable, Task Value Decrease, Marks Increase
const taskBtns = document.querySelectorAll('.task-btn')
const marks = document.getElementById('marks')
const taskLeft = document.getElementById('task-left')


for (const btn of taskBtns) {
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
        const title = document.getElementById('title-1');
        const title2 = document.getElementById('title-2')
        const title3 = document.getElementById('title-3')
        const title4 = document.getElementById('title-4')
        const title5 = document.getElementById('title-5')
        const title6 = document.getElementById('title-6')
        const historyContainer = document.getElementById('activity-log-container');

        const getTime = currentTime(new Date());

        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
            <p class="bg-custom1 p-3 mb-4 rounded-md shadow-md">
            You have completed the task Fix Mobile Button issue at ${getTime}
            </p>
        `;

        historyContainer.appendChild(newHistory)







    })
}

