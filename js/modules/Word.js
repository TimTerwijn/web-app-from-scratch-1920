export class Word{

    //inspired by https://joshtronic.com/2016/02/14/how-to-capitalize-the-first-letter-in-a-string-in-javascript/
    //capatalize first letter of a string
    static cap(string){
        return string.charAt(0).toUpperCase() + string.substring(1);
    }
}