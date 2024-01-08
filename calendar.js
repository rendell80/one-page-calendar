document.addEventListener('DOMContentLoaded', function() {
    generateTitle();
    generateMain();
});

function getYearFromURL() {
    const params = new URLSearchParams(window.location.search);
    let year = params.get('year');
    if (!year) {
        year = new Date().getFullYear();
    }
    return year;
}

function generateTitle() {
    const calendarTitle = document.getElementById('calendar-title');
    const year = getYearFromURL();
    calendarTitle.textContent = `One-Page Calendar - ${year}`;
}

function generateMain() {
    const calendarMain = document.getElementById('calendar-table');
    const year = getYearFromURL();
    let calendarTable = document.createElement('table');
    let tableHeader = generateHeadings();
    let tableBody = generateTableBody(year);
    calendarTable.appendChild(tableHeader);
    calendarTable.appendChild(tableBody);
    calendarMain.appendChild(calendarTable);
}

function generateHeadings() {
    let tableHeader = document.createElement('thead');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    tableHeader.innerHTML = '<tr>' + months.map(month => `<th>${month}</th>`).join('') + '</tr>';
    return tableHeader;
}

function generateTableBody(year) {
    let tableBody = document.createElement('tbody');
    for (let day = 1; day <= 31; day++) {
        let row = document.createElement('tr');
        for (let month = 1; month <= 12; month++) {
            let dayCell = generateDayCell(year, month, day);
            row.appendChild(dayCell);
        }
        tableBody.appendChild(row);
    }
    return tableBody;
}

function generateDayCell(year, month, day) {
    let dayCell = document.createElement('td');
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