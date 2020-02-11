import {Monster} from "../models/Monster.js"

//Array of monsters searchable by name (Super Fast!)
export class MonsterMap{
    
    constructor(json){
        this._array = new Array();

        for (const monsterId of Object.keys(json)){//todo: remove bs monsters
            const monster = new Monster(json[monsterId]);
            this.add(monster);
        } 
    }

    //add a monster
    add(monster){//monster = Monster object
        const name = monster.getName();
        this._array[name] = monster;
    }

    //get a monster
    get(name){//name = String
        return this._array[name];
    }

    //get all monsters
    getAll(){
        return this._array;
    }

    //todo: add 2 static constructors
    //1 for creation by api
    //1 for creation by localstorage

    static fromJSON(json) {
        const _json = JSON.parse(json);
        return Object.assign(new MonsterMap(), _json);
    }
}