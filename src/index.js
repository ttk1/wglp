window.onload = () => {
    const ul = document.getElementById('index');
    fetch('./index.json').then(
        response => response.json()
    ).then(
        index => {
            index.forEach(
                entry => appendEntry(entry)
            );
        }
    );
    function appendEntry(entry) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = './work.html?id=' + entry.id;
        a.innerHTML = entry.title;
        li.appendChild(a);
        ul.appendChild(li);
    }
}