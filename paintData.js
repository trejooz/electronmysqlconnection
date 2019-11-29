// Table Select

function paintFirstTenRows(){
    getFirstTenRows(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;
            html += '</th>';
            //Photo
            html += '<td>';
            html += row.photo;
            html += '</td>';
            //Name
            html += '<td>';
            html += row.name;
            html += '</td>';
            //Gender
            html += '<td>';
            html += row.gender;
            html += '</td>';
            //action buttons
            html += '<td>';
            html += '<button type="button" class="btn btn-outline-danger">';
            html += 'Delete';
            html += '</button>';

            html += '<button type="button" class="btn btn-outline-warning">';
            html += 'Edit';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("content").innerHTML = html;
    });
}
