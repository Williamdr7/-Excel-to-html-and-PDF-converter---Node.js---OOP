const Leitor = require("./Leitor")
const Processador = require("./Processador")
const Tabela = require("./Tabela");
const HtmlParser = require("./HtmlParser")
const Escritor = require("./Escritor");
const PdfMaker = require("./PdfMaker")

var escritor = new Escritor()

var leitor = new Leitor();

async function main() {
    var dados = await leitor.Read("./JS.csv")
    var dadosProcessados = Processador.Processar(dados)

    var usuarios = new Tabela(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    escritor.Escrever(Date.now() + "Tabela.html", html)

    PdfMaker.WritePdf(Date.now() + "Tabela.pdf", html)
}
main()