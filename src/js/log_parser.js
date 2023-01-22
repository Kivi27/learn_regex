class LogParser {
    constructor() {

    }

    static parse(logText) {
        const matches = logText.matchAll(/^(?<date>\d\d\/\d\d)\s*(?<time>\b\d\d:\d\d:\d\d\b)\s*(?<typeMessage>\b[a-z]+\b)\s*:\.+(?<nameService>\w+):\s*(?<message>.*)$/igm);

        return this.matchesToRow(matches);
    }

    static findLogByStatusWarning(logText) {
        const matches = logText.matchAll(/^(?<date>\d\d\/\d\d)\s*(?<time>\b\d\d:\d\d:\d\d\b)\s*(?<typeMessage>\bWARNING\b)\s*:\.+(?<nameService>\w+):\s*(?<message>.*)$/igm);

        return this.matchesToRow(matches);
    }

    static matchesToRow(matches) {
        const row = [];

        for (let match of matches) {
            row.push(match.groups)
        }

        return row;
    }

}