import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8lW6GyiqRlSy_N3g7-0FW29mVoUoVzno",
  authDomain: "project-4636449754230749634.firebaseapp.com",
  projectId: "project-4636449754230749634",
  storageBucket: "project-4636449754230749634.appspot.com",
  messagingSenderId: "196403544210",
  appId: "1:196403544210:web:e5e853e4f2be7d3df1664b"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
