export class Renderer{
    constructor(app){
        this.app = app;
        this.setComponents();
    }

    //set all components
    setComponents(){
        this.loadingScreen = document.getElementById("loading_screen");
        this.overview = document.getElementById("overview");

        this.submitButton = document.getElementById("submit");
        this.monsterName = document.getElementById("monster_name");
        this.result = document.getElementById("result");

        const app = this.app;
        const monsterInput = this.monsterName;
        this.submitButton.onclick = function(){
            app.onSearchMonster(monsterInput.value);
        };

        this.monsterName.onkeyup = function(){
            app.onSearchMonster(monsterInput.value);
        };
    }

    //first screen you see after opening the app
    renderLoadingScreen(){//todo: better loading screen
        this.insertText(this.loadingScreen, "Loading, please wait...");
    }

    //after api has loaded show this screen
    renderApp(){
        this.toggleVisibility(this.loadingScreen);
        this.toggleVisibility(this.overview);
    }

    renderResult(monster){
        let string = "No monster found, please try again";
        if(monster !== undefined){
            string = monster.getName();
        }
        this.insertText(this.result, string);
    }

    toggleVisibility(element){
        element.classList.toggle("hidden");
    }

    insertText(element, string){
        element.innerHTML = string;
    }
}