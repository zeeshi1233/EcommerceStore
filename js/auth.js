    import { db,auth } from "./firebase.js";
    import { createUserWithEmailAndPassword,signInWithEmailAndPassword   }  from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
    import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


    window.signup=()=>{

        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
            name:name,
            email:email,
            uid:user.uid
        });
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        
        Toast.fire({
            icon: 'success',
            title: 'Signup successfully'
        }).then(()=>{
            location.replace('login.html');
        })
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        
        Toast.fire({
            icon: 'error',
            title: errorMessage
        })
    });
    }



    // Login
    window.login=()=>{
        let password=document.getElementById("password").value;
        let email=document.getElementById("email").value;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        
        Toast.fire({
            icon: 'success',
            title: 'Login successfully'
        }).then(()=>{
            location.replace('index.html');
        })
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        
        Toast.fire({
            icon: 'error',
            title: errorMessage
        })
    })

    }
