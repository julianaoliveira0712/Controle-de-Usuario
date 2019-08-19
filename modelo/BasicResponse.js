class BasicResponse{
    constructor(sucesso, corpo, mensagem){
        this.sucesso =sucesso;
        this.corpo =corpo;
        this.mensagem = mensagem;
    }
}

module.exports = BasicResponse;