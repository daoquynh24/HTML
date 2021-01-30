
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
    $('.sidebar').addClass('show');
    $('.overlay').addClass('show');    
});
$('.overlay').click(function (e) { 
    e.preventDefault();
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
            $('.sidebar').removeClass('sidebar-width-zero');
            $('.sidebar').removeClass('sidebar-width-small');
        }
        else{
            $('.sidebar-icon').removeClass('expand');
            $('.sidebar').removeClass('sidebar-width-small');
            $('.view').removeClass('view-width-small');
            $('.sidebar').addClass('sidebar-width-zero');
            $('.view').addClass('sidebar-width-full');
        }
    }    
    else{
        $('.sidebar').removeClass('sidebar-width-zero');
        $('.view').removeClass('sidebar-width-full');

        if (ok2) {
            $(this).removeClass('expand');
            $('.sidebar').addClass('sidebar-width-small');
            $('.view').addClass('view-width-small'); 
            $('.sidebar-content .item').addClass('padd-big');
            $('.sidebar-content .head').addClass('padd-big');

            $('.logo-title').addClass('hide');
            $('.sidebar-content .title').addClass('hide');
            // $('.sidebar-content .item .title').addClass('hide'); 
            $('.icon-mobile').addClass('show');
            $('.icon-down').addClass('hide'); 
            $('.sidebar-content .head img').addClass('img-project');
            
        }else{
            $(this).addClass('expand');
            $('.sidebar').removeClass('sidebar-width-small');
            $('.view').removeClass('view-width-small');             
            $('.sidebar-content .item').removeClass('padd-big');
            $('.sidebar-content .head').removeClass('padd-big');
            $('.logo-title').removeClass('hide');
            $('.sidebar-content .title').removeClass('hide');
            $('.icon-mobile').removeClass('show');
            // $('.sidebar-content .item .title').removeClass('hide');
            $('.icon-down').removeClass('hide'); 
            $('.sidebar-content .head img').removeClass('img-project');            
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
        $('.sidebar').addClass('sidebar-width-small');
        $('.view').addClass('view-width-small'); 
        $('.sidebar-content .item').addClass('padd-big');
        $('.sidebar-content .head').addClass('padd-big');

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
        $('.sidebar').removeClass('sidebar-width-zero');
        $('.sidebar-content .item').removeClass('padd-big');
        $('.sidebar-content .head').removeClass('padd-big');
        $('.logo-title').removeClass('hide');
        $('.sidebar-content .head .title').removeClass('hide');
        $('.sidebar-content .item .title').removeClass('hide');   
        if (w < 740) {
            setInterval(function(){ 
                sidebar();
            }, 10);
        }
        // else{
        //     $('.sidebar').removeClass('sidebar-width-zero');
        //     $('.view').removeClass('sidebar-width-full');
        //     $('.sidebar').removeClass('sidebar-width-small');
        //     $('.view').removeClass('view-width-small'); 
        // }    
    }
});

$(".sidebar-menu a").click(function(e){
    var parent=$(this).parent();
    if(parent.find(">ul").length){
        e.preventDefault();
        parent.siblings().removeClass("open");
        if(parent.hasClass("open")){
            parent.removeClass("open");  
            $(this).find('.icon-down').removeClass('active');
            parent.find('>ul').removeClass('active');
        }else{
            parent.addClass("open");    
            $(this).find('.icon-down').addClass('active');
            parent.find('>ul').addClass('active');
            
        }
    }else{
        $(".sidebar-menu li").removeClass("active");
        parent.addClass("active");
    }    

});