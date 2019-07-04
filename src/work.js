window.onload = () => {
    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);

    const mode = getParam('id');
    switch (mode) {
        case '1':
            return require('./1/main').start(canvas);
        case '2':
            return require('./2/main').start(canvas);
    }

    function getParam(key) {
        return window.location.search
            .replace(/^\?/, '').split('&')
            .map(x => x.split('='))
            .find(x => x[0] == key)[1];
    }
}