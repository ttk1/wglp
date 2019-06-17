exports.myclass = class myclass {
    constructor() {

    }

    hoge() {
        console.log('hoge');
    }
}

exports.mat4 = class mat4 {
    constructor() {
        this.mat = [];
        for (let i = 0; i < 4; i++) {
            this.mat[i] = [];
            for (let j = 0; j < 4; j++) {
                this.mat[i][j] = 0;
            }
        }
    }

    flat() {
        const arr = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                arr.push(this.mat[i][j]);
            }
        }
        return arr;
    }
}