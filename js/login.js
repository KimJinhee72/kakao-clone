$(document).ready(function () {
  // 이미지 클릭 시 .helpp 와 .help a 토글
  $("#image").click(function () {
    $(".helpp").toggle();
    $(".help a").toggle();
  });

  // 바깥 클릭 시 도움말 숨기기
  $(document).mouseup(function (e) {
    const helpBox = $(".help");
    const icon = $("#image");

    // 클릭한 요소가 .help 또는 #image 바깥이면 숨기기
    if (!helpBox.is(e.target) && helpBox.has(e.target).length === 0 &&
        !icon.is(e.target) && icon.has(e.target).length === 0) {
      $(".helpp").hide();
      $(".help a").hide();
    }
  });
});
