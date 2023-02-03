function onSearch() {
    const key = 'a9jWZWAGcI4zxh3ItQmIGN9h9nhkjMTl';
    const query = document.getElementById('gif__search').value;
    //const gif__pic = document.querySelector('#gif__pic');

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=5&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(gif => {
        // for(g of gif.data) {
        //     console.log(g);
        // }
        // console.log(gif.data);
        //console.log(gif.data.length);

        for(let i = 0; i < gif.data.length; i++) {
            //gif__pic.src = gif.data[i].images['480w_still'].url;
            const div = document.createElement('div');
            div.innerHTML = `<img src='${gif.data[i].images.fixed_height.url}' />`;
            document.body.append(div);
        }
    })
    .catch(error => console.log(error));
}