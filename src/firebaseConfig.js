import { initializeApp } from "firebase/app";

const initializeFirebaseApp = (apiKey) => {
  const firebaseConfig = {
    apiKey: apiKey,

    authDomain: "instagram-clone-88112.firebaseapp.com",
    projectId: "instagram-clone-88112",
    storageBucket: "instagram-clone-88112.appspot.com",
    messagingSenderId: "177291247331",
    appId: "1:177291247331:web:55f5194e9360dbc50c8fd6",
    measurementId: "G-NJLK5JVZLE",
  };

  const app = initializeApp(firebaseConfig);
  return app;
};

export default initializeFirebaseApp;
