$(document).ready(function(){
  var v = new View();
  var c = new Controller(v);
  c.bindEvents()
})


View = {}

var View = function(){
  this.toggleForm = function(){
    $('.ledger-list').slideToggle()
  }
}

Controller = {}

var Controller = function(view){
  v = view
  self = this

  this.bindEvents = function(){
    this.toggleListener();
    this.addItemListener();
  }

  this.toggleListener = function(){
    $('#add-btn').on('click', this.showForm)
  }

  this.addItemListener = function (){
    $('#log-btn').on('click', function(e){
      e.preventDefault();
      self.addItem()
    })
  }

  this.showForm = function(){
    v.toggleForm();
  }

  this.addItem = function(){
    var newItem = $('#new_ledger').serialize();
    var url = $('#log-btn').closest('form').attr('action')
    var user_id = url.match(/\d/)[0]
    $.ajax({
      url: "/add_item",
      type: "POST",
      data: newItem + "&user_id=" + user_id
    }).done(function(response) {
      $('.ledgers').prepend(response);
      // $('#new_ledger').find($(".input-field")).val("");
    })
  }


}
