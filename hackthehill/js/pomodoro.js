document.addEventListener('DOMContentLoaded', () => { 
    let timeLeft = 1500; 
    const timerElement = document.getElementById('timer');
    const messageElement = document.getElementById('message');
    const buttonElement = document.getElementById('redirectButton');
    const circleElement = document.getElementById('circle');

    const addButton = document.querySelector('button[type="submit"]');

    addButton.addEventListener('click', () => {
        let timeLeft = 300;
        const countdown = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                timerElement.style.display = 'none';
                messageElement.style.display = 'block'; 
                buttonElement.style.display = 'none'; 
                circleElement.style.display = 'block';
            } else {
                timerElement.style.display = 'block';
                messageElement.style.display = 'none'; 
                timeLeft--;
                updateTimerDisplay(); 
            }
        }, 1000);

        const updateTimerDisplay = () => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        };
    }) 

    const updateTimerDisplay = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    updateTimerDisplay(); 

    const countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.style.display = 'none';
            messageElement.style.display = 'block';
            buttonElement.style.display = 'block'; 
        } else {
            timeLeft--;
            updateTimerDisplay(); 
        }
    }, 1000);
});


function redirectToGame() {
    window.open("https://play.unity.com/en/games/7150705c-c49f-4d8b-9730-8e9c1ad0bb1c/castor"); 
}