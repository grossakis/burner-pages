import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  registerUser: (email, password) => {
    //can add a hash function later to increase security
    console.log("Running in the browsers");
    return axios.post("/api/user", { email: email, password: password });
  },
  loginUser: (email, password) => {
    //can add a hash function later to increase security
    console.log("Running in the browsers");
    return axios.post("/api/login", { email: email, password: password });
  },
  getEmail: () => {
    return axios.get("/api/email");
  },
  // //gets a single random dog
  // getRandomDog: function() {
  //   return axios.get("https://dog.ceo/api/breeds/image/random");
  // },
  // //probably used for searching for a particular breed
  // getDogsOfBreed: function(breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  // //probably used for dropdown
  // getBaseBreedsList: function() {
  //   return axios.get("https://dog.ceo/api/breeds/list");
  // }

  // NEW CODE START
  routeEmails: () => {
    return axios.get("/testdb");
  }
  // NEW CODE END
};
