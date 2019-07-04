window.onload = () => {
    const ul = document.getElementById('index');
    const entries = require('./entries.json');
    entries.forEach(
        entry => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = './work.html?id=' + entry.id;
            a.innerHTML = entry.title;
            li.appendChild(a);
            ul.appendChild(li);
        }
    );
}