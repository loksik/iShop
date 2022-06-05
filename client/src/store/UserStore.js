import {makeAutoObservable} from "mobx";


export default class UserStore {
    constructor() {
        this._isAuthSeller = false
        this._isAuthBuyer = false
        this._user = {}
        makeAutoObservable(this)
    }
    setIsAuthSeller(bool) {
        this._isAuthSeller = bool
    }
    setIsAuthBuyer(bool) {
        this._isAuthBuyer = bool
    }
    setUser(user) {
        this._user = user
    }
    get isAuthSeller() {
        return this._isAuthSeller
    }
    get isAuthBuyer() {
        return this._isAuthBuyer
    }
    get user() {
        return this._user
    }
}