
// $('#circle_check').val(this.checked);

// $('#circle_check').change(function() {
//     var parent=$(this).parent();
//     if(this.checked) {
//         parent.addClass('content__content-item-left--checked'); 
//         parent.find('img.icon_check').addClass('icon_check--active'); 
//         // $(this).prop("checked");        
//     }else{
//         parent.removeClass('content__content-item-left--checked');    
//         $(this).prop("checked");
//     }
//     $('#circle_check').val(this.checked);        
// });

$('.show-mobile.sidebar-icon').click(function (e) { 
    e.preventDefault();
    // $('.sidebar').css('display','block');
    $('.sidebar').addClass('show');
    $('.overlay').addClass('show');
    
});
$('.overlay').click(function (e) { 
    e.preventDefault();
    // $('.sidebar').css('display','block');
    $('.sidebar').removeClass('show');
    $('.overlay').removeClass('show');
    
});
$('.icon-close').click(function (e) {
    $('.sidebar').removeClass('show');
    $('.overlay').removeClass('show');

})

function sidebar() {
    var ok = $('.sidebar').hasClass('show');
    var ok2 = $('.sidebar-icon').hasClass('expand');

    var w = $(window).width();
    if (w < 740) {
        if (ok) {
            $('.sidebar-icon').addClass('expand');
            $('.sidebar').css('width','24rem');
        }
        else{
            $('.sidebar-icon').removeClass('expand');
            $('.sidebar').css('width','0');
            $('.view').css('width','100%'); 
        }
    }    
    else{
        $('.sidebar').css('width','24rem');
        $('.view').css('width','calc(100% - var(--sidebar-width))');

        if (ok2) {
            $(this).removeClass('expand');
            $('.sidebar').css('width','10rem');
            $('.view').css('width','calc(100% - 10rem)'); 
            $('.sidebar-content .item').css('padding','1.2rem 4rem');
            $('.sidebar-content .head').css('padding','1.2rem 4rem');
    
            $('.logo-title').addClass('hide');
            $('.sidebar-content .head .title').addClass('hide');
            $('.sidebar-content .item .title').addClass('hide'); 
            
        }else{
            $(this).addClass('expand');
            $('.sidebar').css('width','24rem');
            $('.view').css('width','calc(100% - var(--sidebar-width))'); 
            $('.sidebar-content .item').css('padding','1.2rem 1.5rem');
            $('.sidebar-content .head').css('padding','1.2rem 1.5rem');
            $('.logo-title').removeClass('hide');
            $('.sidebar-content .head .title').removeClass('hide');
            $('.sidebar-content .item .title').removeClass('hide');
            
        }
    }
}

setInterval(function(){ 
    sidebar();
}, 10);

$('.sidebar-icon').click(function (e) { 
    e.preventDefault();
    var ok = $(this).hasClass('expand');
    var w = $(window).width();

    if(ok){
        $(this).removeClass('expand');
        $('.sidebar').css('width','10rem');
        $('.view').css('width','calc(100% - 10rem)');
        $('.sidebar-content .item').css('padding','1.2rem 4rem');
        $('.sidebar-content .head').css('padding','1.2rem 4rem');

        $('.logo-title').addClass('hide');
        $('.sidebar-content .head .title').addClass('hide');
        $('.sidebar-content .item .title').addClass('hide');  
        if (w < 740) {
            setInterval(function(){ 
                sidebar();
            }, 10);
        }             
    }else{
        $(this).addClass('expand');
            
        $('.sidebar').css('width','24rem');
        // $('.view').css('width','calc(100% - var(-sidebar-width))');            

        $('.sidebar-content .item').css('padding','1.2rem 1.5rem');
        $('.sidebar-content .head').css('padding','1.2rem 1.5rem');
        $('.logo-title').removeClass('hide');
        $('.sidebar-content .head .title').removeClass('hide');
        $('.sidebar-content .item .title').removeClass('hide');   
        if (w < 740) {
            setInterval(function(){ 
                sidebar();
            }, 10);
        }else{
            $('.sidebar').css('width','24rem');
            $('.view').css('width','calc(100% - var(--sidebar-width))'); 
        }    
    }
});

