import {heroes} from './data/heroes'
import {getHeroID} from './basesJS/08-Import-Export,Find-Fillter'




const promesa=new Promise((resolve,reject) =>
{
    setTimeout(() => {



        const heroe1 = getHeroID(prompt());
        resolve(heroe1);

        reject();

    }, 2000)

});

promesa.then( (heroe) => {
   console.log(heroe);
})

.catch( err => console.warn("No se encontro al heroe"));


//promesa en una funcion

const GetHerosByID = function(ID)
{
    return new Promise((resolve,reject) =>
{
    setTimeout(() => {



        const heroe1 = getHeroID(ID);
        if(heroe1)
        {
            resolve(heroe1);
            
        }
        else
        reject("No se encontro al heroe");

    }, 2000)

});
}


GetHerosByID(10)
.then(heroe => console.log(heroe))
.catch(err => console.warn(err) );