import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "personal-portfolio-a562d.firebaseapp.com",
  projectId: "personal-portfolio-a562d",
  storageBucket: "personal-portfolio-a562d.appspot.com",
  messagingSenderId: "1068927416639",
  appId: "1:1068927416639:web:484c63030e634b93ecbb8a",
  measurementId: "G-QJLFK4EPF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get the "contact" collection reference
const contactCollection = collection(db, "contact");

// Function to add the contact information to Firebase
async function addContactInfo(name, email, message) {
    try {
        const newContact = {
            name: name,
            email: email,
            message: message,
            createdAt: new Date()
        }
        await addDoc(contactCollection, newContact);
        console.log("Contact information added successfully!");
    } catch (error) {
        console.error("Error adding contact information: ", error);
  }
}

// Export the addContactInfo function for use in other modules
// export { addContactInfo };

// import { addContactInfo } from "./firebase-contact.js";
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");

let timeoutId;

function handleInputChange() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Validate the inputs
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the required fields.");
            return;
        }

        addContactInfo(name, email, message);
  }, 500);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleInputChange();
});