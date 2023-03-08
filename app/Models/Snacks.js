import { appState } from "../AppState.js"



export class Snack {

    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get SnackTemplate() {
        return `
        <div class="col-3">
        <div class="text-center elevation-5 bg-grey p-2">
        <img
          src="${this.imgUrl}"
          height="150" alt="">
        <h3>${this.name}</h3>
        <h5>$<span>${this.price}</span></h5>
        <div>${this.buyBtnTemplate}</div>
        </div>
      </div>
      </div>
      `
    }

    get buyBtnTemplate() {
        if (appState.money >= this.price) {
            return `<button class="btn btn-success">BUY</button>`
        } else return `<p>You Don't have the money</p>`
    }

}