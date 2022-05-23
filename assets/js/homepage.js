/* Form Handler */
var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');

var formSubmitHandler = function(event) {
    // stops the browser from sending the form's input data to a URL
    event.preventDefault();

    // get value from input element
    var username = nameInputEl.value.trim();

    // if there is in fact a value to username...
    if (username) {
        // pass input element's value data as an argument
        getUserRepos(username);
        // clear form input
        nameInputEl.value = '';
    } else {
        alert('Please enter a GitHub username');
    }
};

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = 'https://api.github.com/users/' + user + '/repos';

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            displayRepos(data, user);
        });
    });
};

userFormEl.addEventListener('submit', formSubmitHandler);

var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
};