import { Dispatch } from "redux";
import { ActionType } from "../types/reducers";

export const renderBreed = (value: string, dispatch: Dispatch<any>) => {
    // console.log(value, "function is working");
    dispatch({
        type: ActionType.BREED,
        payload: value,
    });
    dispatch({
        type: ActionType.SUB_BREED,
        payload: "all",
    });
};

export const renderSubBreed = (value: string, dispatch: Dispatch<any>) => {
    console.log(value, "function is working", value);
    dispatch({
        type: ActionType.SUB_BREED,
        payload: value,
    });
};

export const renderNumber = (value: string, dispatch: Dispatch<any>) => {
    // console.log(value, "function is working");
    dispatch({
        type: ActionType.NUMBER,
        payload: value,
    });
};