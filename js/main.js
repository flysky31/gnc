$(document).ready(function(){
        //헤더스크롤
        let $header = $("#header"),
        $header_offset = $header.offset().top;

        $(window).scroll(function(){
            if( $(window).scrollTop() > 50){
                $header.addClass("on");
            } else {
                $header.removeClass("on");
            }

        });


        //모바일 햄버거메뉴
        $('.hamBtn').click(function(){
            $(this).toggleClass('on');
            $('#aside').toggleClass('on');
            $('.aside_bg').toggleClass('on');
        
        })
        $(".aside_bg").click(function(){
            $(this).removeClass('on');
            $("#aside").removeClass('on');
            $(".hamBtn").removeClass('on');
        })
        $("#header .m-headWrap .mgnb_bg").click(function(){
            $(".hamBtn").removeClass('on');
            $('#aside').removeClass('on');
            
            // $('#header .m-headWrap .mgnb li').removeClass('on');
            // $('#header .m-headWrap .mgnb li .sub-menu').css('display',"none");
        })

        //상단으로
        $('.totop').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });


        //모바일 퀵메뉴
        // $(window).on("click","#m_quick .open",function (){
        //     alert("sss");
        // $("#m_quick .open").click(function() {
        //     $(this).toggleClass("on");
        //     $("#m_quick").find(".container").slideToggle();
        // });
        $("#container").addClass("idx-container");
        $(document).on("click","#m_quick .open",function (){
         // alert("sss");
      //  $("#m_quick .open").click(function() {
            $(this).toggleClass("on");
            $("#m_quick").find(".container").slideToggle();
        });


        function checkWindowSize() {
            if (window.innerWidth >= 1024) {
              // 1024px 이상일 때 클래스를 삭제
              
              $("#aside").removeClass("on");              
              $(".aside_bg").removeClass("on");
              $(".hamBtn").removeClass("on");
            } else {
              // 1024px 미만일 때 클래스를 다시 추가
            
            }
          }
          
          // 페이지 로드 시와 화면 크기 변경 시에도 함수 실행
          window.addEventListener("load", checkWindowSize);
          window.addEventListener("resize", checkWindowSize);
})
  

$(document).ready(function(){
  // Handle modal trigger clicks
  $('.modal-trigger').click(function(e) {
    e.preventDefault();
    let fileUrl = $(this).data('src');
    
    // Get the content of the clicked modal-trigger's parent li
    
    var modalContent = "<span id='close' class='close'><i></i></span> <img src='"+fileUrl+"'>";
 
    // Set the modal content
    $('.modal-content2 .modal_box').html(modalContent);


    // Show the modal
    $('#myModal2').fadeIn();
  });

  // Handle modal close button click
  $('#close, #myModal2').click(function() {
    // Hide the modal
    $('#myModal2').fadeOut();
  });

  // Handle clicking outside the modal to close it
  $(window).click(function(event) {
    if (event.target.id === 'myModal2') {
      $('#myModal2').fadeOut();
    }
  });
});

