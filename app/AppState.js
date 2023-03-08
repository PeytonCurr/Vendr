import { Snack } from "./Models/Snacks.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Value').Value[]} */
  snacks = [
    new Snack({ name: `Doritos`, price: 1.50, imgUrl: 'https://www.caseys.com/medias/sys_master/images/h12/h27/8986511835166/2840016464_base-400x400/2840016464-base-400x400.png' }),
    new Snack({ name: `Chicharrones`, price: 4.00, imgUrl: 'https://www.missionfoods.com/wp-content/uploads/2022/06/Mission-Chicharrones-Picante-Flavor_zMJzg6J.png' })
  ]

  money = 0
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
