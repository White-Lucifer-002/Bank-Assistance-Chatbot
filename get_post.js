//$(document).ready(function(){
    function on_submit(){
        $value = $("#data").val();
        $text = $('#data').val();
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
        $(".form").append($msg);
        $("#data").val('');

        $.ajax({
            url: 'http://20.120.121.194:3000/',
            type: 'POST',
            data: {
                name: $value
            },
            success: function (text) { 
                $resp = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>'+text.response+'</p></div></div>';
                $(".form").append($resp);
                console.log(text.response);
            },
            error: function (response) {
                console.log(response);
            }
        });
        $(".form").stop().animate({ scrollTop: $(".form")[0].scrollHeight}, 1000);
        
    };
//)};