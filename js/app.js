/*$(document).ready(function(){
    $('#retailTree').tree({
        data: treeData
    }); 
});*/

$(document).ready(function() {
    var treeData = [{
        name: 'Retail',
        children: [
            { 
                name: 'CASA',
            },
            { 
                name: 'SME' 
            },
            {
                name : 'CC'
            },
            {
                name : 'PL'
            }
        ]
    }];
    $('#retailTree').tree({
        data: treeData,
        autoOpen:true
    });
    
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
        ["Emp2",8,15,14,32,34,"106%"],
        ["Emp3",8,15,14,32,25,"78%"],
        ["Emp4",8,15,14,32,26,"81%"]
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
                ["Emp2",100,105,79,85,106],
                ["Emp3",50,100,110,90,78],
                ["Emp4",81,100,50,95,85]
            ]
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
    /*var data = [];
    for(var i=0;i<gridData.length;i++){
        data.push([]);
        data[i].push(gridData[i][0]);
        var str = gridData[i][gridData[i].length-1];
        data[i].push(str.substring(0,str.length-1));
    }
    var chart = c3.generate({
       bindto:"#chart",
        data:{
            columns:data,
            type:'bar'
        },
        axis:{
            rotated:true,
        }
    });*/
});
