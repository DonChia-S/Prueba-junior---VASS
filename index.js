/* navbar scroll*/ 
$(window).scroll(function() {
    if ($("#menu").offset().top > 56){
        $("#menu").addClass("bg-color");
    } else {
        $("#menu").removeClass("bg-color");
    }
})

/*paises clic*/
var point = 2;
$(document).ready(function(){
    $("#paisesDrop").click(function(event){
        // $("#opcion-pais").toggle("slow", ()=>{});
        if(point % 2 == 0){
            $(".nav-paises").removeClass("paises-inactive");
            $(".nav-paises").addClass("paises-active");
         }else {
            $(".nav-paises").addClass("paises-inactive");
            $(".nav-paises").removeClass("paises-active");
         }
         point++;
    });

/*formulario*/
    function textField (id){
        $(id).keydown(function(){
            console.log($(this).val().length)
            var i = $(this).val().length
            if(i > 1){
                 $(this).removeClass("is-invalid");
             }else{
                 $(this).addClass("is-invalid")
             }
        });
    }
    textField("#nombre_txt")
    textField("#email")
    textField("#empresa_txt")
    textField("#validationTextarea")



    /*evento submit del formulario*/
    $( "#form-contact" ).submit(function( event ) {
        if($("#nombre_txt").val() == "" && $("#email").val() == "" && $("#empresa_txt").val() == "" && $("#validationTextarea").val() == ""){
            $("#nombre_txt").addClass("is-invalid")
            $("#email").addClass("is-invalid")
            $("#empresa_txt").addClass("is-invalid")
            $("#validationTextarea").addClass("is-invalid")
        }else{
            alert('su solicitud a sido enviado')
            window.location.reload();
        }
        event.preventDefault();
    }); 
    
    $(".menuicon").addClass("navbar-toggler-icon")

    $('#navbarNav').on('hidden.bs.collapse', function () {
        // $(".navbar-toggler-icon").css("display","block")
        // $(".fa-times").css("display","none")
        $(".menuicon").removeClass("fas fa-times")
        $(".menuicon").addClass("navbar-toggler-icon")
    })

    $('#navbarNav').on('shown.bs.collapse', function () {
        // $(".navbar-toggler-icon").css("display","none")
        // $(".fa-times").css("display","block")
        $(".menuicon").removeClass("navbar-toggler-icon")
        $(".menuicon").addClass("fas fa-times")
    })

});
