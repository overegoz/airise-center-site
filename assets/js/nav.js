/* 동남권AI혁신연구센터 — 레이아웃 설계용 최소 스크립트
   (1) 모바일 전체메뉴 토글  (2) 드롭다운 키보드 접근(Esc로 닫기) */
(function () {
  'use strict';

  var toggle = document.querySelector('.gnb-toggle');
  var gnb = document.getElementById('gnb');

  if (toggle && gnb) {
    toggle.addEventListener('click', function () {
      var open = gnb.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? '전체 메뉴 닫기' : '전체 메뉴 열기');
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (gnb && gnb.classList.contains('open')) {
      gnb.classList.remove('open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    } else if (document.activeElement && document.activeElement.closest) {
      var li = document.activeElement.closest('.gnb > li');
      if (li) {
        var top = li.querySelector(':scope > a');
        if (top) top.focus();
      }
    }
  });
})();
