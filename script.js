function checkPassword() {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value.trim(); // 移除前後空白

  if (password === '580777') {
    const passwordForm = document.querySelector('.password-form');
    const videoContainer = document.getElementById('video-container');

    passwordForm.style.display = 'none'; // 隱藏密碼輸入區域
    videoContainer.style.display = 'block'; // 顯示影片區域function checkPassword() {
  const passwordInput = document.getElementById('密碼');
  const password = passwordInput.value.trim(); // 移除前後空白

  if (password === '580777') {
    // 正確密碼，導向到指定的網頁
    window.location.href = 'https://www.youtube.com/watch?v=nAe3vKDrLkk';
  } else {
    alert('太不小心啦，小粗心鬼💀💀💀');
    passwordInput.value = ''; // 清空輸入欄
  }
}
