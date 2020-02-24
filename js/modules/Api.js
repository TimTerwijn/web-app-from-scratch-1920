export class Api {

    //get monster json from api
    async get(){
        const apiUrl = "https://www.osrsbox.com/osrsbox-db/monsters-complete.json";

        //Inspired by Max
        try {
            const response = await fetch(apiUrl);
            //handle client error with fetch
            if (response.ok) {
                return response.json();
            }
            else {
                return Promise.reject(response);
            }
        }
        catch (err) {
            console.log("something went wrong. ", err);
        }
    }  
}