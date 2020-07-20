const pdf = require("html-pdf")
class PdfMaker {

    static WritePdf(arquivo, html) {
        pdf.create(html, {}).toFile(arquivo, (erro) => {})
    }
}

module.exports = PdfMaker;