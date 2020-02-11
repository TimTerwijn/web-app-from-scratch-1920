import {MonsterMap} from "./MonsterMap.js"

export class MyLocalStorage{

    static _MONSTERS = "monsters";

    //checks if localstorage has monsters
    hasMonsters(){//false because local storage is not working yet
        return false//this.getMonsters() !== undefined;
    }

    //get monsters from local storage
    get(){
        const json = localStorage.getItem(MyLocalStorage._MONSTERS);
        const monsters = MonsterMap.fromJSON(json);
    
        return monsters;
    }

    //add monsters to local storage
    add(monsters){
        const json = JSON.stringify(monsters);
        localStorage.setItem(MyLocalStorage._MONSTERS, json);
    }
}