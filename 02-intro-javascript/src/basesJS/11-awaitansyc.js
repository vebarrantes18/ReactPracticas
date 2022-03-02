const getdata = async function()
{
const apikey="0SCGX0X2FtC7Ae25BivGI7fomAV4qw2M";
const peticion = await fetch('https://api.giphy.com/v1/gifs/random?api_key=' + apikey);
const data=await peticion.json();
console.log(data);
const {url}= data.data.images.original;
const img = document.createElement('img');
img.src=url;
document.body.append(img);

}



getdata();