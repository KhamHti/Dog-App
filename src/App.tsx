import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { AppBody, Container, Description } from "./Styles/styled";
import { fetchDogsData, fetchDogsSubBreed } from "./lib/api";
import Loader from "./components/Loader";
import DogForm from "./components/DogForm";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";

function App() {
  const [breedList, setBreedList] = useState(null);
  const [subBreedList, setSubBreedList] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dogStore = useSelector((state: RootState) => state.app);
  const breedState = dogStore?.breed;

  const fetchData = useCallback(async () => {
    await fetchDogsData()
      .then((data) => {
        setBreedList(data?.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    if (breedState !== "all") {
      await fetchDogsSubBreed(breedState)
        .then((data) => {
          setSubBreedList(data?.message);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [breedState]);

  useEffect(() => {
    fetchData();
  }, [breedState, fetchData]);

  if (isLoading) return <Loader />;

  if (!breedList) return <p>No Dogs Found</p>;

  return (
    <Container>
      <h1>Dog App</h1>
      <Description>
        <ul>
          This is dog app using React, Redux, TypeScript and Dog API. The app
          uses:
          <li>ReactJS & TypeScript</li>
          <li>Redux for state management</li>
          <li>Axios for fetching Data</li>
          <li>Styled Components</li>
          <li>Unit Tests with Jest & React Testing Library</li>
        </ul>
        <br />
        <p>
          Created by{" "}
          <a
            href="https://github.com/KhamHti/"
            target="_blank"
            rel="no referrer"
          >
            Kham{" "}
          </a>
        </p>
      </Description>
      <AppBody>
        <DogForm
          breedList={breedList}
          subBreedList={subBreedList}
          setImages={setImages}
          setIsLoading={setIsLoading}
        />
        <p>results</p>
      </AppBody>
    </Container>
  );
}

export default App;
