import {MonsterMap} from "./MonsterMap.js"

export class MyLocalStorage{

    static _MONSTERS = "monsters";

    //checks if localstorage has monsters
    hasMonsters(){//false because local storage is not working yet
        const json = localStorage.getItem(this._MONSTERS);
        return json !== undefined && json !== null;
    }

    //get monsters from local storage
    get(){
        const json = localStorage.getItem(this._MONSTERS);
        const monsters = MonsterMap.fromLocalStorage(json);
    
        return monsters;
    }

    //add monsters to local storage
    add(json){
        localStorage.setItem(this._MONSTERS, json);
    }
}