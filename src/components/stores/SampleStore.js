import {makeAutoObservable } from "mobx";
import { getData } from "../api/api";

class createSampleStore{
    data = null;

    loadData(){
        getData().then(data => this.data = data)
    }
    
    constructor(){
        makeAutoObservable(this)
    }
}

const SampleStore = new createSampleStore()

export default SampleStore