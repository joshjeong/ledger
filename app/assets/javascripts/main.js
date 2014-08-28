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
    $('#delete-btn').on('click', function(e){
      e.preventDefault();
      self.deletePurchase($(this));
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
    var user_id = url.match(/\d/)[0]
    $.ajax({
      url: "/users/" + user_id + "/ledgers",
      type: "POST",
      data: newItem + "&user_id=" + user_id
    }).done(function(response) {
      $('.ledgers').prepend(response);
      $('#new_ledger').find($(".input-field")).val("");
      v.toggleForm();
    })
  }

  this.deletePurchase = function(button){
    debugger
  }


}
