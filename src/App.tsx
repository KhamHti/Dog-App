import React, { useEffect, useState } from "react";
import "./App.css";
import { AppBody, Container, Description } from "./Styles/styled";
import { fetchDogsData } from "./lib/api";
import Loader from "./components/Loader";
import DogForm from "./components/DogForm";

function App() {
  const [breedList, setBreedList] = useState(null);
  const [subBreedList, setSubBreedList] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    await fetchDogsData()
      .then((data) => {
        setBreedList(data?.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
 