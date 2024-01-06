const year = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    generateTitle();
    generateMain();
});

function generateTitle() {
    const calendarTitle = document.getElementById('calendar-title');

    // TODO: 
    // ✅ get and print current year

    calendarTitle.textContent = 'One Page Calendar - ' + year;
}

function generateMain() {
    const calendarMain = document.getElementById('calendar-table');

    // TODO: 
    // ✅ generate the table
    // ✅ generate 12 months header
    // ✅ generate individual days under each month 

    let calendarTable = document.createElement('table');
    let tableHeader = generateHeadings();
    let tableBody = generateDays();

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

function generateDays() {
    // - generate tbody
    // - generate 31 rows 
    // - generate 12 day cells in each row
    // - determine last day of month and stop adding the day cell
    // - return tbody

    let tableBody = document.createElement('tbody');
    for (let day = 1; day <= 31; day++) {
        let row = document.createElement('tr');
        for (let month = 1; month <= 12; month++) {
            let dayCell = document.createElement('td');

            // Determine the last day of the month
            let lastDay = new Date(year, month, 0).getDate();

            if (day <= lastDay) {
                dayCell.textContent = day;
            } else {
                dayCell.textContent = '';
            }

            row.appendChild(dayCell)
        }
        tableBody.appendChild(row);
    }

    return tableBody;
}