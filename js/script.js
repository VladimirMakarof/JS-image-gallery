const search = document.querySelector('.fa-search');
const input = document.getElementById('input');
const grid = document.getElementById('grid');

const key = 'EuAqDWSjvx_5xaYeLp7nQ1W53JBUeBPWw9d8m4eE7io';

// светлая и темная тема

dayNightTheme = () => {
    let date = new Date();
    let hour = date.getHours();

    if (hour >= 7 && hour < 19) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
    else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}