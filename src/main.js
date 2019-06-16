window.onload = () => {
    // canvasの作成
    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);

    canvas.width = 500;
    canvas.height = 500;

    const gl = require('./context').getContext(canvas);
    require('./shader').initShaders(gl);
    require('./buffer').initBudders(gl);

    

}
