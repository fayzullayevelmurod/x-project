import '/resources/scss/components/head/_burger_menu.scss';

var burger_menu = $(".burger_menu");
var burger_menu__bg = $(".burger_menu__bg");

$(".burger_menu_close").on("click", function (e) {
    burger_menu.removeClass("activ");
    burger_menu__bg.fadeOut(300);
});

$(".burger_menu_open").on("click", function (e) {
    burger_menu.addClass("activ");
    burger_menu__bg.fadeIn(300);
});

//

$(".burger_menu__navigations li > a").on("click", function (e) {
    var isActiv = $(this).hasClass("active");
    burgerMenuCloseNavigations();

    if(!isActiv)
    {
        $(this).addClass("active").closest("li").find(".navigation_list")
        .slideDown();
    }
});

var burger_menu_navigation_lists = $(".burger_menu .navigation_list");

function burgerMenuCloseNavigations()
{
    burger_menu_navigation_lists.slideUp().closest("li").find("> a").removeClass("active");
}

//

$(".burger_menu .setting_item_select").click(function (e) {
    var isActiv = $(this).hasClass("active");

    burgerMenuCloseSettingItems()

    if (!isActiv) {
        $(this)
            .addClass("active")
            .closest(".setting_items_wrapper")
            .find(".setting_items")
            .slideDown();
    }
});

var burger_menu_setting_items = $(".burger_menu .setting_items");

function burgerMenuCloseSettingItems()
{
    burger_menu_setting_items.slideUp().closest(".setting_items_wrapper").find(".setting_item_select").removeClass("active");
}

$(document).click(function(event) {
  if (!$(event.target).closest('.burger_menu__settings').length) {
    burgerMenuCloseSettingItems();
  }
});
