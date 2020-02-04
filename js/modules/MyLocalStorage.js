import {MonsterMap} from "./MonsterMap.js"

export class MyLocalStorage{

    _MONSTERS = "monsters";

    hasData(){
        return false//this.getMonsters().length !== null;
    }

    getMonsters(){
        var json = localStorage.getItem(this._MONSTERS);
        var monsters = MonsterMap.fromJSON(json);
    
        return monsters;
    }

    saveMonsters(monsters){
        var json = JSON.stringify(monsters);
        localStorage.setItem(this._MONSTERS, json);
    }
}