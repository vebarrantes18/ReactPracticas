import {heroes} from './data/heroes'
import {getHeroID} from './data/heroes'


const promesa=new Promise((resolve,reject) =>
{
    setTimeout(() => {
        
    }, 2000)

});

promesa.then( () => {
 alert("Hola mundo");
})
