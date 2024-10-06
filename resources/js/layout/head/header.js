import '/resources/scss/components/head/_header.scss';
import './burger_menu.js';

var header_lists = $(".header .lists_wrapper, .header .header__settings");

$(".navigation").click(function () {
    hederCloseMenus();
    var item = $(this).find(".lists_wrapper");
    if (item.css("display") == "none") {
        item.slideDown();
    }
});

$(".header__settings_icon").click(function () {
    hederCloseMenus();
    var item = $(this).siblings(".header__settings");
    if (item.css("display") == "none") {
        item.slideDown();
    }
});

function hederCloseMenus()
{
    header_lists.slideUp();
}

$(document).click(function(event) {
  if (!$(event.target).closest('.header').length) {
    hederCloseMenus();
  }
});

//

$(document).ready(function () {
    $("header").removeClass("header_fix");
    
    $("body").scroll(function () {
        if ($(this).scrollTop() > 20) {
            $("header").addClass("header_fix");
        } else {
            $("header").removeClass("header_fix");
        };
    });
});