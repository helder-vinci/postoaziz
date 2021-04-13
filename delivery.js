$(document).ready(function(){
    $(".openbg2").addClass("active");
   
    $("article a").click(function(){
        let $input = $(this).parent().find('input');
        let $nome = $("#name");
        let $endereco = $("#endereco");
        let $loja = $("#loja");
        let $bebidas = $(this).parent().parent().find('#bebidas');
        if($bebidas.val()=="" || $bebidas.val()== null){
            this.href += $input.val() + "%0AMeu%20nome%20é:"+ $nome.val() + "%0AMeu%20endereço%20é:" +$endereco.val() + "%0A*Produto nao inclui bebida ou nao foi selecionada*" + "%0ALoja:" + $loja.val();
        }else{
            this.href += $input.val() + "%0AMeu%20nome%20é:"+ $nome.val() + "%0AMeu%20endereço%20é:" +$endereco.val() + "%0ABebida:" + $bebidas.val() + "%0ALoja:" + $loja.val();
        }
    });
    $("article").click(function(){
        $(this).addClass("active");
        $(".openbg").addClass("active");
        $("fechar").addClass("active");
    });
    $(".openbg").click(function(){
        $("article").removeClass("active");
        $(".openbg").removeClass("active");
        $("fechar").removeClass("active");
       
    });
 
  
    $('.minus').click(function () {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        console.log( $input.val());
        return false;
    });
    $('.plus').click(function () {
        let $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        console.log( $input.val());
        return false;
    });
    $('#salvar').click(function () {
        if( $("#name").val()=="" || $("#endereco").val() == "" || $("#loja").val()== null){
            var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }else{
            $('.formulario').fadeToggle();
            $(".openbg2").removeClass("active");
        }
       
    console.log($("#name").val());
    console.log($("#endereco").val());


    });
    $('article[data-produto-type="brasileira"]').appendTo( ".brasileira");
    $('article[data-estoque-type=""]').addClass("esgotado");
    $('header ul li:nth-child(1)').click(function(){
        $('section.japones').addClass("active");
        console.log("foi 1");
        if($('section.brasileira.active').length ==1){
            
            $('section.brasileira').removeClass("active");
        }
    });
    $('header ul li:nth-child(2)').click(function(){
        console.log("foi 2")
        $('section.brasileira').addClass("active");
        if($('section.japones.active').length ==1){
           
            $('section.japones').removeClass("active");
        }
    });
    $('.dev').click(function(){
       
        $('.dev').toggleClass("active");
    });
    
});
