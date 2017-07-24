'use strict';
class Tree {

  constructor() {
    var self = this;
  }

  init() {
    self.$tree = $('#retailTree');
    self.$tree.tree({
      data: {},
      closedIcon: $('<i class="glyphicon glyphicon-plus"></i>'),
      openedIcon: $('<i class="glyphicon glyphicon-minus"></i>'),
      autoOpen: 0,
    });
    var open = true;     
    $.get("hierarchy.json", {},function (data) {
        
      data.forEach(function (item) {
        if (item.parentId) {
          var parent_node = self.$tree.tree('getNodeById', item.parentId);
          self.$tree.tree(
            'appendNode', {
              name: item.name,
              id: item.id,
              ownerName: item.ownerName
            },
            parent_node
          );
        } else {
          self.$tree.tree(
            'appendNode', {
              name: item.name,
              id: item.id,
              ownerName: item.ownerName
            }
          );
         var parentNode = self.$tree.tree('getNodeById', item.id);
         self.$tree.tree('addToSelection', parentNode);
        
        }
          var node = $('#retailTree').tree('getNodeById', 'root');
         $('#retailTree').tree('openNode', node);
          node = $('#retailTree').tree('getNodeById', 'DIV_1');
         $('#retailTree').tree('openNode', node);
    
          if(typeof current_page_id != 'undefined')
            {
                node = $('#retailTree').tree('getNodeById',current_page_id);
                $('#retailTree').tree('openNode', node);
            }
      });
        self.$tree.on(
            'tree.click',
            function(e){
                console.log("clicked");
                var selectedNode = e.node;
                if(selectedNode.id == "DIV_1"){
                    window.location.assign("landing2.html");
                }else if(selectedNode.id == "Unit_16"){
                    window.location.assign("landing3.html");
                }else if(selectedNode.id === "Activity_16_1"){
                    window.location.assign("landing4.html");
                }
            }
        )
      /*var submit = null;
      submit = new Submit();
      $("#grid").empty();
      submit.validate($("#from").val(), $("#to").val(), $('#tree1').tree('getSelectedNodes'), $('#chartsOrGrid').val());
      $("#selectedNode").text($('#tree1').tree('getSelectedNodes')[0].name);*/
    });
      /*
    var cntrlIsPressed = false;
    $(document).keydown(function (event) {
      if (event.which == "17")
        cntrlIsPressed = true;
    });
    $(document).keyup(function () {
      cntrlIsPressed = false;
    });
    self.$tree.on(
      'tree.click',
      function (e) {
        var submit = null;
        submit = new Submit();
         new ChartGc(submit);
        if (cntrlIsPressed === true) {
          e.preventDefault();
          var selected_node = e.node;

          if (selected_node.id == undefined) {
            console.log('The multiple selection functions require that nodes have an id');
          }

          if (self.$tree.tree('isNodeSelected', selected_node)) {
            self.$tree.tree('removeFromSelection', selected_node);
          } else {
            self.$tree.tree('addToSelection', selected_node);
          }
          $("#grid").empty();
          submit.validate($("#from").val(), $("#to").val(), $('#tree1').tree('getSelectedNodes'), $('#chartsOrGrid').val());
        } else {
          e.preventDefault();
          if ($('#tree1').tree('getSelectedNodes').length != 0) {
            $('#tree1').tree('getSelectedNodes').forEach(function (item) {
              self.$tree.tree('removeFromSelection', item);
            })
          }
          var selected_node = e.node;
          self.$tree.tree('addToSelection', selected_node);
          $("#grid").empty();
          submit.validate($("#from").val(), $("#to").val(), $('#tree1').tree('getSelectedNodes'), $('#chartsOrGrid').val());
          $("#selectedNode").text($('#tree1').tree('getSelectedNodes')[0].name);
          if ($('#tree1').tree('getSelectedNodes')[0].ownerName !== null) {
            $('#showUser').show();
            $("#selectedNodeOwner").text($('#tree1').tree('getSelectedNodes')[0].ownerName);
          } else {
            $('#showUser').hide();
          }
        }
      }
    );*/
  }
}
new Tree().init();