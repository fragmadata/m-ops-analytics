(function(){
    function createChart(id,data,format,widthRatio){
        var graphData = {
            bindto : "#"+id,
            size : {
                height : 190,
            },
            data : {
                columns : [data],
                type : 'bar',
                labels : {
                    format:{
                        data : d3.format(format)
                    }
                }
            },
            axis : {
                x : {
                    type : 'category',
                    categories : ['May 17','Jun 17','Jul 17'],
                    show : true
                },
                y : {
                    show : false
                }
            },
            legend : {
                show : false
            },
            interaction : {
                enabled : false
            }
        };
        if(id == "curGraphArea")
            graphData.size.width = 300;
        return c3.generate(graphData);
    }
    
    var cur_graph = createChart("curGraphArea",['data',0.98,0.85,1.15],"%");
    console.log(cur_graph);
    var pass1ErrorGraphArea = createChart("pass1ErrorGraphArea",['data',59,58,63],"");
    var  QCErrorGraphArea = createChart("QCErrorGraphArea",['data',0.03,.05,.04],"%");
    var ccuGraphArea = createChart("ccuGraphArea",['data',18,12,7],"");
    var pass1ReferGraphArea = createChart("pass1ReferGraphArea",['data',.06,.11,.12],"%");
    var pass2ReferGraphArea = createChart("pass2ReferGraphArea",['data',.06,.09,.10],"%");
    var ccuReferGraphArea = createChart("ccuReferGraphArea",['data',.12,.20,.22],"%");
})();