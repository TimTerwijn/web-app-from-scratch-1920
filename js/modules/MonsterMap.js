//Array of monsters searchable by name (Super Fast!)
export class MonsterMap{

    constructor(){
        this._array = {};
    }

    static fromAPI(json) { //constructor #1 from api data
        const monsterMap = new MonsterMap();

        for (const monsterId of Object.keys(json)){//todo: remove bs monsters
            
            const monsterJSON = json[monsterId];

            const monster = {
                name:           monsterJSON.name,
                health:         0,
                attackLevel:    monsterJSON.attack_level,
                strengthLevel:  monsterJSON.strength_level,
                defenceLevel:   monsterJSON.defence_level,
                magicLevel:     monsterJSON.magic_level,
                rangedLevel:    monsterJSON.ranged_level,
                attackBonus:    0,
                strenghtBonus:  0,
                magicBonus:     monsterJSON.attack_magic,
                magicStrenght:  0,
                rangedBonus:    monsterJSON.attack_ranged,
                rangedStrenght: 0,
                defenceStab:    monsterJSON.defence_stab,
                defenceSlash:   monsterJSON.defence_slash,
                defenceCrush:   monsterJSON.defence_crush,
                defenceMagic:   monsterJSON.defence_magic,
                defenceRanged:  monsterJSON.defence_ranged,
            } //new Monster(json[monsterId]);
            monsterMap.add(monster);
        }

        return monsterMap;
    }

    static fromLocalStorage(json){ //constructor #2 from local storage data
        const array = JSON.parse(json)
        
        const monsterMap = new MonsterMap();
        monsterMap._setAll(array);
        return monsterMap;
    }

    //add a monster
    add(monster){//monster = Monster object
        this._array[monster.name] = monster;
    }

    //get a monster
    get(name){//name = String
        return this._array[name];
    }

    //get all monsters
    getAll(){
        return this._array;
    }

    //set all monsters
    _setAll(array){
        this._array = array;
    }

    //make json from array data
    toJSON(){
        const json = JSON.stringify(this.getAll());
        return json;
    }    
}