$(document).ready(function(){
            /* 비디오1 클릭시 요소 */
            $('.video').on('click',function(){
                $(this).children().toggle();
            });
            $('.video2').on('click',function(){
                $(this).next().toggle();
            })


            /* 페이지 속성 */
            $('.click_able2019').click(function() {
                $('.one_page').css('display','block');
                $('.two_page').css('display','none');
                $('.video').children().hide();
                $('video2').next().hide();
            })
            $('.click_able2022').click(function() {
                $('.one_page').css('display','none');
                $('.two_page').css('display','block');
                $('.video').children().hide();
                $('video2').next().hide();
            })
            $('.video').children().hover(function(){
                $(this).parent().removeClass('hovered');
            })
            
            $('#clickable1, #clickable2, #clickable3').mouseenter(function(){
                $(this).css('color', '#fc2');
            }).mouseleave(function(){
                $(this).css('color', 'black');
            });
            
            $('#clickable1, #clickable2, #clickable3').children().mouseenter(function(){
                $(this).parent().addClass('child-hover');
            }).mouseleave(function(){
                $(this).parent().removeClass('child-hover');
            });

            $(".more1 div img").click(function(){
                $(this).parent().hide();
            })
            $(".more2 div img").click(function(){
                $(this).parent().hide();
            })
            $(".more3 div img").click(function(){
                $(this).parent().hide();
            })
            $(".more4 div img").click(function(){
                $(this).parent().hide();
            })                                    
        });