import {makeAutoObservable } from "mobx";
import { getData } from "../api/api";

//mobx create store
class createSampleStore{
    //observable data, null as data default value (can be any)
    data = null;

    //observable function
    loadData(){
        //getData is a fetch data helper see /components/api/api.js
        getData().then(data => this.data = data)
    }

    //mobx makeAutoObservable use
    constructor(){
        makeAutoObservable(this)
    }
}
//declare a new store
const SampleStore = new createSampleStore()

export default SampleStore