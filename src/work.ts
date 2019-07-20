window.onload = () => {
    const id = getParam('id');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const source = document.getElementById('source') as HTMLAnchorElement;

    if (!/^[1-9][0-9]*$/.test(id)) {
        title.innerHTML = 'not found';
        return;
    }

    const entry: Entry = require('./entries').find(
        (e: Entry) => e.id === Number(id)
    );

    if (!entry) {
        title.innerHTML = 'not found';
        return;
    }

    title.innerHTML = entry.title;
    description.innerHTML = entry.description;
    source.innerHTML = 'View on GitHub';
    source.href = entry.source;

    const container = document.getElementById('container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    return require('./' + id + '/main').start(canvas);

    function getParam(key: string) {
        return window.location.search
            .replace(/^\?/, '').split('&')
            .map((x) => x.split('='))
            .find((x) => x[0] === key)[1];
    }
};
