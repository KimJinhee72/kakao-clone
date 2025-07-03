document.addEventListener("DOMContentLoaded", function () {
  // 메인베너 슬라이드 (Swiper.js 사용)
  var mainSwiper = new Swiper(".visual_Swiper", {
    loop: true, // 마지막 슬라이드 이후 처음으로 연결
    autoplay: {
      delay: 2000, // 자동재생 지연시간 2.5초
      disableOnInteraction: false, // 사용자가 조작해도 자동재생 유지
    },
    spaceBetween: 30,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

  // 메인 new 슬라이드
  var newSwiper = new Swiper(".newSwiper", {
    slidesPerView: 2,
    breakpoints: {
      477: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      594: {
        slidesPerView: 3.1,
      },
      615: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    loop: true,
  });
  // 헤더의 배송 및 장바구니 클릭시 로그인 모달 띄우기
  const headerModal = document.querySelector(".header_modal");
    function requestLogin(event) {
    event.preventDefault();
    if (headerModal) headerModal.style.display = "flex";
  }
  const loginBtns = document.querySelectorAll('a[href="#header_modal"]');
  loginBtns.forEach(btn => btn.addEventListener("click", requestLogin));
  
  // 헤더모달 닫기 클릭시
  const closeBtn = document.querySelector(".close_btn");
  closeBtn.addEventListener("click", function () {
    const headerModal = document.querySelector(".header_modal");
    headerModal.style.display = "none"; // 모달 숨기기
  });
});
