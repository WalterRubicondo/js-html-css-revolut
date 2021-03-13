$(document).ready(function () {
  menu()
  focus()
  changePage()
})

function menu() {
  var showMenu = $('header .navbar-right a[class^="call"]');

  showMenu.mouseenter(function () {
    var name = $(this).attr('name');
    var hideMenu = $('header .navbar-right .hide-menu div[name=' + name + ']');
    hideMenu.addClass("active")
  })

  showMenu.mouseleave(function () {
    var name = $(this).attr('name');
    var hideMenu = $('header .navbar-right .hide-menu div[name=' + name + ']');
    hideMenu.removeClass("active")
  })
}


function focus() {
  var focus = $("header .navbar-right .hide-menu div");

  focus.mouseenter(function() {
    $(this).addClass("active")
  })

  focus.mouseleave(function() {
    $(this).removeClass("active")
  })
}

function changePage() {
  var change = $("header .navbar-left a")

  change.click(function () {
    var page =  $("active");
    $(".active").removeClass("active")
    $(this).addClass("active")
  })
}
