function $makemessage(){
    console.log('Let’s get ready to party with jQuery!')
}
$makemessage()

$('article img').addClass('image-center')

$('article p:last').remove()

$('#title').css('font-size' ,function(){
   return Math.random() * 100
})

$('ol').append('<li>Welcome jQuery</li>')


$('aside')
.empty().append($('<p>', {text:'Sorry about that'}))

$('form-control').on('input',function(){
    let red = $('form-control').eq(0).val();
    let blue = $('form-control').eq(1).val();
    let green = $('form-control').eq(2).val();
    $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')')

})
$('img').on('click',function(){
    $(this).remove()
})