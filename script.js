function checkPassword() {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value.trim(); // 移除前後空白

  if (password === '580777') {
    // 正確密碼，導向到指定的 YouTube 影片
    window.location.href = 'https://youtu.be/A-1Z5yNECT0';
  } else {
    alert('我可能會覺得:以台灣媒體的素質，應該不會上新聞');
    passwordInput.value = ''; // 清空輸入欄
  }
}
