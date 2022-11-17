'use strict';
{
  function showPassword() {

    const result = document.getElementById('result');
    //結果resultを取り出す
    //文字データを置いておく
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    //大文字も混ぜて出せるようにする
    let seed = letters + letters.toUpperCase();
    //数字チェックボタンが押されたら数字も出せるようにデータを置く
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const numbers = '0123456789';
    //記号ボタンを押すと記号も出るようにデータを置いておく
    const simbolsCheckbox = document.getElementById('simbols-checkbox');
      const simbols = '!$#&()';
  
      let password = '';
  
      if (numbersCheckbox.checked) {
          seed += numbers;  //数字をseesに加える
      }
      if (simbolsCheckbox.checked) {
          seed += simbols;  //記号をseesに加える
      }
  
      for (let i = 0; i < slider.value; i++ ) {
        password += seed[Math.floor(Math.random() * seed.length )];
      }

      result.textContent = password;

  }

  const slider = document.getElementById('slider');
  const btn = document.getElementById('btn');
//スライダーの操作
  slider.addEventListener('input', () => {
    const passwordLength = document.getElementById('password-length');
    passwordLength.textContent = slider.value;
//パスワードの長さ（文字数）をslider.valueにする
  });

  //ボタンをクリックしたら起こること

  btn.addEventListener('click', ( )=> {
    showPassword();
    //btnを、click したら、関数showPasswordを起動
  });

  showPassword();
  //リロード時にもすでにパスワードが生成されているように
}