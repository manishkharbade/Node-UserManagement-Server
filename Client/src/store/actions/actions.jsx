import { toggleTheme } from "../action-constants/actionTypes";

export const toggleThemeLoading = (payload) => ({
    type: toggleTheme.TOGGLE_THEME_LOADING,
    payload: payload
});
export const toggleThemeAction = (payload) => ({
    type: toggleTheme.TOGGLE_THEME_ACTION,
    payload: payload
});
export const toggleThemeSuccess = (mode) => ({
    type: toggleTheme.SET_TOGGLE_THEME,
    payload: mode
});