const fs = require("fs")
const util = require("util")
class Leitor {

    constructor() {
        this.reader = util.promisify(fs.readFile)
    }
    async Read(arquivo) {
        try {
            return this.reader(arquivo, "utf-8")
        } catch (erro) {
            return undefined
        }

    }
}

module.exports = Leitor