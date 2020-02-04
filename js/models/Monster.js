export class Monster{
    constructor(   
        name, 
        attackLevel, 
        strengthLevel, 
        defenceLevel,
        magicLevel, 
        rangedLevel, 
        attackStab, 
        attackSlash, 
        attackCrush, 
        attackMagic, 
        attackRanged, 
        defenceStab,
        defenceSlash,
        defenceCrush,
        defenceMagic,
        defenceRanged
    ){
        this._name = name;
        this._attackLevel = attackLevel;
        this._strengthLevel = strengthLevel;
        this._defenceLevel = defenceLevel;
        this._magicLevel = magicLevel;
        this._rangedLevel = rangedLevel;
        this._attackStab = attackStab;
        this._attackSlash = attackSlash;
        this._attackCrush = attackCrush;
        this._attackMagic = attackMagic;
        this._attackRanged = attackRanged;
        this._defenceStab = defenceStab;
        this._defenceSlash = defenceSlash;
        this._defenceCrush = defenceCrush;
        this._defenceMagic = defenceMagic;
        this._defenceRanged = defenceRanged;
    }

    set_name(_name) { this._name = _name; }
    get_name() { return this._name; } 
    set_attackLevel(_attackLevel,) { this._attackLevel = _attackLevel; } 
    get_attackLevel() { return this._attackLevel; } 
    set_strengthLevel(_strengthLevel,) { this._strengthLevel = _strengthLevel; } 
    get_strengthLevel() { return this._strengthLevel; } 
    set_defenceLevel(_defenceLevel,) { this._defenceLevel = _defenceLevel; } 
    get_defenceLevel() { return this._defenceLevel; } 
    set_magicLevel(_magicLevel,) { this._magicLevel = _magicLevel; } 
    get_magicLevel() { return this._magicLevel; } 
    set_rangedLevel(_rangedLevel,) { this._rangedLevel = _rangedLevel; } 
    get_rangedLevel() { return this._rangedLevel; } 
    set_attackStab(_attackStab,) { this._attackStab = _attackStab; } 
    get_attackStab() { return this._attackStab; } 
    set_attackSlash(_attackSlash,) { this._attackSlash = _attackSlash; } 
    get_attackSlash() { return this._attackSlash; } 
    set_attackCrush(_attackCrush,) { this._attackCrush = _attackCrush; } 
    get_attackCrush() { return this._attackCrush; } 
    set_attackMagic(_attackMagic,) { this._attackMagic = _attackMagic; } 
    get_attackMagic() { return this._attackMagic; } 
    set_attackRanged(_attackRanged,) { this._attackRanged = _attackRanged; } 
    get_attackRanged() { return this._attackRanged; } 
    set_defenceStab(_defenceStab,) { this._defenceStab = _defenceStab; } 
    get_defenceStab() { return this._defenceStab; } 
    set_defenceSlash(_defenceSlash,) { this._defenceSlash = _defenceSlash; } 
    get_defenceSlash() { return this._defenceSlash; } 
    set_defenceCrush(_defenceCrush,) { this._defenceCrush = _defenceCrush; } 
    get_defenceCrush() { return this._defenceCrush; } 
    set_defenceMagic(_defenceMagic,) { this._defenceMagic = _defenceMagic; } 
    get_defenceMagic() { return this._defenceMagic; } 
    set_defenceRanged(_defenceRanged) { this._defenceRanged = _defenceRanged}
    get_defenceRanged() { return this._defenceRanged}
}