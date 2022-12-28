// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase,
ref,
set, onChildAdded, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHYFt3Y_9pROB3LJw7h9C8xAxAWC4MVXE",
  authDomain: "registration-form2-7951d.firebaseapp.com",
  projectId: "registration-form2-7951d",
  storageBucket: "registration-form2-7951d.appspot.com",
  messagingSenderId: "224818265393",
  appId: "1:224818265393:web:2967fcb1459c1c5ca98410",
  measurementId: "G-1BQYN026LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const database = getDatabase();

var firstinp = document.getElementById("First");
var lastinp = document.getElementById("Last");
var nicinp = document.getElementById("NIC");
var contactinp = document.getElementById("Contact");
var emailinp = document.getElementById("Email");
var passwordinp = document.getElementById("Password");
var qualificationinp = document.getElementById("Qualification");
var courseinp = document.getElementById("Course");
var parent = document.getElementById("parent");

window.saveTask = function(){
    var obj = {
        first: firstinp.value,
        last: lastinp.value,
        nic: nicinp.value,
        contact: contactinp.value,
        email: emailinp.value,
        password: passwordinp.value,
        qualification: qualificationinp.value,
        course: courseinp.value,
    };
    obj.id = Math.random().toString().slice(2);
    let reference = ref(database, `firsts/${obj.id}/`);
    set(reference, obj);
    console.log(obj);
}

function getData(){
    let reference = ref(database, "firsts/")
    let arr = [];
    onChildAdded(reference, function (data){
        arr.push(data.val());
        console.log(arr);
        parent.innerHTML = "";
        for(var i = 0; i < arr.length; i++){
            parent.innerHTML +=`<li>${arr[i].task}</li>`
        }
    })
}