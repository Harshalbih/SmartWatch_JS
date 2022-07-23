function imageupdate(harsh){
    document.querySelector('.image').src = harsh;
}

$(document).ready(function() {
  
    $('.main-two').css('width', $('img').width());

    $('img')
        .parent()
        .zoom({
            magnify: 2,
            target: $('.zoomeImg').get(0)
        });
});