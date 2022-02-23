import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
const colRef = collection(db, "emojis");

export const getAllEmojis = async () => {
  let emojis = [];
  await getDocs(colRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      emojis.push({ ...doc.data() });
    });
  });
  console.log(
    emojis.map((emoji) => ({ ...emoji, leds: JSON.parse(emoji.leds) }))
  );
  const newEmojis = emojis.map((emoji) => ({
    ...emoji,
    leds: JSON.parse(emoji.leds),
  }));

  return newEmojis;
};
