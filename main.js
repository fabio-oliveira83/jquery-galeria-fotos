$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style= "display : none"></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class=overlay-imagem-link>
                <a href="${enderecoNovaImagem}" title="Ver imagem tamanho Real" target="_blank">
                    Ver imagem tamanho Real
                </a>
            <div/>        
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#endereco-imagem-nova').val('')

        })
})  