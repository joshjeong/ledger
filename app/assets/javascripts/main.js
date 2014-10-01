$(document).ready(function(){
  var v = new View();
  var c = new Controller(v);
  c.bindEvents();
  $('.purchase-link').on('click', function(e){
    e.preventDefault();
  })
})


View = {}

var View = function(){
  this.toggleForm = function(){
    $('.ledger-list').slideToggle()
  }

  this.showChart = function(){
    $('.ledger-table').hide();
    $('.ledgers').hide();
    $('#container').show();
    pieChart();
  }

  this.showHome = function(){
    $('#container').hide();
    $('.ledger-table').hide();
    $('.ledgers').show();
  }

  this.showNote = function(item){
    item.find('.note').slideToggle()
  }

  this.showTable = function(){
    $('.ledgers').hide();
    $('#container').hide();
    $('.ledger-table').show();
  }
}

Controller = {}

var Controller = function(view){
  v = view
  self = this

  this.bindEvents = function(){
    this.toggleListener();
    this.addItemListener();
    this.chartListener();
    this.homeListener();
    this.deleteListener();
    this.editListener();
    this.noteListener();
    this.tableListener();
    this.updateListener();
  }

  this.tableListener = function(){
    $('#export-btn').on('click', this.triggerExport)
  }

  this.toggleListener = function(){
    $('.ledgers').on('click', '#new-btn',this.showForm)
  }

  this.addItemListener = function (){
    $('#log-btn').on('click', function(e){
      e.preventDefault();
      self.addItem()
    })
  }

  this.chartListener = function(){
    $('#chart-btn').on('click', this.triggerChart)
  }

  this.homeListener = function(){
    $('#home-btn').on('click', this.triggerHome)
  }

  this.deleteListener = function(){
    $('.ledgers').on('click', '#delete-btn', function(e){
      self.deletePurchase($(this));
    })
  }

  this.editListener = function(){
    $('.ledgers').on('click', '#edit-btn', function(e){
      self.editPurchase($(this),e);
    })     
  }

  this.updateListener = function(){
    $('.ledgers').on('click', '#update-btn', function(e){
      e.preventDefault();
      self.updatePurchase($(this), e)
    })
  }

  this.noteListener = function(){
    $('.ledgers').on('click', '.item', function(e){
      self.triggerNote($(this))
    });
  }

  this.showForm = function(){
    v.toggleForm();
  }

  this.triggerChart = function(){
    v.showChart();
  }

  this.triggerHome = function(){
    v.showHome();
  }

  this.triggerNote = function(item){
    v.showNote(item)
  }

  this.triggerExport = function(){
    v.showTable();
  }

  this.addItem = function(){
    var newItem = $('#new_ledger').serialize();
    var url = $('#log-btn').closest('form').attr('action')
    var userId = url.match(/\d/)[0]
    $.ajax({
      url: "/users/" + userId + "/ledgers",
      type: "POST",
      data: newItem + "&user_id=" + userId
    }).done(function(response) {
      $('.ledgers').prepend(response);
      $('#new_ledger').find($(".input-field")).val("");
      v.toggleForm();
    })
  }

  this.deletePurchase = function(button){
    var url = button.parents('.item').find('.purchase-link')[0].href
        params = url.split("/")
        itemId = params[6]
        userId = params[4]
    $.ajax({
      url: "/users/"+userId+"/ledgers/"+itemId,
      type: "DELETE"
    }).done(function(){
      button.parents('.item').remove()
    })
  }

  this.editPurchase = function(object, button){
    var url = object.parents('.item').find('.purchase-link')[0].href
        params = url.split("/")
        itemId = params[6]
        userId = params[4]
        itemContainer = $(button.target).parents('.item')
    $.ajax({
      url: "/users/"+userId+"/ledgers/"+itemId+"/edit",
      type: "GET"
    }).done(function(response){
      $(itemContainer).html(response);
    })
  }

  this.updatePurchase = function(object, button){
  var information = object.parents().closest('.item').children('#hidden_info').text().split(',')
      userId = parseInt(information[0])
      itemId = parseInt(information[1])
      itemContainer = object.parents().closest('.item')
    $.ajax({
      url: "/users/"+userId+"/ledgers/"+itemId,
      type: "PUT",
      dataType: JSON,
      data: data
    }).done(function(response){
      itemContainer.html(response);
    })
  }
}
