function checkPassword() {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value.trim(); // 移除前後空白

  if (password === '580777') {
    const passwordForm = document.querySelector('.password-form');
    const videoContainer = document.getElementById('video-container');

    passwordForm.style.display = 'none'; // 隱藏密碼輸入區域
    videoContainer.style.display = 'block'; // 顯示影片區域
  } else {
    alert('Incorrect password. Please try again.');
    passwordInput.value = ''; // 清空輸入欄
  }
}
