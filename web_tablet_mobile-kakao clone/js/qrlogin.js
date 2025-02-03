$(document).ready(function() {
    var qrData = "https://store.kakao.com/kakaofriends";
    $(".box_qrcode>span").qrcode({
        text: qrData,
        width: 150,
        height: 150
    });
    // 초기 남은 시간 (분:초)
    var timeLeft = 4 * 60 + 17; // 4분 17초를 초로 변환

    // 타이머 업데이트 함수
    function updateTimer() {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            $(".emph_time").text("00분00초");
            return;
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
});