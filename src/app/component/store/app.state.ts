import { LoaderReducer } from "../dashbord/loader/store/loader.reducer";
import { LoginReducer } from "../login/store/login.reducer";
import { SignUpReducer } from "../registar/store/registar.reducer";

export const appState = {
    LOGIN : LoginReducer,
    SIGNUP : SignUpReducer,
    Loader : LoaderReducer

}