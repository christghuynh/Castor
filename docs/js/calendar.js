document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('button[type="submit"]');
    const activityList = document.getElementById('activityList');


    addButton.addEventListener('click', (event) => {
        event.preventDefault();


        const date = document.querySelector('input[type="date"]').value;
        const title = document.querySelector('input[type="text"]').value;
        const startTime = document.querySelectorAll('input[type="time"]')[0].value;
        const endTime = document.querySelectorAll('input[type="time"]')[1].value;


        const activityItem = document.createElement('div');
        activityItem.classList.add('activity-item');


        activityItem.innerHTML = `
            <strong>${title}</strong><br>
            Date: ${date}<br>
            Start Time: ${startTime}<br>
            End Time: ${endTime}
        `;


        activityList.appendChild(activityItem);


        document.querySelector('input[type="date"]').value = '';
        document.querySelector('input[type="text"]').value = '';
        document.querySelectorAll('input[type="time"]')[0].value = '';
        document.querySelectorAll('input[type="time"]')[1].value = '';
    });
});
