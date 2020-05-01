window.onload = function() {

    var text = document.getElementById("themeSwitch");
    var checkBox = document.getElementById("inputSwitch");

    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        text.innerHTML = 'Dark Mode';
        checkBox.checked = false;
    } else {
        setTheme('theme-light');
        text.innerHTML = 'Light Mode';
        checkBox.checked = true;
    }

};


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}


function toggleTheme() {
    var text = document.getElementById("themeSwitch");
    var checkBox = document.getElementById("inputSwitch");

    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        text.innerHTML = 'Light Mode';
        checkBox.checked = true;

    } else {
        setTheme('theme-dark');
        text.innerHTML = 'Dark Mode';
        checkBox.checked = false;
    }
}
