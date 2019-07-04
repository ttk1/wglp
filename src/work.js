window.onload = () => {
    const id = getParam('id');
    if (!/^[1-9][0-9]*$/.test(id)) {
        const title = document.getElementById('title');
        title.innerHTML = 'not found';
        return;
    }

    const entry = require('./entries').find(
        entry => entry.id == id
    );
    if (!entry) {
        const title = document.getElementById('title');
        title.innerHTML = 'not found';
        return;
    }

    const title = document.getElementById('title');
    title.innerHTML = entry.title;
    const description = document.getElementById('description');
    description.innerHTML = entry.description;
    const source = document.getElementById('source');
    source.innerHTML = 'View on GitHub';
    source.href = entry.source;

    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);

    switch (id) {
        case '1':
            return require('./1/main').start(canvas);
        case '2':
            return require('./2/main').start(canvas);
        case '3':
            return require('./3/main').start(canvas);
    }

    function getParam(key) {
        return window.location.search
            .replace(/^\?/, '').split('&')
            .map(x => x.split('='))
            .find(x => x[0] == key)[1];
    }
}