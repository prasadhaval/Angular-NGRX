import { HomeReducer } from "../dashbord/home/store/home.reducer";
import { LoaderReducer } from "../dashbord/loader/store/loader.reducer";
import { LoginReducer } from "../login/store/login.reducer";
import { SignUpReducer } from "../registar/store/registar.reducer";

export const appState = {
    LOGIN : LoginReducer,
    SIGNUP : SignUpReducer,
    Loader : LoaderReducer,
    Home : HomeReducer
}