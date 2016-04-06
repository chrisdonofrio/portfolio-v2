$(document).ready(function() {
    var from,to,subject,text;
    $("#send_email").click(function() {      
        from = $("#from").val();
        subject = $("#subject").val();
        text = $("#content").val();
        $("#message").text("Sending E-mail... Please wait");
        $.get("http://localhost:3000/send", {from:from,to:to,subject:subject,text:text} , function(data) {
        if(data=="sent")
        {
            $("#message").empty().html("Email is been sent at "+to+" . Please check inbox !");
        }
        });
    });
});