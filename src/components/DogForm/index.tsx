import React from "react";
import { DogFormContainer } from "./styles";
import DropDown from "./DropDown";
import { useDispatch } from "react-redux";
import { ActionType } from "../../types/reducers";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

interface DogFormProps {
  breedList: any;
  subBreedList: any;
  setImages: any;
  setIsLoading: any;
}

function DogForm({
  breedList,
  subBreedList,
  setImages,
  setIsLoading,
}: DogFormProps) {
  console.log("breedlist =>", breedList);
  const dispatch = useDispatch();
  const dogStore = useSelector((state: RootState) => state.app);
  console.log(dogStore);

  const renderBreed = (value: string) => {
    // console.log(value, "function is working");
    dispatch({
      type: ActionType.BREED,
      payload: value,
    });
  };

  const breedState = dogStore?.breed;

  return (
    <DogFormContainer>
      <p>DogForm</p>
      <DropDown title="Select a breed" showError={false}>
        <select
          onChange={(e) => renderBreed(e.target.value)}
          value={breedState}
        >
          <option value="all">Select Breeds</option>
          {breedList &&
            Object.keys(breedList)?.map((breed, index) => (
              <option value={breed} key={index}>
                {breed}
              </option>
            ))}
        </select>
      </DropDown>
    </DogFormContainer>
  );
}

export default DogForm;
