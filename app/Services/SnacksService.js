import { appState } from "../AppState.js";



class SnacksService {

    constructor() {
        console.log(`From the Service`);
    }
}

export const snacksService = new SnacksService()