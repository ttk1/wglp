window.onload = () => {
    fetch('./index.json').then(
        response => response.json()
    ).then(
        index => {
            index.forEach(
                entry => console.log(entry)
            );
        }
    );
}