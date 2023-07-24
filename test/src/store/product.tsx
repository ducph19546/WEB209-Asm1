import { legacy_createStore as createStore } from "redux";
import { productReducer } from "../reducer/product";

const store = createStore(productReducer);

export { store };
