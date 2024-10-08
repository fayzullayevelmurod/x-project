import 'jquery-toast-plugin/dist/jquery.toast.min.css';
import 'jquery-toast-plugin/dist/jquery.toast.min.js';
import './toast.scss';
$(document).ready(function () {
  $('#show-success-toast-btn').on('click', function () {
    $.toast({
      heading: 'Тайтл',
      text: 'Lorem ipsum dolor sit amet, Duis semper convallis',
      showHideTransition: 'slide',
      icon: 'success',
      position: 'top-right'
    });
  });
});

$(document).ready(function () {
  $('#show-error-toast-btn').on('click', function () {
    $.toast({
      heading: 'Тайтл',
      text: 'Lorem ipsum dolor sit amet, Duis semper convallis',
      showHideTransition: 'slide',
      icon: 'error',
      position: 'top-right'
    });
  });
});
$(document).ready(function () {
  $('#show-info-toast-btn').on('click', function () {
    $.toast({
      heading: 'Тайтл',
      text: 'Lorem ipsum dolor sit amet, Duis semper convallis',
      showHideTransition: 'slide',
      icon: 'info',
      position: 'top-right'
    });
  });
});
