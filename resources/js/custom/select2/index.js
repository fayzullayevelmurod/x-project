// Select2 CSS va JS
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.min.js';
import './select2.scss'
import select2 from 'select2';
select2();

$(document).ready(function () {
  $(".js-example-tags").select2({
    tags: true
  });
});
