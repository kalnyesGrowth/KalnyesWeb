/* KalnyesGrowth preview booking panel — injected on ?preview=jose */
(function () {
  if (new URLSearchParams(window.location.search).get('preview') !== 'jose') return;

  var CALENDLY_URL = 'https://calendly.com/kalnyesgrowth/boost-your-business';

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
      window.location.href = 'https://kalnyesgrowth.com/book/';
    }
  }

  /* ── Inject bottom booking panel ── */
  var panel = document.createElement('div');
  panel.id = 'kg-float';
  panel.innerHTML =
    '<div id="kg-float-inner">' +
      '<div id="kg-float-text">' +
        '<strong>Your site is ready to launch.</strong>' +
        '<span>$400 all-in &middot; Free if you don\'t love it &middot; 5 spots open this week</span>' +
      '</div>' +
      '<div id="kg-float-ctas">' +
        '<a href="' + CALENDLY_URL + '" id="kg-float-book">&#128197; Book Free 15-Min Call</a>' +
        '<a href="tel:+15407838835" id="kg-float-call">&#128222; (540) 783-8835</a>' +
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
    '#kg-float-ctas{display:flex;gap:8px;flex-shrink:0;}' +
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
    '@media(max-width:560px){' +
      '#kg-float{padding:10px 12px;}' +
      '#kg-float-ctas{width:100%;}' +
      '#kg-float-book,#kg-float-call{flex:1;justify-content:center;}' +
    '}' +
    '@media(max-width:600px){body{padding-bottom:130px!important;}}' +
    '@media(min-width:601px){body{padding-bottom:72px!important;}}';
  document.head.appendChild(s);
})();
