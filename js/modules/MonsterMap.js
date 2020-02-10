import {Monster} from "../models/Monster.js"

//Array of monsters searchable by name (Super Fast!)
export class MonsterMap{
    
    constructor(json){
        this._array = new Array();

        for (var monsterId of Object.keys(json)){//todo: remove bs monsters
            var monster = new Monster(json[monsterId]);
            this.add(monster);
        } 
    }

    add(monster){//monster = Monster object
        var name = monster.getName();
        this._array[name] = monster;
    }

    get(name){//name = String
        return this._array[name];
    }

    getAll(){
        return this._array;
    }

    static fromJSON(json) {
        var _json = JSON.parse(json);
        return Object.assign(new MonsterMap(), _json);
    }
}