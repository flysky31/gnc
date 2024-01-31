$(document).ready(function(){


        let swiper1 = new Swiper(".mySwiper1", {
            slidesPerView: 3,
            slidesPerGroup : 3, 
            loopFillGroupWithBlank : true,
            spaceBetween: 10,
             autoplay: {
                 delay: 3000,
                 disableOnInteraction: false,
               },
            navigation: {
                nextEl: '.myarrow1.swiper-button-next',
                prevEl: '.myarrow1.swiper-button-prev',
            },
            speed:2000,
            breakpoints: {
                1280: {
                    slidesPerView: 2,
                    slidesPerGroup : 2, 
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup : 2, 
                    spaceBetween: 10,
                },

                768: {
                    slidesPerView: 1,
                    slidesPerGroup : 1, 
                    spaceBetween: 10,
                },
                },

                preloadImages: false, // 기본값은 true이며, false로 변경
                lazy: true, // lazy 로딩 사용 여부에 따라 설정
                on: {
                imagesReady: function () {
                    // 모든 이미지가 로드된 후에 실행될 코드 작성
                    console.log('모든 이미지가 로드되었습니다.');
            
                },
                },

        });



        let swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 1,
            
        
            slidesPerGroup : 1, 
            loopFillGroupWithBlank : true,
           // spaceBetween: 10,
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            //   },
            navigation: {
                nextEl: '.myarrow2.swiper-button-next',
                prevEl: '.myarrow2.swiper-button-prev',
              },
              
        
          });
        
        
        
        let swiper3 = new Swiper(".mySwiper3", {
            // slidesPerView: 6,
            
        
            // slidesPerGroup : 2, 
            slidesPerView: 1,
            grid: {
              rows: 1
            },
            loopFillGroupWithBlank : true,
        
            navigation: {
                nextEl: '.myarrow3.swiper-button-next',
                prevEl: '.myarrow3.swiper-button-prev',
              },
              
              breakpoints: {
        
        
                640: {
                    slidesPerView: 1,
                    grid: {
                      rows: 1
                    },
                  },
                }
        
          });
        
    });


