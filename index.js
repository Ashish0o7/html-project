// Your web app's Firebase configuration

// Initialize Firebase

// Initialize variables

const firebaseConfig = {
    apiKey: "AIzaSyABdMOVfvn5Cj641BjQAnkRqzIS0wLKBQo",
    authDomain: "signup-ef26e.firebaseapp.com",
    projectId: "signup-ef26e",
    storageBucket: "signup-ef26e.appspot.com",
    messagingSenderId: "928283998071",
    appId: "1:928283998071:web:daab508125d7a3681c5372",
    measurementId: "G-JNFT7YB5WQ"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Set up our register function
function register() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
   

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                email: email,
                full_name: full_name,
               
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)

            // DOne
            alert('Thanks for creating account, your email address in now saved in firebase server :)!!')
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}
