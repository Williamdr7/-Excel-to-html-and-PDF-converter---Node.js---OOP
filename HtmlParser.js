const ejs = require("ejs")
class HtmlParser {
    static async Parse(tabela) {
        return await ejs.renderFile("./tabela.ejs", { header: tabela.header, rows: tabela.rows, row: tabela.row })
    }
}
module.exports = HtmlParser