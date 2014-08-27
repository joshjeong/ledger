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
    this.addFormListener();
  }

  this.addFormListener = function(){
    $('#menu-button').on('click', this.showForm)
  }

  this.showForm = function(){
    v.toggleForm();
  }


}
