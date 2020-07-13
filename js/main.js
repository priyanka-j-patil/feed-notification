SI_feed = {};

$(document).ready(function() {
  SI_feed.bindClickEvent();
});

SI_feed.bindClickEvent = function() {
  //open datesmenu
  $(".si-dates").on("click", function() {
    $(this)
      .parent()
      .toggleClass("active");
  });

  //open dropdown and select data
  $(".si-drpDwn").on("click", function() {
    $(this).toggleClass("active");
    $(this)
      .find("li")
      .on("click", function() {
        $(this)
          .parent()
          .parent()
          .siblings()
          .first()
          .text($(this).text());
      });
  });

  //change tabs
  $("body").on("click", ".si-tabs ul li a", function(e) {
    $(".si-tabs ul li").removeClass("active");
    $(this)
      .parent()
      .addClass("active");
    e.preventDefault();
    var currentTab = $(this).attr("href");
    $(".si-tab").removeClass("active");
    $(currentTab).addClass("active");
  });
};
