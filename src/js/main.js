AOS.init({ duration: 1000 });

const nav = $("#mobile-nav");
const closeBtn = $("#close-tog");
const openBtn = $("#open-tog");
$(nav).hide();

$(openBtn).click(() => {
  if ($(window).width() <= 786) {
    $(nav)
      .slideDown(500)
      .show();
  }
});

$(closeBtn).click(() => {
  $(nav).slideUp(300);
});
