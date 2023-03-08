import { appState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawMoney() {
    setText(`money`, appState.money)
}

export class MoneyController {

    constructor() {
        // console.log(appState.money, `From the MoneyController`);
        appState.on(`money`, _drawMoney)
    }

    increaseMoney() {
        // console.log(`Increasing Money from the Money Controller`);
        moneyService.increaseMoney()
        console.log(appState.money);
    }
}