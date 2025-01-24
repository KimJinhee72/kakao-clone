$(document).ready(function() {
    // 이미지 클릭 시 도움말 표시
    $("#image").click(function() {
        $("#help").show();
    });
    // 닫기 버튼 클릭 시 도움말 숨김

    $("#help p").click(function() {
        $("#help").hide();
    });
   
});