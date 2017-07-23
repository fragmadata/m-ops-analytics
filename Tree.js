'use strict';
class Tree {

  constructor() {
    var self = this;
    $('#showUser').hide();
  }

  init() {

    self.$tree = $('#retailTree');
    self.$tree.tree({
      data: {},
      autoOpen: true,
      closedIcon: $('<i class="glyphicon glyphicon-plus"></i>'),
      openedIcon: $('<i class="glyphicon glyphicon-minus"></i>'),
      autoOpen: 0,
    });
    new AjaxRequest().Request("/hierarchy.json", "GET", "application/json").done(function (data) {
      data.forEach(function (item) {
        if (item.parentId) {
          var parent_node = self.$tree.tree('getNodeById', item.parentId);

          self.$tree.tree(
            'appendNode', {
              name: item.name,
              id: item.id,
              ownerName : item.ownerName
            },
            parent_node
          );
        } else {
          self.$tree.tree(
            'appendNode', {
              name: item.name,
              id: item.id,
              ownerName : item.ownerName
            }
          );
          var parentNode = self.$tree.tree('getNodeById', item.id);
          self.$tree.tree('addToSelection', parentNode);
        }
      })

      var submit = new Submit();
      console.log($('#chartsOrGrid').val())
      $("#grid").empty();
      submit.validate($("#from").val(), $("#to").val(), $('#tree1').tree('getSelectedNodes'),$('#chartsOrGrid').val());
      $( "#selectedNode" ).text($('#tree1').tree('getSelectedNodes')[0].name);
    }).fail(function () {
      toastr.error('Please Try Later', 'Error')
    });
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
        // Disable single selection
        var submit = new Submit();
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
          console.log($('#tree1').tree('getSelectedNodes'))
          $("#grid").empty();
          submit.validate($("#from").val(), $("#to").val(), $('#tree1').tree('getSelectedNodes'),$('#chartsOrGrid').val());
        } else {
          e.preventDefault();
          if ($('#tree1').tree('getSelectedNodes').length != 0) {
            $('#tree1').tree('getSelectedNodes').forEach(function (item) {
              self.$tree.tree('removeFromSelection', item);
            })
          }
          var selected_node = e.node;
          self.$tree.tree('addToSelection', selected_node);
          console.log($('#tree1').tree('getSelectedNodes'))
          $("#grid").empty();
          submit.validate($("#from").val(), $("#to").val(), $('#tree1').tree('getSelectedNodes'),$('#chartsOrGrid').val());
          $( "#selectedNode" ).text($('#tree1').tree('getSelectedNodes')[0].name);
          if($('#tree1').tree('getSelectedNodes')[0].ownerName !== null){
            $('#showUser').show();
            $( "#selectedNodeOwner" ).text($('#tree1').tree('getSelectedNodes')[0].ownerName);
          }else{
             $('#showUser').hide();
          }
        }
      }
    );
  }

}