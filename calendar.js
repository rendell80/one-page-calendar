document.addEventListener('DOMContentLoaded', function() {
    generateTitle();
    generateMain();
});

function generateTitle() {
    const calendarTitle = document.getElementById('calendar-title');

    // TODO: 
    // - get and print current year

    calendarTitle.textContent = "One Page Calendar - 2024";
}

function generateMain() {
    const calendarMain = document.getElementById('calendar-table');

    // TODO: 
    // - generate the table
    // - generate 12 months header
    // - generate individual days under each month 

    calendarMain.textContent = "Main Calendar Table"
}