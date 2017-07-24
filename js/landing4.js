(function(){
    function createChart(id,data,format,color){
        var graphData = {
            bindto : "#"+id,
            size :{
                height:190
            },
            data : {
                columns : [data],
                type : 'bar',
                labels : {
                    format:{
                        data : d3.format(format)
                    }
                },
                colors:{
                    data: color
                }
            },
            axis : {
                x : {
                    type : 'category',
                    categories : ['May 17','Jun 17','Jul 17'],
                    show : true
                },
                y : {
                    show : false,
                }
            },
            legend : {
                show : false
            },
            interaction : {
                enabled : false
            },
            onresized : function(){
                setTimeout(function(){
                    $("text.c3-text").attr("style","rgb(0,0,0)");
                },100);
            }
        };
//        if(id == "curGraphArea")
//            graphData.size.width = 220;
        return c3.generate(graphData);
    }
    
    var cur_graph = createChart("curGraphArea",['data',1.01,.79,.75],"%", "rgb(31, 119, 180)");
    var productivityGraphArea = createChart("productivityGraphArea",['data',1.09,.82,.80],"%", "rgb(31, 119, 180)");
    var efficiencyGraphArea = createChart("efficiencyGraphArea",['data',1.05,.80,.76],"%", "rgb(31, 119, 180)");
    
    var avgTatGraphArea = createChart("avgTatGraphArea",['data',59,75,79],"","rgba(61, 153, 112, 1)");
    var spanTatGraphArea = createChart("spanTatGraphArea",['data',63,79,83],"","rgba(61, 153, 112, 1)");
    var yieldGraphArea = createChart("yieldGraphArea",['data',1.01,.80,.71],"%","rgba(61, 153, 112, 1)");
    
    var pass1ErrorGraphArea = createChart("pass1ErrorGraphArea",['data',59,58,63],"","rgb(225, 126,0)");
    var  pass2ErrorGraphArea = createChart("pass2ErrorGraphArea",['data',0.03,.05,.04],"%","rgb(225, 126,0)");
    var ccuGraphArea = createChart("ccuGraphArea",['data',18,12,7],"","rgb(225, 126,0)");
    var pass1ReferGraphArea = createChart("pass1ReferGraphArea",['data',.06,.11,.12],"%","#cd765e");
    var pass2ReferGraphArea = createChart("pass2ReferGraphArea",['data',.06,.09,.10],"%","#cd765e");
    var ccuReferGraphArea = createChart("ccuReferGraphArea",['data',.12,.20,.22],"%","#cd765e");
})();