import {writable} from "svelte/store";
import {OrderState} from "$lib/models.js";

export const orderState = writable();
orderState.set(new OrderState);

export const updateStep = (stepID) => {
    orderState.update((state) => {
        state.currentStep = stepID;
        console.log("Step ID updated");
        return state;
    })
}