
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

//Create table
var table = document.createElement('table');

//Create headers for each column
var col = [];
for(var i=0; i < books.length; i++){
    for (var key in books[i]){
        if(col.indexOf(key) === -1){
            col.push(key);
        }
    }
}

//Create a row for the headers
var tHead = document.createElement("thead");
var hRow = document.createElement("tr");
for(var j=0; j < col.length; j++){
    var th = document.createElement("th");
    th.innerHTML = col[j];
    hRow.appendChild(th);
}
//Add new header row to the table
tHead.appendChild(hRow);
table.appendChild(tHead);

//Create body for all book info
var tBody = document.createElement("tbody");

for(var k=0; k < books.length; k++){
    var bRow = document.createElement("tr");
    for( var l=0; l < col.length; l++){
        var td = document.createElement("td");
        td.innerHTML = books[k][col[l]];
        bRow.appendChild(td);
    }
    tBody.appendChild(bRow);
}
table.appendChild(tBody);

//Create click event handler to rows
var rows = table.getElementsByTagName("tr");
for (var t=0; t < rows.length; t++){
    var currentRow = table.rows[t];
    var createClickHandler = function (row) {
        return function () {
            var cell = row.getElementsByTagName("td")[0];
            document.getElementById("book_title").innerHTML = cell.innerHTML;
        }
    };
    currentRow.onclick = createClickHandler(currentRow);
}

	document.body.appendChild(table);
