
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyATD7Yy08ZWoALAxd6qVrcnk09dm9vtQf0",
  authDomain: "parakkat-resort.firebaseapp.com",
  projectId: "parakkat-resort",
  storageBucket: "parakkat-resort.appspot.com",
  messagingSenderId: "28811297718",
  appId: "1:28811297718:web:7ce908bfed8c718ab7f717",
  measurementId: "G-ZJ18S90FRE"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export {app};