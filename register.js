import app, { firebaseApp } from "../../app.js";
import Login from "./login.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

class Register {
    constructor() {
        // set title  for  html page
        document.getElementsByTagName("title")[0].innerHTML = "Register";
    }

    initRender(container) {
        //add components in container of app
        let form_layout = document.createElement("div");
        form_layout.id = "form-layout";

        let form_header = document.createElement("div");
        form_header.classList.add("form-title");
        let header_text = document.createElement("div");
        header_text.classList.add("title");
        header_text.innerText = "Login";
        form_header.appendChild(header_text);
        form_header.appendChild(document.createElement("hr"));

        let ava = document.createElement("div");
        ava.classList.add("avatar");
        let img = document.createElement("img");
        img.src =
            "https://shopgarena.net/wp-content/uploads/2022/08/Avatar-Zata-chibi-cute.jpg";
        img.alt = "avatar";
        ava.appendChild(img);

        let signup_form = document.createElement("form");
        signup_form.innerHTML = `          
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">
      <i class="fa-solid fa-user"></i>
    </span>
    <input
      type="text"
      class="form-control"
      placeholder="Username"
      aria-label="Username"
      id="username"
      aria-describedby="basic-addon1"
    />
  </div>  
    
  <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"> @ </span>
        <input
          type="text"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          id="email"
          aria-describedby="basic-addon1"
        />
      </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="password-header">
      <i class="fa-solid fa-lock"></i>
    </span>
    <input
      type="password"
      class="form-control"
      placeholder="Password"
      aria-label="Password"
      id="password"
      aria-describedby="password-header"
    />
  </div>`;

        let submit_btn = document.createElement("button");
        submit_btn.type = "submit";
        submit_btn.classList.add("btn");
        submit_btn.classList.add("btn-primary");
        submit_btn.innerText = "Register";
        submit_btn.addEventListener("click", this.getSignUp.bind(this));
        signup_form.appendChild(submit_btn);

        let link_div = document.createElement("div");
        link_div.classList.add("other-link");
        link_div.innerText = "Have already an account? ";
        let link = document.createElement("a");
        link.id = "other-link";
        link.innerText = "Login";
        // add event for a
        link.addEventListener("click", this.gotoLogin.bind(this));
        link_div.appendChild(link);

        form_layout.appendChild(form_header);
        form_layout.appendChild(ava);
        form_layout.appendChild(ava);
        form_layout.appendChild(signup_form);
        form_layout.appendChild(link_div);

        container.appendChild(form_layout);
    }

    getSignUp() {
        //todo
        // chan phan di chuyen tu dong cua form
        e.preventDefault();

        // get data from input (login form)
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // validate form
        if (!username || !email || !password) {
            alert("please fill this form");
        } else if (!username.trim().includes(" ")) {
            alert("username can't  have  space");
        } else if (!email.includes("@")) {
            alert("email is bad  format");
        } else if (password < 6) {
            alert("password needs  more  than  5 letters");
        } else {
            // signup by firebase        
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    //add  displayname and photo URL
                    updateProfile(
                        user, {
                        displayName: username,
                        photoURL: "",
                    }
                    ).then(() => {
                        //profile updatedd
                        user.providerData.forEach((profile) => {
                            console.log("Name: " + profile.displayName);
                            console.log("Email:" + profile.email)
                        });
                    })
                        .catch((error) => {
                            const errorMessage = error.message;
                            //show errorr
                            alert(errorMessage);

                        })
                }
            })
            //goto signin
            this.gotoLogin();

        }
    }

    gotoLogin() {
        //todo
        const login = new Login();
        app.changeActiveScreen(login);

    }
}

export default Register;
