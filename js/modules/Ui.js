import { Render } from "./Render.js";

export class Ui{
    constructor(app){
        this.setComponents();
        this.setEvents(app);
        
        this.render = new Render(this);
    }

    //set all components
    setComponents(){
        this.loadingScreen = document.getElementById("loading_screen");
        this.overview = document.getElementById("overview");
        this.detailPage = document.getElementById("detail_page");

        this.monsterInput = document.getElementById("monster_input");
        this.submitButton = document.getElementById("submit");
        this.result = document.getElementById("result");

        this.monsterGrid = document.getElementById("monster_grid");
        this.gridCombatStats = document.getElementById("grid_combat_stats");
        this.gridAggressiveStats = document.getElementById("grid_aggressive_stats");
        this.gridDefensiveStats = document.getElementById("grid_defensive_stats");
    }

    setEvents(app){
        const ui = this;
        this.submitButton.onclick = function(){
            const monsterName = ui.getMonsterName();
            app.onMonsterSearch(monsterName);
        };

        this.monsterInput.onkeyup = function(){
            const monsterName = ui.getMonsterName();
            app.onMonsterSearch(monsterName);
        };

        this.result.onclick = function(){
            const monsterName = ui.getMonsterName();
            app.onMonsterClick(monsterName);
        };
    }

    getMonsterName(){
        return this.monsterInput.value;
    }
}