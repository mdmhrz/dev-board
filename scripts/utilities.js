//Set current time
function currentTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}:${seconds} ${ampm}`
}

// Set Current Date

function setCurrentDateByID(id) {
    const today = new Date();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayName = days[today.getDay()];
    const date = String(today.getDate()).padStart(2, '0');
    const monthName = months[today.getMonth()];
    const year = today.getFullYear();

    const currentDate = `${dayName}, ${date} ${monthName} ${year}`;

    const expectedDate = document.createElement('div')

    expectedDate.innerHTML = `
        div
    `

    document.getElementById(id).innerText = currentDate;


}

// St Current Dt in Display by calling id name
setCurrentDateByID('display-date');
