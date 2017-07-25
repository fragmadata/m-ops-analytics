$(document).ready(function(){
    var gridHeaders = [
            "Employee Name",
/*            "No. of Working Hrs",
            "Cycle Time",
            "Vol per Hr",
            "Total Applications to be processed in Day",*/
            "Volumes",
            "Avg TAT"
        ];
        var gridData = [
            ["Shiv Shankar","1,600", 3],
            ["Sarathi M","1,200",4],
            ["Suganya T","1,200",2],
            ["Sangeetha N","800",3]
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
                    ["Shiv Shankar",2,4,3,4,3],
                    ["Sarathi M",5,7,8,5,5],
                    ["Suganya T",1,1,3,2,1],
                    ["Sangeetha N",1,6,3,4,1]
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
