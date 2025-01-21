import React from "react";
import { DogFormContainer } from "./styles";
import DropDown from "./DropDown";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { renderBreed, renderNumber, renderSubBreed } from "../../helpers";
import { BreedsType } from "../../types/breed";
import Button from "../Button";

interface DogFormProps {
  breedList: BreedsType;
  subBreedList: string[];
  setImages: any;
  setIsLoading: any;
}

function DogForm({
  breedList,
  subBreedList,
  setImages,
  setIsLoading,
}: DogFormProps) {
  const dispatch = useDispatch();
  const dogStore = useSelector((state: RootState) => state.app);

  const breedState = dogStore?.breed;
  const subBreedState = dogStore?.subBreed;
  const numberState = dogStore?.number;

  console.log(subBreedList, subBreedState);

  return (
    <DogFormContainer>
      <p>DogForm</p>
      <DropDown title="Select a breed" showError={false}>
        <select
          onChange={(e) => {
            renderBreed(e.target.value, dispatch);
          }}
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
      <DropDown title="Select a sub breed" showError={false}>
        <select
          onChange={(e) => {
            renderSubBreed(e.target.value, dispatch);
            console.log("e.target.value=>", e.target.value);
          }}
          value={subBreedState}
        >
          <option value="all">Select Sub Breed</option>
          {subBreedList?.length &&
            subBreedList?.map((subBreed: string, index: number) => (
              <option value={subBreed} key={index}>
                {subBreed}
              </option>
            ))}
        </select>
      </DropDown>

      {/* number */}
      <DropDown title="Number of Images" showError={false}>
        <select
          onChange={(e) => {
            renderNumber(e.target.value, dispatch);
            console.log('noeeee=>', e.target.value);
          }}
          value={numberState}
        >
          <option value="all">Please Select</option>
          {Array.from({ length: 50 }, (_, index) => (
            <option value={index + 1} key={index}>
              {index}
            </option>
          ))}
        </select>
      </DropDown>
      <Button setImages={setImages} setIsLoading={setIsLoading} />
    </DogFormContainer>
  );
}

export default DogForm;
