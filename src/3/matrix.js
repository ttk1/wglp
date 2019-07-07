exports.getMatrix = (m, n) => {
    return new Matrix(m, n);
}

class Matrix {
    constructor(m, n) {
        this.m = m;
        this.n = n;
        this.init();
    }

    getArray() {
        const arr = [];
        for(let i = 0; i < this.m; i++) {
            for(let j = 0; j < this.n; j++) {
                arr[i + this.m * j] = this.matrix[i][j];
            }
        }
        return arr;
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
        this.matrix[i][j] = value;
    }

    getValue(i, j) {
        this.check(i, j);
        return this.matrix[i][j];
    }

    mul(mat) {
        if (this.n != mat.m) {
            throw new Error('サイズの不一致');
        }

        const new_mat = new Matrix(this.m, mat.n);
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < mat.n; j++) {
                new_mat.setValue(i, j, f(i, j, this, mat));
            }
        }

        return new_mat;

        function f(i, j, mat1, mat2) {
            let sum = 0;
            for (let k = 0; k < mat1.n; k++) {
                sum += mat1.getValue(i, k) * mat2.getValue(k, j);
            }
            return sum;
        }
    }
}