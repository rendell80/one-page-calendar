document.addEventListener('DOMContentLoaded', function() {
    generateTitle();
    generateMain();
});

function generateTitle() {
    const calendarTitle = document.getElementById('calendar-title');
    const year = new Date().getFullYear();

    // TODO: 
    // ✅ get and print current year

    calendarTitle.textContent = 'One Page Calendar - ' + year;
}

function generateMain() {
    const calendarMain = document.getElementById('calendar-table');

    // TODO: 
    // ✅ generate the table
    // - generate 12 months header
    // - generate individual days under each month 

    let calendarTable = document.createElement('table');
    let tableHeader = document.createElement('thead');
    let tableBody = document.createElement('tbody');
    
    tableHeader.innerHTML = '<tr><th>Calendar Table Header</th><tr>'
    tableBody.innerHTML = '<tr><td>Calendar Table Body</td><tr>'

    calendarTable.appendChild(tableHeader);
    calendarTable.appendChild(tableBody);
    calendarMain.appendChild(calendarTable);
}