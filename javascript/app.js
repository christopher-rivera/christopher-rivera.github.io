$(document).ready(function() {

    var myArray = [
        '../images/joyeaux_card_1.png', 
        '../images/joyeaux_card_2.png',
        '../images/joyeaux_card_3.png', 
        '../images/joyeaux_card_4.png', 
        '../images/joyeaux_card_5.png', 
        '../images/joyeaux_card_6.png',
        '../images/joyeaux_card_7.png'
    ]    
    
    function changeImage() {
        event.preventDefault();
        var num = Math.floor(Math.random() * myArray.length);
        $('#decorated').attr('src', myArray[num]);
    }

    $('#submit').click(changeImage);
    
});