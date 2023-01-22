const fileSelector = document.querySelector(".file-selector");
const labelOutput = document.querySelector(".output-log__text");

fileSelector.addEventListener('change',  handleLogSelect);

function handleLogSelect(event) {
    let file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onload = () => {
        parseLog(fileReader.result);
    }
}

function parseLog(logs) {
    const Rows = logs.split('\n');
    for (let row of Rows) {
        const result = row.match(/^(\d\d\/\d\d)\s*(\b\d\d:\d\d:\d\d\b)\s*(\b[a-z]+\b)\s*:\.+(\w+):\s*(.*)$/i);
        console.log(result);
    }
}