$(document).ready(function(){
    var gridHeaders = [
            "EMPLOYEE NAME",
            "No. of Working Hrs",
            "Cycle Time",
            "Vol per Hr",
            "Total Applications to be processed in Day",
            "Actual Volumes",
            "Productivity"
        ];
        var gridData = [
            ["Shiv Shankar",8,15,14,32,33,"103%"],
            ["Sarathi M",8,15,14,32,34,"106%"],
            ["Suganya T",8,15,14,32,25,"78%"],
            ["Sangeetha N",8,15,14,32,26,"81%"]
        ];
        var headerTemplate = $("#tableHeadTemplate").html();
        var bodyTemplate = $("#tableBodyTemplate").html();
        $("#tableHeader").html(_.template(headerTemplate)({items:gridHeaders}));
        $("#tableBody").html(_.template(bodyTemplate)({rows:gridData}));
        var chart = c3.generate({
            bindto : "#chart",
            data:{
                x:'x',
                columns :[
                    ['x', '2016-01-01', '2016-02-01', '2016-03-01', '2016-04-01','2016-05-01'],
                    ["Shiv Shankar",85,100,120,95,103],
                    ["Sarathi M",100,105,79,85,106],
                    ["Suganya T",50,100,110,90,78],
                    ["Sangeetha N",81,100,50,95,85]
                ],
		type: 'bar',
		colors: {
            'Shiv Shankar': '#00b0f0',
            'Sarathi M': 'rgba(61, 153, 112, 1)',
            'Suganya T': '#03B4C3',
	    'Sangeetha N': "rgb(225, 126,0)"
        }
            },
            axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m'
                }
            }
        }
    });
});
