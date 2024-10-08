// import '/resources/scss/utils/app.scss';
// import '/resources/js/_jquery';
// import '../../scss/main.scss'
// import './head/header';
// import '/resources/scss/components/_footer.scss';

// import '../landing/index.js';
// import '/resources/js/custom/bpopup/index.js';
// import '/resources/scss/components/_toast.scss';
// import '/resources/js/custom/select2/index.js';


// $('.airport_data').each(function () {
//   $(this).select2({
//     data: data,
//     templateResult: (data) => data.html,
//     escapeMarkup: function (m) {
//       return m;
//     }
//   })
// })

// Importing SCSS files
import '/resources/scss/utils/app.scss';
import '/resources/scss/main.scss';
import '/resources/scss/components/_footer.scss';
import '/resources/scss/components/_toast.scss';

// Importing custom JS files
import '/resources/js/_jquery';
import './head/header';
import '../landing/index.js';
import '/resources/js/custom/bpopup/index.js';
import '/resources/js/custom/select2/index.js';
import '/resources/js/custom/dropify/index.js';
import '/resources/js/custom/toast/index.js';
// Select2 CSS and JS
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.min.js';

// Initializing Select2
$('.airport_data').each(function () {
  $(this).select2({
    data: data,
    templateResult: function (data) {
      return data.html;
    },
    escapeMarkup: function (m) {
      return m;
    }
  });
});
