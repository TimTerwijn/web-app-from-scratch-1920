export class Renderer{
    constructor(app){
        this.app = app;
        this.setComponents();
    }

    //set all components
    setComponents(){
        this.loadingScreen = document.getElementById("loading_screen");
        this.website = document.getElementById("website");
        this.submitButton = document.getElementById("submit");
        this.monsterName = document.getElementById("monster_name");


        const app = this.app;
        const monsterInput = this.monsterName;
        this.submitButton.onclick = function(){
            app.onSearchMonster(monsterInput.value);
        };
    }

    //first screen you see after opening the app
    renderLoadingScreen(){
        this.loadingScreen.innerHTML = "Loading, please wait...";
    }

    //after api has loaded show this screen
    renderApp(){
        this.loadingScreen.classList.toggle("hidden");
        this.website.classList.toggle("hidden");
    }

    //after api has errors
    renderError(){
        document.getElementById("screen").innerHTML = "api call error!";
    }
}