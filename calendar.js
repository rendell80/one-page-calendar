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
    const year = new Date().getFullYear();

    // TODO: 
    // ✅ generate the table
    // ✅ generate 12 months header
    // ✅ generate individual days under each month 

    let calendarTable = document.createElement('table');
    let tableHeader = generateHeadings();
    let tableBody = generateTableBody(year);

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

function generateTableBody(year) {
    // - generate tbody
    // - generate 31 rows 
    // - generate 12 day cells in each row
    // - determine last day of month and stop adding the day cell
    // - return tbody

    let tableBody = document.createElement('tbody');
    for (let day = 1; day <= 31; day++) {
        let row = document.createElement('tr');
        for (let month = 1; month <= 12; month++) {
            let dayCell = generateDayCell(year, month, day);
            row.appendChild(dayCell)
        }
        tableBody.appendChild(row);
    }

    return tableBody;
}

function generateDayCell(year, month, day) {
    let dayCell = document.createElement('td');

    // Determine the last day of the month
    let lastDay = new Date(year, month, 0).getDate();

    if (day <= lastDay) {
        dayCell.textContent = day;

        let date = new Date(year, month - 1, day);
        let dayOfWeek = date.getDay();

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            dayCell.classList.add('weekend');
        }
    } else {
        dayCell.textContent = '';
    }

    return dayCell;
}