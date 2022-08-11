function imageupdate(harsh){
    document.querySelector('.image').src = harsh;
}

$(document).ready(function() {
  
    $('.main-two').css('width', $('img').width());

    $('img')
        .parent()
        .zoom({
            magnify: 4,
            target: $('.zoomeImg').get(0)
        });
});
