export class Renderer{
    constructor(app){
        this.app = app;
        this.setComponents();
    }

    renderLoadingScreen(){
        this.loadingScreen.innerHTML = "Loading, please wait...";
    }

    renderApp(){
        this.loadingScreen.classList.toggle("hidden");
        this.website.classList.toggle("hidden");
    }

    renderError(){
        document.getElementById("screen").innerHTML = "api call error!";
    }

    showMonsters(monsters){
        document.getElementById("screen").innerHTML = monsters.get("Typhor").getName();//show 9296th item to show speed
    }

    setComponents(){
        this.loadingScreen = document.getElementById("loading_screen");
        this.website = document.getElementById("website");
        this.submitButton = document.getElementById("submit");
        this.monsterName = document.getElementById("monster_name");


        const app = this.app;
        const monsterInput = this.monsterName;
        this.submitButton.onclick = function(){
            app.searchMonster(monsterInput.value);
        };
    }
}