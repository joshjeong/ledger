$(document).ready(function(){
  var v = new View();
  var c = new Controller(v);
  c.bindListeners()
})


View = {}

var View = function(){
  this.changeMenuPosition = function(){
    $('.ledger-list').slideToggle()
  }
}

Controller = {}

var Controller = function(view){
  v = view
  this.bindListeners = function(){
    $('#menu-button').on('click', this.showMenu);
  };

  this.showMenu = function(){
    v.changeMenuPosition()
  }

}