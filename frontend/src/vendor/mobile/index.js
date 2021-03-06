import './mobile.css';

$(() => {
  const pathname = window.location.pathname;
  $('.menu').each((index, el) => {
    const $el = $(el);
    const href = $el.attr('href');
    if (
      href === pathname
      || (href === '/dashboard' && new RegExp('github').test(pathname))
      || (href === '/resume/sharePage' && new RegExp('resume').test(pathname))
    ) {
      $el.addClass('active');
    }
  });

  const $menuIcon = $('.mobile_menu_icon');
  const $closeIcon = $('.mobile_menu_close');
  const $menuWrapper = $('.mobile_menu_wrapper');

  const changeOverflow = (overflow) => {
    $('body').css('overflow-y', overflow);
  };

  $menuIcon.on('click', () => {
    $menuWrapper.addClass('active');
    changeOverflow('hidden');
  });

  $closeIcon.on('click', () => {
    $menuWrapper.removeClass('active');
    changeOverflow('auto');
  });
});
