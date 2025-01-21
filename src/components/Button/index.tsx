import React from "react";
import { FetchButton, ResetButton } from "./styles";
import { ActionType } from "../../types/reducers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { fetchBreedImage } from "../../lib/api";

interface ButtonProps {
  setImages: any;
  setIsLoading: boolean;
}

function Button({ setImages, setIsLoading }: ButtonProps) {
  const dogStore = useSelector((state: RootState) => state.app);
  const breedState = dogStore?.breed;
  const subBreedState = dogStore?.subBreed;
  const numberState = dogStore?.number;

  const dispatch = useDispatch();

  const handleImagesFetch = async () => {
    if (breedState === "all") {
      dispatch({
        type: ActionType.ERROR,
        payload: true,
      });
    }
    if (breedState !== "all" && subBreedState === "all") {
      await fetchBreedImage(breedState, numberState).then((data) => {
        console.log("data =>", data);
      });
    }
  };

  return (
    <>
      <FetchButton role="button" onClick={() => handleImagesFetch()}>
        Search Dogs
      </FetchButton>
      <ResetButton
        role="button"
        onClick={() => {
          dispatch({
            type: ActionType.RESET,
          });
        }}
      >
        Reset Search
      </ResetButton>
    </>
  );
}

export default Button;
