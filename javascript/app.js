$(document).ready(function() {

    var myArray = [
        'https://christopher-rivera.github.io/images/joyeaux_card_1.png', 
        'https://christopher-rivera.github.io/images/joyeaux_card_2.png',
        'https://christopher-rivera.github.io/images/joyeaux_card_3.png', 
        'https://christopher-rivera.github.io/images/joyeaux_card_4.png', 
        'https://christopher-rivera.github.io/images/joyeaux_card_5.png', 
        'https://christopher-rivera.github.io/images/joyeaux_card_6.png',
        'https://christopher-rivera.github.io/images/joyeaux_card_7.png'
    ]    
    
    function changeImage() {
        event.preventDefault();
        var num = Math.floor(Math.random() * myArray.length);
        $('#decorated').attr('src', myArray[num]);
    }

    $('#submit').click(changeImage);
    
});