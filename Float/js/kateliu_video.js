$(document).ready(function(){
            /* 비디오1 클릭시 요소 */
            $('.video').on('click',function(){
                $('.video').children().hide();
                $(this).children().toggle();
            });
            $('.video2').on('click',function(){
                $('video2').next().hide();
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

            var video = $('#mont_video');
            var btn = $('#mont_btn');
            $('#mont_btn').click(function(){
                if(video.get(0).paused){
                    video.get(0).play();
                    btn.html('<button id="mont_btn"><i class="fa fa-pause-circle-o" aria-hidden="true"></i></button>')
                }else{
                    video.get(0).pause();
                    btn.html('<button id="mont_btn"><i class="fa fa-play-circle-o" aria-hidden="true"></i></button>')
                }
            });
        });