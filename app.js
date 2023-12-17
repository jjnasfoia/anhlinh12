import Login from "./pages/login/login.js";
class App {
  activeScreen;
  container;
  nav;
  main;

  constructor(container) {
    this.container = container;
  }

  changeActiveScreen(screen) {
    // todo
    if (this.activeScreen != undefined) {
      this.container.innerHTML = "";
      
    }
    this.activeScreen = screen;
    this.activeScreen.initRender(this.container);
  }
}
const container = document.getElementById("app");
const app = new App(container);

const login = new Login();
app.changeActiveScreen(login);

//export instant của app chứ ko export class vì App là duy nhất
export default app;

// Init firebase app
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore-lite.js";
export 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg7BlYMHmewn6aSnihUkpNB4ARC9dEWQY",
  authDomain: "blogweb-38ea9.firebaseapp.com",
  databaseURL: "https://blogweb-38ea9-default-rtdb.firebaseio.com",
  projectId: "blogweb-38ea9",
  storageBucket: "blogweb-38ea9.appspot.com",
  messagingSenderId: "771538590164",
  appId: "1:771538590164:web:1136eb5475187e5dd4de41",
  measurementId: "G-5XQYFPVPJ0"
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const firestore  = getFirestore(firebaseApp);

