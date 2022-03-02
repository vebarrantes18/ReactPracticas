
import {heroes} from '../data/heroes';


export const getHeroID = function(ID)
{
    return heroes.find((heroes) => {
        if(heroes.id==ID){
            return true;
        }
        else
        return false;
    });
}
//find
export const GetHeroOwner = (owner )=>
{
    return heroes.find((heroes)=> {
        if(heroes.owner==owner)
        return true;
        else
        return false;
    })
}
//fillter
export const GetHeroOwner2 = (owner )=>
{
    return heroes.filter((heroes) => {
        if(heroes.owner==owner)
        return true;
        else
        return false;
    })
}

console.log(getHeroID(3));
console.log('hola');
console.log(GetHeroOwner("DC"));
console.log(GetHeroOwner2("DC"));
console.log(GetHeroOwner2("Marvel"));

