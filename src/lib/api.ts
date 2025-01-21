import axios from './axios';

// fetch all the dog data
export const fetchDogsData = async () => {
    try {
        const respons = await axios.get('breeds/list/all');
        console.log(respons)
        return respons?.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error)
        } else {
            console.log("Unexcepted error =>", error)
        }
    }
};

// //fetch all dog sub-breed
// export const fetchDogsSubBreed = async (breed: string) => {
//     try {
//         const respons = await axios.get(`breed/${breed}/list`);
//         console.log(respons.data.message);
//         return respons?.data;
//     } catch (error) {
//         if (error instanceof Error) {
//             console.log('error ;;;;;;;;;;;;;;;;;;;; => ', error)
//         } else {
//             console.log('Unexcepted error => ', error)
//         }
//     }
// };

// Fetch The Sub Breeds
export const fetchDogsSubBreed = async (breed: string) => {
    try {
      const response = await axios.get(`/breed/${breed}/list`);
      console.log('response fetch dogs sub breed =>', response.data.message[0]);
      return response?.data;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err, "error message");
      } else {
        console.log("unexpected error: ", err);
      }
    }
  };

// fetch breed images
export const fetchBreedImage = async (breed: string, no: string) => {
    try {
        const respons = await axios.get(`breed/${breed}/images/random/${no}`);
        return respons?.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log('error message => ', error)
        } else {
            console.log('Unexcepted error => ', error);
        }
    }
};

// fetch sub breed images
export const fetchSubBreedImages = async (breed: string, subBreed: string, no: string) => {
    try {
        const response = await axios.get(`breed/${breed}/${subBreed}/images/randoms/${no}`);
        return response?.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log('error message :', error);
        } else {
            console.log('unexcepted error =>', error)
        }
    }
};