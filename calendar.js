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
    // ✅ generate 12 months header
    // - generate individual days under each month 

    let calendarTable = document.createElement('table');
    let tableBody = document.createElement('tbody');

    tableBody.innerHTML = '<tr><td>Calendar Table Body</td></tr>'
    let tableHeader = generateHeadings();

    calendarTable.appendChild(tableHeader);
    calendarTable.appendChild(tableBody);
    calendarMain.appendChild(calendarTable);
}

function generateHeadings() {
    // - generate thead
    // - generate 12 months header

    let tableHeader = document.createElement('thead');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    tableHeader.innerHTML = '<tr>' + months.map(month => `<th>${month}</th>`).join('') + '</tr>';

    return tableHeader;
}