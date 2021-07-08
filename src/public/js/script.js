//Toggle
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
$('#top-nav').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

// Scroll
let btnNav = document.getElementById('btn-nav');

let topNav = document.getElementById('top-nav');

var myNav = $('#mainNav');
window.onscroll = function () {
  'use strict';
  if (window.location.pathname == '/') {
    if ($(this).scrollTop() > myNav.height()) {
      myNav.addClass('bg-primary');
      myNav.addClass('shadow-sm');
    } else {
      myNav.removeClass('bg-primary');
      myNav.removeClass('shadow-sm');
    }
  }

  if ($(this).scrollTop() > 200) {
    $('.back-to-top').removeAttr('hidden');
  } else {
    $('.back-to-top').attr('hidden', true);
  }
};

// Nav
if (window.location.pathname != '/') {
  myNav.addClass('bg-primary');
  myNav.addClass('shadow-sm');
}

function gotoDescription(e) {
  let description = document.getElementById('description');
  window.scrollTo(0, description.offsetTop - 72);
}

// Comfirm when delete
const confirmDeleteItem = (name) => {
  console.log(name);
  if (confirm(`Do you want to delete product "${name}"?`)) {
    return true;
  }
  return false;
};