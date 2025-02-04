$(document).ready(function () {
  var qrData = "https://store.kakao.com/kakaofriends";
  $(".box_qrcode>span").qrcode({
    text: qrData,
    width: 150,
    height: 150,
  });
  // 초기 남은 시간 (분:초)
  var timeLeft = 5 * 60 + 0; // 5분 00초를 초로 변환

  // 타이머 업데이트 함수
  function updateTimer() {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      $(".emph_time").text("00:00");
      // return;
      alert("로그인 유효시간이 만료되었습니다. 다시 리셋하세요");
    }

    // 남은 시간 계산
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;

    // 2자리 숫자로 포맷
    var formattedTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    // HTML 업데이트
    $(".emph_time").text(formattedTime);
    timeLeft--;
  }

  // 1초마다 타이머 업데이트
  var timerInterval = setInterval(updateTimer, 1000);
  // 리셋 버튼 클릭 이벤트 핸들러
  $(".ico_reset").click(function () {
    // 타이머를 초기화
    timeLeft = 5 * 60; // 5분으로 리셋
    $(".emph_time").text("05:00"); // HTML 업데이트

    // 기존 타이머를 정지하고 새로운 타이머 시작
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
  });
  $('.helpp').hide()
  $('.help a').hide()
  $('#image').mouseover(function(){
    $('.helpp').show()
    $('.help a').show()
  })
  $('#image , .helpp').click(function(){
    $('.helpp').hide()
    $('.help a').hide()
  })
});
