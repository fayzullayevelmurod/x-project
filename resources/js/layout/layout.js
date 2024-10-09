// Importing SCSS files
import '/resources/scss/utils/app.scss';

import '/resources/scss/components/_footer.scss';
import '/resources/scss/components/_toast.scss';

// Importing custom JS files
import '/resources/js/_jquery';
import './head/header';
import '/resources/js/custom/bpopup/index.js';
import '/resources/js/custom/select2/index.js';
import '/resources/js/custom/dropify/index.js';
import '/resources/js/custom/toast/index.js';
import '/resources/js/global/js/index.js';

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
