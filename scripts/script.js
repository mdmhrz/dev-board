// Button Disable, Task Value Decrease, Marks Increase

const taskBtns = document.querySelectorAll('.task-btn')
const marks = document.getElementById('marks')
const taskLeft = document.getElementById('task-left')

for (const btn of taskBtns) {
    btn.addEventListener('click', function () {
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
    })
}






