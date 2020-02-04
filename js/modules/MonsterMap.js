export class MonsterMap{
    
    constructor(json){
        this._array = new Array();

        for (var monsterId of Object.keys(json)){
            
        } 
    }

    add(monster){//monster = Monster object
        var name = monster.getName();
        this._array[name] = monster;
    }

    get(name){//name = String
        return this._array[name];
    }
}