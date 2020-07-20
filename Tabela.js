class Tabela {
    constructor(arr) {
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    get ContLinha() {
        return this.rows.lenght;
    }
    get ContColuna() {
        return this.header.lenght;
    }
}

module.exports = Tabela