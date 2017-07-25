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
                columns :[
                    ['Mar 17',2,5,1,1],
                    ['Apr 17',4,7,1,6],
                    ['May 17',3,8,3,3],
                    ['Jun 17',4,5,2,4],
                    ['Jul 17',3,5,1,1]
                ],
                type: 'bar',
                  		colors: {
             'Mar 17': '#00b0f0',
            'Apr 17': 'rgba(61, 153, 112, 1)',
            'May 17': '#03B4C3',
	        'Jun 17': "rgb(225, 126,0)",
	        'Jul 17':'rgb(188, 189, 34)'
                              }
            },
            axis: {
                        x: {
                            type: 'category',
                            categories : ["Shiv Shankar","Sarathi M","Suganya T","Sangeetha N"]
                        },y :{
                                                  show:true,
                                                  label: {
                                                      text: "Avg TAT (in hrs)",
                                                      position: 'outer-middle'
                                                   }
                                              }
                    }
        });
});
