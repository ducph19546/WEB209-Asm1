import { produce } from "immer";
import { instance } from "../AxiosInstance";

export const productReducer = (state = { products: [] as any[] }, action: { type: string, payload: any }) => {
    return produce(state, function (draftState) {
        switch (action.type) {
            case "products/fetch":
                draftState.products = action.payload
                break;
            case "products/add":
                draftState.products.push(action.payload)
                break;
            case "products/delete":
                draftState.products =
                    draftState.products.filter(p => p.id != action.payload.id)
                break;
            case "products/update":
                draftState.products = draftState.products.map(p => p.id == action.payload.id ? action.payload : p)
                break;
            default:
                return state
        }
    })
}