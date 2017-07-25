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
                columns :[
                     ['Mar 17',85,100,50,81]    ,
                     ['Apr 17',100,105,100,100] ,
                     ['May 17',120,79,110,50]   ,
                     ['Jun 17',95,85,90,95]     ,
                     ['Jul 17',103,106,78,85]
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
                                          text: "Productivity",
                                          position: 'outer-middle'
                                       }
                                  }
        }
    });
});
