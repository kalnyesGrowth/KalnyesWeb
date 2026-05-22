/* KalnyesGrowth preview booking panel — injected on ?preview=jose */
(function () {
  if (new URLSearchParams(window.location.search).get('preview') !== 'jose') return;

  var CALENDLY_URL = 'https://calendly.com/kalnyesgrowth/boost-your-business';
  var WA_URL = 'https://wa.me/15407838835?text=Hey%20Jose%2C%20I%20saw%20the%20free%20website%20you%20built%20for%20my%20business.%20I%27m%20interested%20%E2%80%94%20can%20we%20talk%3F';
  var BOOK_URL = 'https://kalnyesgrowth.com/book/';

  /* ── Deadline countdown ── */
  var deadline = new Date('2026-07-31T23:59:59');
  var daysLeft = Math.ceil((deadline - new Date()) / (24 * 3600 * 1000));
  var deadlineText = (daysLeft > 0 && daysLeft <= 14)
    ? '⚠️ ' + daysLeft + ' day' + (daysLeft === 1 ? '' : 's') + ' left at this price'
    : '5 spots open this week';

  /* ── Load Calendly popup assets ── */
  var cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = 'https://assets.calendly.com/assets/external/widget.css';
  document.head.appendChild(cssLink);

  var calScript = document.createElement('script');
  calScript.src = 'https://assets.calendly.com/assets/external/widget.js';
  calScript.async = true;
  document.head.appendChild(calScript);

  /* ── Open Calendly popup ── */
  function openCal(e) {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.location.href = BOOK_URL;
    }
  }

  /* ── Inject bottom booking panel ── */
  var panel = document.createElement('div');
  panel.id = 'kg-float';
  panel.innerHTML =
    '<div id="kg-float-inner">' +
      '<div id="kg-float-text">' +
        '<strong>Your site is ready to launch.</strong>' +
        '<span>$600 all-in &middot; Free if you don\'t love it &middot; ' + deadlineText + '</span>' +
      '</div>' +
      '<div id="kg-float-ctas">' +
        '<a href="' + WA_URL + '" id="kg-float-wa" target="_blank">&#128172; Text Jose</a>' +
        '<a href="' + CALENDLY_URL + '" id="kg-float-book">&#128197; Book Free Call</a>' +
        '<a href="tel:+15407838835" id="kg-float-call">&#128222; Call</a>' +
      '</div>' +
    '</div>';
  document.body.appendChild(panel);

  /* ── Also upgrade the top-banner Book button ── */
  document.addEventListener('DOMContentLoaded', function () {
    var bannerBook = document.querySelector('.kg-btn-book');
    if (bannerBook) bannerBook.addEventListener('click', openCal);
  });

  document.getElementById('kg-float-book').addEventListener('click', openCal);

  /* ── Styles ── */
  var s = document.createElement('style');
  s.textContent =
    '#kg-float{' +
      'position:fixed;bottom:0;left:0;right:0;z-index:9000;' +
      'background:linear-gradient(135deg,#0e0e1c 0%,#1a1230 100%);' +
      'border-top:2px solid #e8c040;' +
      'padding:12px 20px;' +
      'box-shadow:0 -4px 32px rgba(0,0,0,0.55);' +
    '}' +
    '#kg-float-inner{' +
      'max-width:960px;margin:0 auto;' +
      'display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;' +
    '}' +
    '#kg-float-text strong{display:block;color:#e8c040;font-size:0.92rem;font-weight:800;line-height:1.3;}' +
    '#kg-float-text span{font-size:0.76rem;color:rgba(255,255,255,0.68);}' +
    '#kg-float-ctas{display:flex;gap:8px;flex-shrink:0;flex-wrap:wrap;}' +
    '#kg-float-wa{' +
      'background:#25d366;color:#fff;' +
      'padding:10px 16px;border-radius:7px;' +
      'font-weight:800;font-size:0.85rem;text-decoration:none;' +
      'display:inline-flex;align-items:center;gap:5px;white-space:nowrap;' +
    '}' +
    '#kg-float-book{' +
      'background:#e8c040;color:#0e0e1c;' +
      'padding:10px 20px;border-radius:7px;' +
      'font-weight:800;font-size:0.88rem;text-decoration:none;cursor:pointer;' +
      'display:inline-flex;align-items:center;gap:5px;white-space:nowrap;' +
    '}' +
    '#kg-float-call{' +
      'background:transparent;color:#fff;' +
      'padding:10px 14px;border-radius:7px;' +
      'font-weight:700;font-size:0.83rem;text-decoration:none;' +
      'border:1px solid rgba(255,255,255,0.28);' +
      'display:inline-flex;align-items:center;gap:5px;white-space:nowrap;' +
    '}' +
    '@media(max-width:600px){' +
      '#kg-float{padding:10px 12px;}' +
      '#kg-float-ctas{width:100%;gap:6px;}' +
      '#kg-float-wa,#kg-float-book,#kg-float-call{flex:1;justify-content:center;font-size:0.8rem;padding:11px 6px;}' +
    '}' +
    '@media(max-width:600px){body{padding-bottom:140px!important;}}' +
    '@media(min-width:601px){body{padding-bottom:80px!important;}}';
  document.head.appendChild(s);
})();
