document.addEventListener('DOMContentLoaded', function() {

    //fetch('https://api.quotable.io/random')
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {
        const activity = data.activity
        document.querySelector('#activity').innerHTML = activity;
    });
});