AOS.init({ duration: 1000 });

const nav = $("#mobile-nav");
const closeBtn = $("#close-tog");
const openBtn = $("#open-tog");
$(nav).hide();

$(openBtn).on("click", () => {
  if ($(window).width() <= 786) {
    $(nav)
      .slideDown(500)
      .show();
    $("body").css("position", "fixed");
  }
});

$(closeBtn).on("click", () => {
  $(nav).slideUp(300);
  $("body").css("position", "relative");
});
