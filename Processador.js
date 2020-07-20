class Processador {
    static Processar(dados) {
        var dividir = dados.split("\r\n")
        var linhas = []
        dividir.forEach(linha => {
            var arr = linha.split(";")
            linhas.push(arr)
        })
        return linhas;
    }
}

module.exports = Processador