$(document).ready(function () {
  var qrData = "https://store.kakao.com/kakaofriends";

// QR 코드 영역만 비우고 다시 생성
$(".qr_canvas_area").empty().qrcode({
  text: qrData,
  width: 150,
  height: 150
});

  // 초기 남은 시간 (분:초)
  var timeLeft = 5 * 60 + 0; // 5분 00초를 초로 변환

// ⏱ 타이머 함수
function updateTimer() {
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    $(".emph_time").text("00:00");

    // ✅ alert 대신 예쁜 모달 띄움
    $("#expireModal").fadeIn();
    return;
  }

  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;
  var formattedTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  $(".emph_time").text(formattedTime);
  timeLeft--;
}

// ⏱ 1초마다 업데이트
var timerInterval = setInterval(updateTimer, 1000);

// 🔄 리셋 버튼 클릭 시
$(".ico_reset").click(function () {
  resetTimer();
});

// ✅ 확인 버튼 누르면 리셋
$("#resetConfirmBtn").click(function () {
  $("#expireModal").fadeOut();
  resetTimer();
});

// 타이머 리셋 함수
function resetTimer() {
  timeLeft = 5 * 60;
  $(".emph_time").text("05:00");
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

$(document).ready(function () {
  // 이미지 클릭 시 내부 내용만 토글
  $("#image, .help").on("click", function () {
    $(".helpp, .help .link_more").stop().fadeToggle(150);
  });

  // 문서 바깥 클릭 시 내부 내용만 숨김 (help 영역과 아이콘 제외)
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#image, .help").length) {
      $(".helpp, .help .link_more").fadeOut(150);
    }
  });
});

// QR 코드 클릭 시 모달 열기
  $(".btn_help").click(function () {
    // QR 코드 클릭 시 모달 열기
    $("#qrModal").fadeIn();
  });

  // 모달 닫기 버튼 클릭 시 모달 닫기
  $("#qrModal .modal-content").click(function () {
    $("#qrModal").fadeOut();
  });
});
