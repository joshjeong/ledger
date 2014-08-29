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
    $('#container').show();
    $('.ledgers').hide();
  }

  this.showHome = function(){
    $('.ledgers').show();
    $('#container').hide();
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
  }

  this.toggleListener = function(){
    $('#new-btn').on('click', this.showForm)
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
      self.editPurchase($(this));
    })     
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
    var params = url.split("/")
    var itemId = params[6]
    var userId = params[4]
    $.ajax({
      url: "/users/"+userId+"/ledgers/"+itemId,
      type: "DELETE"
    }).done(function(){
      button.parents('.item').remove()
    })
  }

  this.editPurchase = function(button){
    var url = button.parents('.item').find('.purchase-link')[0].href
    var params = url.split("/")
    var itemId = params[6]
    var userId = params[4]
    $.ajax({
      url: "/users/"+userId+"/ledgers/"+itemId+"/edit",
      type: "GET"
    }).done(function(response){
      debugger
    })
  }
}
