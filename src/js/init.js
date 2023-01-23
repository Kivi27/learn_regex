const fileSelector = document.querySelector(".file-selector__input");
const tableAllLog = document.querySelector(".log-table");
const tableWarning = document.querySelector(".log-table-warning");

const isAllElementInit = fileSelector && tableAllLog && tableWarning;

if (!isAllElementInit) {
    throw new Error("Not all element init");
}

fileSelector.addEventListener('change',  handleLogSelect);

function handleLogSelect(event) {
    let file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onload = () => {
        const statusFind = "WARNING";
        const logText = fileReader.result;
        const allRowLogs = LogParser.parse(logText);
        const warningRowLogs = LogParser.findLogByStatus(logText, statusFind);

        const logTable = new LogTable(tableAllLog, allRowLogs);
        const logTableWarning = new LogTable(tableWarning, warningRowLogs);
    }
}

