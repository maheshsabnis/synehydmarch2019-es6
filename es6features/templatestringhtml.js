let names = ["James Bond", "Ethan Hunt", "Indiana Jones", "Jason Bourn"];

function generateTable() {
    let table = `<table>`;
    for (let i = 0; i < names.length; i++) {
        table += `<tr><td>${names[i]}</td></tr>`;
    }
    table += `</table>`;
    console.log(table);
    return table;
}

generateTable();