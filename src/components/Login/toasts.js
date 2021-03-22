// Temporary - move this eventually
import { toast } from 'react-toastify';

export const LOGIN_ERRORS = {
    "auth/too-many-requests": "Du har försökt för många gånger",
    "auth/wrong-password": "Felaktigt användarnamn/lösenord",
    "auth/user-not-found": "Felaktigt användarnamn/lösenord",
    "auth/invalid-email": "Ogiltig mailadress",
    "default": "Något gick fel när du skulle loggas in",
}

// Make this generic for all toasts eventually
export const toastLoginError = (errorCode) => {
    toast.error(LOGIN_ERRORS[errorCode] ? LOGIN_ERRORS[errorCode] : LOGIN_ERRORS["default"]);
}

export const toastLoginSucces = (msg) => {
    toast.success(msg);
}