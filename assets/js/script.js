// JavaScriptで要素にshowクラスを追加
window.addEventListener('load', function() {
  const welcomeElement = document.querySelector('.welcome');
  welcomeElement.classList.add('show');
});


document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const menuList = document.querySelector('.menu');

  menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active'); // アイコンの変更
    menuList.classList.toggle('show');
  });
});
