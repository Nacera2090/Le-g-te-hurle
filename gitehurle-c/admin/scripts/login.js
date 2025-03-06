//---------- Variable ----------//

const root = document.getElementById('root');
let validUser = ['admin','test','user','thomas','nacera', 'dhoha', 'andrea'];
let testPassword = '1234';
let unvalidDisplay = false;

//-------- DOM CONSTRUCT -------//

const container = document.createElement('div');
container.className = "container";
root.appendChild(container);

let div_A = document.createElement('div');
div_A.className = "row"
container.appendChild(div_A);

let div_B = document.createElement('div');
div_B.className = "offset-3 col-6 bg-secondary mt-5 p-3 rounded-5 shadow p-3 mb-5 bg-body-tertiary rounded";
div_A.appendChild(div_B);

let div_C = document.createElement('div');
div_C.className = "d-flex flex-column p-2 mt-5";
div_B.appendChild(div_C);

let h1 = document.createElement('h1');
h1.className = "text-center";
h1.innerText = "Admin pannel"
div_C.appendChild(h1);

let img = document.createElement('img');
img.className = "mt-5 offset-3 col-6 rounded-circle shadow p-3 mb-5 bg-body-tertiary rounded";
img.src = "../asset/user_img.jpg";
img.alt = "User Logo";
div_C.appendChild(img);

let unvalidDiv = document.createElement('div');
div_C.appendChild(unvalidDiv);

let username = document.createElement('input');
username.type = "text";
username.name = "username";
username.id = "id-username";
username.placeholder = "Users : ['admin','test','user','thomas','nacera', 'dhoha', 'andrea']";
username.value = "";
username.className = "mt-2 px-1 border shadow p-3 mb-2 rounded"
div_C.appendChild(username);

let password = document.createElement('input');
password.type = "password";
password.name = "password";
password.id = "id-password";
password.placeholder = "Password is : 1234"
password.className = "mt-2 px-1 border shadow p-3 mb-2 rounded";
div_C.appendChild(password);

let button = document.createElement('button');
button.type = "submit";
button.id = "id-btn";
button.className = "mt-4 btn shadow p-3 mb-2 rounded ";
button.style.backgroundColor = "#dcab6b";
button.innerText = "Login";
button.addEventListener('mouseenter', () => { mouseEnter(button) });
button.addEventListener('mouseleave', () => { mouseLeave(button) });
div_C.appendChild(button);

//---------- Function ----------//


function mouseEnter(element) {
    element.style.backgroundColor = "#ffffb3";
}

function mouseLeave(element) {
    element.style.backgroundColor = "#dcab6b";
}


const logbutton = document.getElementById('id-btn');

logbutton.addEventListener('click', () => {

    if(password.value === testPassword && validUser.includes(username.value.toLowerCase())){

        saveData("username",username.value);

        username.value = "";
        password.value = "";


        goTo('../htdocs/Dashboard.html');
    }
    else{
        password.value = "";

        if(unvalidDisplay === false){
            unvalidData();
        }
    }
});


function unvalidData(){

    unvalidDisplay = true;

    let p = document.createElement('p');
    p.className = "text-center text-danger"
    p.innerText = "Username or password are unvalid, please try again."
    unvalidDiv.appendChild(p);

    setTimeout(() => {
        unvalidDiv.innerHTML = '';
        unvalidDisplay = false;
    }, 3000);
}




//---------- Call ----------//