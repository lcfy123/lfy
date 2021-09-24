var picId = location.search;
picId = picId.split('?')[1];
var num1=Number(picId.split('-')[0]);
if(num1>=25){
    num1=25;
}
var choice=['榨汁机','键盘','卫衣','毛衣','外套','三星','奢侈品','马丁靴','苹果手表','DIY台式整机','棒球帽','贴布连帽套头卫衣','康比特森马针织衫','飞利浦电饭锅','转椅轮子万向轮','小米电视','家庭影院音响','小米空气净化器','小米8SE','小熊咖啡机','多功能早餐机','华为Mate 30','短袖T恤','海澜之家','长袖T恤'];
$('.change-f').text(choice[num1-1]).append('<em>');
$('.changef-f li').text(choice[num1-1]);
$('<span>').text(dataf1[num1-1].title).appendTo($('.nav-f'));
$('.fangl-f').find('img').each(function(index,value){
    $(value).attr('src','../images/'+picId);
})
$('.changef-f li').hover(function(){
    $(this).css('color','#f42424');
},function(){
    $(this).css('color','#555')
})
$('.change-f').hover(function(){
    if($('.change-f').get().indexOf($(this)[0])==2){
        $(this).css('border-color','#f42424')
    }else{
        $(this).css({
            'z-index':'12',
            'border-color':'#f42424',
            'border-bottom-color':'#fff'
        })
        $(this).next().css({
            'display':'block',
            'border-color':'#f42424'
        })
    }
},function(){
    if($('.change-f').get().indexOf($(this)[0])==2){
        $(this).css('border-color','#d2d2d2')
    }else{
        $(this).css({
            'z-index':'9',
            'border-color':'#d2d2d2'
        })
        $(this).next().css({
            'display':'none',
            'border-color':'#d2d2d2'
        })
    }
})
$('.changef-f ul').hover(function(){
    $(this).css({
        'display':'block',
        'border-color':'#f42424'
    })
    $(this).prev().css({
        'z-index':'12',
        'border-color':'#f42424',
        'border-bottom-color':'#fff'
    })
},function(){
    $(this).css('display','none')
    $(this).prev().css({
        'z-index':'9',
        'border-color':'#d2d2d2'
    })
})
// 放大镜
$('.min-f').hover(function(){
    $('.mask-f').css('display','block')
    $('.max-f').css('display','block')
},function(){
    $('.mask-f').css('display','none')
    $('.max-f').css('display','none')
})
$('.min-f').mousemove(function(e){
    // 求出光标在盒子内的坐标---小盒子不是紧挨着body的
    var minX = e.pageX - $('.min-f').offset().left;
    var minY = e.pageY - $('.min-f').offset().top;
    // 光标在蒙版的中间
    minX = minX - $('.mask-f').outerWidth() / 2;
    minY = minY - $('.mask-f').outerHeight() / 2;
    // // 求出蒙版移动的最大距离
    var maskMaxdisX = $('.min-f').outerWidth() - $('.mask-f').outerWidth();
    var maskMaxdisY = $('.min-f').outerHeight() - $('.mask-f').outerHeight();
    // // 判断蒙版移动的最大距离
    if (minX > maskMaxdisX) {
        minX = maskMaxdisX;
    } else if (minX < 0) {
        minX = 0;
    };
    if (minY > maskMaxdisY) {
        minY = maskMaxdisY;
    } else if (minY < 0) {
        minY = 0;
    };
    // // 设定蒙版的位置
    $('.mask-f').offset({left:$('.min-f').offset().left+minX,top:$('.min-f').offset().top+minY})
    // // 3.蒙版移动,大盒子里的图片也移动
    // // 求比例关系
    var ratioX = minX / maskMaxdisX;
    var ratioY = minY / maskMaxdisY;
    // // 大图片移动的距离
    $('.maxImg-f').offset({left:$('.max-f').offset().left-(ratioX * ($('.maxImg-f').outerWidth() - $('.max-f').outerWidth())),top:$('.max-f').offset().top-(ratioY * ($('.maxImg-f').outerHeight() - $('.max-f').outerHeight()))})
})
for(var i=0;i<num1%5;i++){
    $('.myUL').append('<li>');
}
$('<img>').attr('src','../images/'+picId).appendTo('.minerc-f li');
$('.minerc-f li').mouseover(function(){
    $(this).find('img').css('position','static');
    $(this).addClass('boder').siblings().remove('boder')
})
$('.title-f').text(dataf1[num1-1].title)
$('.shop-price-f').text(dataf1[num1-1].pricelow)
$('.priceago-f').text(dataf1[num1-1].price);
