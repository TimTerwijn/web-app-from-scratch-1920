import {MonsterMap} from "./MonsterMap.js"

export class MyLocalStorage{

    _MONSTERS = "monsters";

    hasMonsters(){
        return false//this.getMonsters().length !== null;
    }

    get(){
        var json = localStorage.getItem(this._MONSTERS);
        var monsters = MonsterMap.fromJSON(json);
    
        return monsters;
    }

    add(monsters){
        var json = JSON.stringify(monsters);
        localStorage.setItem(this._MONSTERS, json);
    }
}