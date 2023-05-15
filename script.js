
// tel
const chkTel1 = function() {
  let telNum1 = document.querySelector("#telNum1").value;
  if(telNum1.length === 3) {
    document.querySelector("#telNum2").focus();
  }
}
const chkTel2 = function() {
  let telNum2 = document.querySelector("#telNum2").value;
  if(telNum2.length === 4) {
    document.querySelector("#telNum3").focus();
  }
}
const chkTel3 = function() {
  let telNum1 = document.querySelector("#telNum3").value;
  if(telNum1.length === 4) {
    submitNumberBtn.disabled = false;
  }
}


// button
const submitNumberBtn = document.querySelector("#submitNumber");
const chkNumberBtn = document.querySelector("#chkNumber");
const joinBtn = document.querySelector("#join");

// **인증번호전송 btn
submitNumberBtn.addEventListener("click", function() {
  // 랜덤넘버 생성
  let randNumText = document.querySelector(".randNum span");
  let randNum = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  randNumText.innerText = randNum;

  // 시간 카운터 시작
  setTime();

  // 인증완료 버튼 활성화
  chkNumberBtn.disabled = false;
}) 

function setTime() {
  let timeCount = document.querySelector(".time");
  let time = 60 * 3 - 1;
  // let time = 2;
  let counter = setInterval(function() {
    if(time >= 0) {
      let min = Math.floor(time / 60); 
      let sec = String(time % 60).padStart(2, "0");
      timeCount.innerText = `${min}:${sec}`;
      time = time - 1;
    } else {
      chkNumberBtn.disabled = true;
      clearInterval(counter);
    }
  }, 1000);
}

// **인증 완료 btn
chkNumberBtn.addEventListener("click", function() {
  alert("인증이 완료되었습니다");
  joinBtn.disabled = false;
});

// input-box
userMail = document.querySelector("#email");
userName = document.querySelector("#name");
userPw1 = document.querySelector("#pw1");
userPw2 = document.querySelector("#pw2");

// **가입하기 btn
joinBtn.addEventListener("click", function() {

  let chkMail = false;
  let chkName = false;
  let chkPw1 = false;
  let chkPw2 = false;

  if(userMail.value === "") {
    document.querySelector(".errMail").innerText = "이메일을 입력하세요.";
  } else if(!userMail.value.includes('@')) {
    document.querySelector(".errMail").innerText = "이메일 형식이 올바르지 않습니다.";
  } else {
    chkMail = true;
  }

  if(userName.value === "") {
    document.querySelector(".errName").innerText = "이름을 입력하세요.";
  } else {
    chkName = true;
  }

  if(userPw1.value === "") {
    document.querySelector(".errPw1").innerText = "비밀번호를 입력하세요.";
  } else {
    chkPw1 = true;
  }


  if(userPw2.value === "") {
    document.querySelector(".errPw2").innerText = "비밀번호 확인을 입력하세요.";
  } else if ( userPw1.value !== userPw2.value ) {
    document.querySelector(".errPw2").innerText = "비밀번호가 일치하지 않습니다.";
  } else {
    chkPw2 = true;
  }

  if(chkMail && chkName && chkPw1 && chkPw2) {
    alert("회원가입을 축하합니다!");
  }
})