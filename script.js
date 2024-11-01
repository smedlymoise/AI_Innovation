



let darkTheme = false; // Tracks the current theme

function changeTheme() {
    window.alert("changeTheme(); is a proof of concept, the look of the website is not meant to be a final product and should not be taken at face value. ");

    if (darkTheme) {
        // Switch to dark theme
        document.documentElement.style.setProperty('--primary-color', 'white');
        document.documentElement.style.setProperty('--secondary-color', 'navy');
        document.documentElement.style.setProperty('--logo', 'BMCC-Student-Hub-dark-mode.png');
    } else {
        // Defaults to light theme
        document.documentElement.style.setProperty('--primary-color', 'navy');
        document.documentElement.style.setProperty('--secondary-color', 'white');
        document.documentElement.style.setProperty('--logo', 'BMCC-Student-Hub.png');
    }

    // Toggle the theme state
    darkTheme = !darkTheme;
}