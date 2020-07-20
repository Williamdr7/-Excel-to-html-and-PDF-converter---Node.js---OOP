const fs = require("fs")
const util = require("util")
class Escritor {
    constructor() {
        this.escritor = util.promisify(fs.writeFile)
    }

    async Escrever(nome, dados) {
        try {
            return await this.escritor(nome, dados)
            return true
        } catch {
            return false
        }


    }
}

module.exports = Escritor