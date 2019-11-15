$(function(){
    var player='<div id="player1"></div>';
    $("#map").append(player);

    $(document).keydown(function(e) {

       // alert(e.keyCode);
        var position=$("#player1").position();
        
        //alert(position.top);
        switch(e.keyCode)
        {
            case 37:    //left
            $('#player1').css('left',position.left -20 + 'px');
            break;

            case 38:    //up
            $('#player1').css('top',position.top -20 + 'px');
            break;

            case 39:    //right
            $('#player1').css('left',position.left +20 + 'px');
            break;

            case 40:    //down
            $('#player1').css('top',position.top +20 + 'px');
            break;
        }
    });
    
});

$(function(){
    var player='<div id="player2"></div>';
    $("#map").append(player);

    $(document).keydown(function(f) {

        //alert(e.keyCode);
        var position=$("#player2").position();
        
        //alert(position.top);
        switch(f.keyCode)
        {
            case 65:    //left
            $('#player2').css('left',position.left -20 + 'px');
            break;

            case 87:    //up
            $('#player2').css('top',position.top -20 + 'px');
            break;

            case 68:    //right
            $('#player2').css('left',position.left +20 + 'px');
            break;

            case 83:    //down
            $('#player2').css('top',position.top +20 + 'px');
            break;
        }
    });
    
});


