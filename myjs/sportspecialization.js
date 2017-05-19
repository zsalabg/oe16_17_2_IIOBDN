$(document).ready(function () {
    fillTable();

    $('#sportspecializationtable').on('refresh.bs.table', function (params) {
        fillTable();
    });
});

var fillTable = function () {
    $.ajax({
        url: "http://94.177.230.203:8080/sport/rest/sportspecialization/entity/all"
    })
    .done(function (rslt) {
        var html = [];
        $.each(rslt, function (i, val) {
            html.push({
                "name": val.name,
                "description": val.description
            });
        })
        $('#sportspecializationtable').bootstrapTable('load', html);
    });
}