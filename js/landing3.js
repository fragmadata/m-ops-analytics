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
        if(id == "curGraphArea")
            graphData.size.width = 220;
        return c3.generate(graphData);
    }
    
    var cur_graph = createChart("curGraphArea",['data',0.83,0.70,.88],"%", "rgb(31, 119, 180)");
    var pass1ErrorGraphArea = createChart("pass1ErrorGraphArea",['data',15,15,12],"","rgba(255, 192, 0, 1)");
    var  QCErrorGraphArea = createChart("QCErrorGraphArea",['data',0.05,.13,.10],"%","rgba(255, 192, 0, 1)");
    var ccuGraphArea = createChart("ccuGraphArea",['data',2,3,1],"","rgba(255, 192, 0, 1)");
    var pass1ReferGraphArea = createChart("pass1ReferGraphArea",['data',.05,.11,.13],"%","#cd765e");
    var pass2ReferGraphArea = createChart("pass2ReferGraphArea",['data',.05,.13,.10],"%","#cd765e");
    var ccuReferGraphArea = createChart("ccuReferGraphArea",['data',.10,.24,.23],"%","#cd765e");
})();
