function checkPassword() {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value.trim(); // 移除前後空白

  if (password === '580777') {
    // 正確密碼，導向到指定的 YouTube 影片
    window.location.href = 'https://www.youtube.com/watch?v=nAe3vKDrLkk';
  } else {
    alert('太不小心啦，小粗心鬼💀💀💀');
    passwordInput.value = ''; // 清空輸入欄
  }
}
