import 'dropify/dist/css/dropify.min.css';
import 'dropify/dist/js/dropify.min.js';
import './dropify.scss';

$(document).ready(function () {
  $('.dropify').dropify();
  $('.dropify-wrapper .dropify-message p').text('Загрузите фото');
});
