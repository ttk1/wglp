window.onload = () => {
    const ul = document.getElementById('index') as HTMLUListElement;
    const entries: Entry[] = require('./entries.json');
    entries.forEach(
        (entry: Entry) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = './work.html?id=' + entry.id;
            a.innerHTML = entry.title;
            li.appendChild(a);
            ul.appendChild(li);
        }
    );
};

interface Entry {
    id: number;
    title: string;
    description: string;
    source: string;
}
