class LogTable {
    constructor(table, logRows) {
        this.table = table;
        this.logRows = logRows;
        this.fillTableLog();
    }

    fillTableLog() {
        const titleRow = this.getTableTitle();
        const tableBody = this.getTableBody(this.logRows);
        this.table.append(titleRow);
        this.table.append(...tableBody);
    }

    getTableTitle() {
        const titleRow = document.createElement("tr");
        const titleNames = ["Date", "Time", "Type", "Name", "message"];
        const titleStyles = ["log-table__common-cell", "log-table__title-cell"];

        for (let titleName of titleNames) {
            const currentTitle = document.createElement("th");
            currentTitle.textContent = titleName;
            currentTitle.classList.add(...titleStyles);
            titleRow.append(currentTitle);
        }

        return titleRow;
    }

    getTableBody() {
        const rowBody = [];
        const cellStyle = ["log-table__common-cell", "log-table__cell"];

        for (let LogRow of this.logRows) {
            const currentRow = document.createElement("tr");

            for (let cell in LogRow) {
                const newCell = document.createElement("td");
                newCell.textContent = LogRow[cell];
                newCell.classList.add(...cellStyle);
                currentRow.append(newCell);
            }

            rowBody.push(currentRow);
        }

        return rowBody;
    }
}
