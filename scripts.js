$(function() {
    $('#vermelho').click(function() {
        $('p').css("background-color", "red");
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn(2000);
        $('#aviso').text("Cor alterada com sucesso").css('border', '2px solid').fadeOut(3000).addClass('notuno');
    });
    $('#azul').click(function() {
        $('p').css("background-color", "blue");
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn(2000);
        $('#aviso').text("Cor alterada com sucesso").css('border', '2px solid').fadeOut(3000).removeClass('notuno');
    });
    $('#link1').click(function() {
        $('#i1').hide();
        $('#i2').show();
    })
    $('#link2').click(function() {
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
    })
});