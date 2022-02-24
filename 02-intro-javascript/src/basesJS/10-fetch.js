const apikey="0SCGX0X2FtC7Ae25BivGI7fomAV4qw2M";
const endpoint="https://api.giphy.com/v1/gifs/random?api_key=0SCGX0X2FtC7Ae25BivGI7fomAV4qw2M";

const peticion = fetch('https://api.giphy.com/v1/gifs/random?api_key=' + apikey);

peticion
.then(respuesa => respuesa.json())
.then (data => {
    const {url}= data.data.images.original;
    const img = document.createElement('img');
    img.src=url;

    document.body.append(img);
    
})
.catch(console.warn);
