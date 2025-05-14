// src/api/firebaseService.js
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../firebaseConfig'; // Asegúrate de que auth y db se exporten desde firebaseConfig.js

// Registrar un nuevo usuario con Firebase Auth y guardar su info en Firestore
export const registrarUsuario = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardar info adicional en Firestore (por ejemplo, el email)
    await setDoc(doc(db, 'usuarios', user.uid), { email });

    return user;
  } catch (error) {
    console.error('Error en el registro:', error);
    throw error;
  }
};

// Iniciar sesión con Firebase Auth
export const loginUsuario = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Opcional: obtener más datos del usuario desde Firestore
    const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
    if (!userDoc.exists()) throw new Error('Datos de usuario no encontrados');

    return {
      uid: user.uid,
      email: user.email,
      ...userDoc.data()
    };
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};
