exports.getMatrix = (m, n) => {
    return new Matrix(m, n);
}

class Matrix {
    constructor(m, n) {
        this.m = m;
        this.n = n;
        this.init();
    }

    set m(m){}
    set n(n){}
    set matrix(matrix){}
    get matrix(){
        return Array.from(this.matrix);
    }

    check(i, j) {
        if (i < 0 || i >= this.m || j < 0 || j >= this.n) {
            throw new Error('範囲外');
        }
    }

    init() {
        this.matrix = [];
        for(let i = 0; i < this.m; i++) {
            this.matrix[i] = [];
            for(let j = 0; j < this.n; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    setValue(i, j, value) {
        this.check(i, j);
        this.matrix[i + this.m * j] = value;
    }

    getValue(i, j) {
        this.check(i, j);
        return this.matrix[i + this.m * j];
    }

    mul(mat) {
        if (this.n != mat.m) {
            throw new Error('サイズの不一致');
        }

        const new_mat = new Matrix(this.m, mat.n);
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < mat.n; j++) {
                new_mat.setValue(i, j, f(i, j));
            }
        }

        return new_mat;

        function f(i, j) {
            let sum = 0;
            for (let k = 0; k < this.n; k++) {
                sum += this.getValue(i, k) * mat.getValue(k, j);
            }
            return sum;
        }
    }
}