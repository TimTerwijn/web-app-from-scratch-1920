export class Monster{
    constructor(   
        monsterJSON
    ){
        this._name = monsterJSON.name;
        this._attackLevel = monsterJSON.attack_level;
        this._strengthLevel = monsterJSON.strength_level;
        this._defenceLevel = monsterJSON.defence_level;
        this._magicLevel = monsterJSON.magic_level;
        this._rangedLevel = monsterJSON.ranged_level;
        this._attackStab = monsterJSON.attack_stab;
        this._attackSlash = monsterJSON.attack_slash;
        this._attackCrush = monsterJSON.attack_crush;
        this._attackMagic = monsterJSON.attack_magic;
        this._attackRanged = monsterJSON.attack_ranged;
        this._defenceStab = monsterJSON.defence_stab;
        this._defenceSlash = monsterJSON.defence_slash;
        this._defenceCrush = monsterJSON.defence_crush;
        this._defenceMagic = monsterJSON.defence_magic;
        this._defenceRanged = monsterJSON.defence_ranged;
    }

    printStats(){
        return {
            name:           this.getName(),
            health:         0,
            attackLevel:    this.getAttackLevel(),
            strengthLevel:  this.getStrengthLevel(),
            defenceLevel:   this.getDefenceLevel(),
            magicLevel:     this.getMagicLevel(),
            rangedLevel:    this.getRangedLevel(),
            attackBonus:    this._getAttackBonus(),
            strenghtBonus:  0,
            magicBonus:     this.getAttackMagic(),
            magicStrenght:  0,
            rangedBonus:    this.getAttackRanged(),
            rangedStrenght: 0,
            defenceStab:    this.getDefenceStab(),
            defenceSlash:   this.getDefenceSlash(),
            defenceCrush:   this.getDefenceCrush(),
            defenceMagic:   this.getDefenceMagic(),
            defenceRanged:  this.getDefenceRanged(),
        };
    }

    _getAttackBonus(){
        let attack = this.getAttackStab();
        const attackSlash = this.getAttackSlash();
        const attackCrush = this.getAttackCrush();

        if(attack < attackSlash){
            attack = attackSlash;
        }

        if(attack < attackCrush){
            attack = attackCrush;
        }

        return attack;        
    }

    setName(_name) { this._name = _name; }
    getName() { return this._name; } 
    setAttackLevel(_attackLevel,) { this._attackLevel = _attackLevel; } 
    getAttackLevel() { return this._attackLevel; } 
    setStrengthLevel(_strengthLevel,) { this._strengthLevel = _strengthLevel; } 
    getStrengthLevel() { return this._strengthLevel; } 
    setDefenceLevel(_defenceLevel,) { this._defenceLevel = _defenceLevel; } 
    getDefenceLevel() { return this._defenceLevel; } 
    setMagicLevel(_magicLevel,) { this._magicLevel = _magicLevel; } 
    getMagicLevel() { return this._magicLevel; } 
    setRangedLevel(_rangedLevel,) { this._rangedLevel = _rangedLevel; } 
    getRangedLevel() { return this._rangedLevel; } 
    setAttackStab(_attackStab,) { this._attackStab = _attackStab; } 
    getAttackStab() { return this._attackStab; } 
    setAttackSlash(_attackSlash,) { this._attackSlash = _attackSlash; } 
    getAttackSlash() { return this._attackSlash; } 
    setAttackCrush(_attackCrush,) { this._attackCrush = _attackCrush; } 
    getAttackCrush() { return this._attackCrush; } 
    setAttackMagic(_attackMagic,) { this._attackMagic = _attackMagic; } 
    getAttackMagic() { return this._attackMagic; } 
    setAttackRanged(_attackRanged,) { this._attackRanged = _attackRanged; } 
    getAttackRanged() { return this._attackRanged; } 
    setDefenceStab(_defenceStab,) { this._defenceStab = _defenceStab; } 
    getDefenceStab() { return this._defenceStab; } 
    setDefenceSlash(_defenceSlash,) { this._defenceSlash = _defenceSlash; } 
    getDefenceSlash() { return this._defenceSlash; } 
    setDefenceCrush(_defenceCrush,) { this._defenceCrush = _defenceCrush; } 
    getDefenceCrush() { return this._defenceCrush; } 
    setDefenceMagic(_defenceMagic,) { this._defenceMagic = _defenceMagic; } 
    getDefenceMagic() { return this._defenceMagic; } 
    setDefenceRanged(_defenceRanged) { this._defenceRanged = _defenceRanged}
    getDefenceRanged() { return this._defenceRanged}
}