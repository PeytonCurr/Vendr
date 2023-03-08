import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSnacks() {
    let template = ``
    appState.snacks.forEach(s => template += s.SnackTemplate)
    setHTML(`snacks`, template)
}

// function _drawBuyBtn(name) {
//     let 
//     let snack = appState.snacks.forEach(s => s.name == name)
//     if (appState.money >= snack.price) {
//         let snack = appState.snacks.find(s => s.name == name)
//         setHTML(`${name}-buyBtn`, snack.buyBtnTemplate)
//     }
// }

export class SnacksController {

    constructor() {
        console.log(appState.snacks, `From the Controller`);
        _drawSnacks()
        // _drawBuyBtn(`Doritos`)

        appState.on('money', _drawSnacks)
    }

}