$(document).ready(function() {
    $('.box').matchHeight();
    $('.box2').matchHeight();
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
});
