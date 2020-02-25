import {Routie} from "./Routie.js";

export class Router{
    constructor(render){
        this.render = render;
        
        routie({

            //default page, also loadscreen
            "":() => {
                this.render.loadingScreen();
            },
            //overview page
            overview:() => {
                this.render.overview();
            },
            //monster page
            details: () => {
                this.render.details();
            }
        });
    }
}



