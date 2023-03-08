import { appState } from "../AppState.js"



class MoneyService {

    constructor() {

    }

    increaseMoney() {
        // console.log(`Increasing Money from the MoneyService`);
        appState.money += .25
    }
}

export const moneyService = new MoneyService()