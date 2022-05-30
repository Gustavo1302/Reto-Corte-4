import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getFirestore,
    onSnapshot,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBsJDG8RoXzPsgJo1v1sjcPO5emqPaBUZQ",
    authDomain: "registro-estudiantes-7a9e3.firebaseapp.com",
    projectId: "registro-estudiantes-7a9e3",
    storageBucket: "registro-estudiantes-7a9e3.appspot.com",
    messagingSenderId: "88388392900",
    appId: "1:88388392900:web:8bb489af9db7ffe883f691"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

// ESTUDIANTES

export const saveStudent = (name, lastName) =>
    addDoc(collection(db, "Estudiantes"), {name, lastName});

export const onGetStudents = (callback) =>
    onSnapshot(collection(db, "Estudiantes"), callback);

export const deleteStudent = (id) => deleteDoc(doc(db, "Estudiantes", id));

export const getStudent = (id) => getDoc(doc(db, "Estudiantes", id));

export const updateStudent = (id, newFields) =>
    updateDoc(doc(db, "Estudiantes", id), newFields);

// CLASES

export const saveClass = (title, description) =>
    addDoc(collection(db, "Clases"), {title, description});

export const onGetClasses = (callback) =>
    onSnapshot(collection(db, "Clases"), callback);

export const deleteClass = (id) => deleteDoc(doc(db, "Clases", id));

export const getClass = (id) => getDoc(doc(db, "Clases", id));

export const updateClass = (id, newFields) =>
    updateDoc(doc(db, "Clases", id), newFields);

// MATRICULAS

export const saveEnrollment = (studentId, classId) =>
    addDoc(collection(db, "Registros"), {studentId, classId});

export const onGetEnrollments = (callback) =>
    onSnapshot(collection(db, "Registros"), callback);

export const deleteEnrollment = (id) => deleteDoc(doc(db, "Registros", id));