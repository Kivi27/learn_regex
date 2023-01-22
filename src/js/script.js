const fileSelector = document.querySelector(".file-selector");
const tableOutput = document.querySelector(".log-output");

fileSelector.addEventListener('change',  handleLogSelect);

function handleLogSelect(event) {
    let file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onload = () => {
        parseLog(fileReader.result);
    }
}

function parseLog(logText) {
    const rows = [];
    const parseLogs = logText.matchAll(/^(?<date>\d\d\/\d\d)\s*(?<time>\b\d\d:\d\d:\d\d\b)\s*(?<typeMessage>\b[a-z]+\b)\s*:\.+(?<nameService>\w+):\s*(?<message>.*)$/igm);

    for (let parseLog of parseLogs) {
        rows.push(parseLog.groups)
    }

    return rows;
}

