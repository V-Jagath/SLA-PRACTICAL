
// TASK 1 - Change the text of a paragraph when a button is clicked.

const domhead = document.getElementById("dom")
const button = document.getElementById("readmore_btn")

button.addEventListener("click", () => {
    const peragraph = document.getElementById("pera1")
    const pera2 = document.getElementById("pera2")
    if (pera2.style.display === "none") {
        peragraph.style.display = "block";
        pera2.style.display = "block"
        button.innerText = "Read Less"
    }
    else {
        peragraph.style.display = "block";
        pera2.style.display = "none"
        button.innerText = "Read More"

    }
})


// 2. Create a box and toggle its visibility using one button (hide/show).

const btn = document.getElementById("btn")
btn.addEventListener("click", () => {

    const navbar = document.getElementById("navbar")
    const links = document.getElementById("links")

    if (navbar.style.display === "flex") {
        navbar.style.display = "none"
        btn.innerText = "show"

    }
    else {
        navbar.style.display = "flex"
        btn.innerText = "Hide"
    }
})



// <!-- 3. Change background color of a div randomly when a button is pressed. --

document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById("box");
    const color_btn = document.getElementById("color_btn");

    color_btn.addEventListener('click', () => {

        //alert('ti')
        //console.log(box.style.backgroundColor)
        if (box.style.backgroundColor === "blueviolet") {
            box.style.backgroundColor = "white"
            box.style.color = "black"
            box.style.border = "2px solid"
            color_btn.style.backgroundColor = "blue"

        }
        else if (box.style.backgroundColor === "white") {
            box.style.backgroundColor = "black"
            box.style.color = "white"
            box.style.border = "2px solid "
            color_btn.style.backgroundColor = "red"

        }

        else if (box.style.backgroundColor === "black") {
            box.style.backgroundColor = "orange"
            box.style.color = "black"
            box.style.border = "1px solid "
            color_btn.style.backgroundColor = "white"
            color_btn.style.color = "black"

        }
        else {
            box.style.backgroundColor = "blueviolet"
            box.style.color = "black"
            color_btn.style.backgroundColor = "brown"
        }

    })

})


//  4.On hover over an image, replace it with another image.
const img = document.getElementById("img1")
const imgbtn = document.getElementById("img_btn")
const images = ["../../Project/Blood_Donation/Assets/Photos/Blood-camp-2.jpg", "../../Project/Blood_Donation/Assets/Photos/Blood-camp-3.jpg", "../../Project/Blood_Donation/Assets/Photos/Donation_Events.avif"]
let index = 0;

imgbtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    img.src = images[index];
    img.style.display = "block"
})

// 5. Create a counter with + and - buttons to increase/decrease value in DOM.
const decrease = document.getElementById("decrease")
const increase = document.getElementById("increase")
const total = document.getElementById("total")
let count = 0;

increase.addEventListener("click", () => {
    count++;

    total.textContent = count
})
decrease.addEventListener("click", () => {
    count--;
    total.textContent = count;
})

//  <!-- Part B - Form + DOM Basics -->
//     <!--6. Create a form with name and email fields.Print entered values on console without reload. -->

const namedata = document.getElementById("name_data")
const nameerror = document.getElementById("name_error")
const emaildata = document.getElementById("email_data")
const emailerror = document.getElementById("email_error")
const submitbtn = document.getElementById("submit_btn")
const namevalue = document.getElementById("name_value")
const emailvalue = document.getElementById("email_value")

submitbtn.addEventListener("click", (form_data) => {
    form_data.preventDefault()
    if (namedata.value.trim() === "") {
        nameerror.innerText = "Please Enter Your Name"
        nameerror.style.color = "red"
    }
    else if (emaildata.value.trim() === "") {
        emailerror.innerHTML = "Please Enter Your Email Id"
        emailerror.style.color = "red"
    }
    else {
        alert("Form Submited Successfully !!!")
        nameerror.style.display = "none"
        emailerror.style.display = "none"
        namevalue.innerText = "Name : " + (namedata).value
        emailvalue.innerText = "Email :" + (emaildata).value
        namedata.value = "";
        emaildata.value = "";
    }
})

// 7. Live preview: As user types name, show it in a heading below.

const livedata = document.getElementById("live_data")
const livevalue = document.getElementById("live_value")

livedata.addEventListener("input", () => {
    livevalue.innerHTML = `<h3>Live Preview :</h3> ${livedata.value}`
})

// 8. Disable the submit button until all fields are filled.

const username = document.getElementById("name")
const mobilenumber = document.getElementById("mob_number")
const submitbutton = document.getElementById("submit_button")

function check_data() {
    if (username.value === "" && mobilenumber.value === "") {
        submitbutton.style.display = "none"
    }
    else {
        submitbutton.style.display = "inline"
    }
}

username.addEventListener("input", check_data)
mobilenumber.addEventListener("input", check_data)



// username.addEventListener("input", (eightdata) => {
//     eightdata.preventDefault()
//     if (username.value === "") {
//         submitbutton.style.display = "none"
//     }
//     else {
//         submitbutton.style.display = "inline"
//     }
// })

// mobilenumber.addEventListener("input", (eight_data) => {
//     eight_data.preventDefault()
//     if (mobilenumber.value === "") {
//         submitbutton.style.display = "none"
//     }
//     else {
//         submitbutton.style.display = "inline"
//     }
// })

//  9. Form with password and confirm password - show error if mismatch.

// const mail = document.getElementById("mail")
// const pass = document.getElementById("pass")
// const show = document.getElementById("show")
// const conpass = document.getElementById("con_pass")
// const mismatcherror = document.getElementById("mismatch_error")
// const submitnine = document.getElementById("submit_nine")
// show.addEventListener("click", (showpass) => {
//     showpass.preventDefault()
//     mismatcherror.innerText = pass.value
// })
// submitnine.addEventListener("click", (validation) => {
//     validation.preventDefault()
//     if (pass.value === conpass.value) {
//         console.log("password Correct");
//         mismatcherror.style.display = "none"
//     }
//     else {
//         mismatcherror.innerHTML = "<p>Password Missmatch Please check !!</p>"
//         mismatcherror.style.color = "red"
//     }
// })

// 10. Form submit should add entered data into a table dynamically.

const form = document.getElementById("form")
const empid = document.getElementById("emp_id")
const empname = document.getElementById("emp_name")
const salary = document.getElementById("salary")
const dept = document.getElementById("dept")
const empsubmit = document.getElementById("emp_submit")
const tabledata = document.getElementsByTagName("td")
empsubmit.addEventListener("click", (emp_details) => {
    emp_details.preventDefault()
    if (empid.value === "" || salary.value === "" || dept.value === "") {
        const error_msg = document.createElement("p")
        error_msg.innerText = "Required fields are empty !!"
        form.appendChild(error_msg);
        error_msg.style.color = "red"
        console.log("true");

    }
    else {


        const row = document.createElement("tr")
        row.innerHTML = `<td>${empid.value}</td>
        <td>${empname.value}</td>
        <td>${salary.value}</td>
        <td>${dept.value}</td>`
        console.log("false");

        tablebody.appendChild(row);
        empid.value = "";
        empname.value = "";
        salary.value = "";
        dept.value = "";
    }
});

// Part C - Validation and Advanced DOM
// 11. Create a textarea with character limit (100) and show remaining characters dynamically.
const textarea = document.getElementById("text_area");
const showtextarea = document.getElementById("show_textarea");
const maxLength = 100;

textarea.addEventListener("input", () => {
    const remaining = maxLength - textarea.value.length;
    if (remaining >= 0) {
        showtextarea.textContent = `${remaining} characters remaining`;
    } else {
        textarea.value = textarea.value.slice(0, maxLength); // prevent extra typing
        showtextarea.textContent = `0 characters remaining`;
    }
});

// 12. Build a login form - if wrong password entered 3 times, disable submit button


// 9th question login form is used
// const mail = document.getElementById("mail")
// const pass = document.getElementById("pass")
// const show = document.getElementById("show")
// const conpass = document.getElementById("con_pass")
// const mismatcherror = document.getElementById("mismatch_error")
// const submitnine = document.getElementById("submit_nine")

// show.addEventListener("click", (showpass) => {
//     showpass.preventDefault()
//     mismatcherror.innerText = pass.value
// })
// submitnine.addEventListener("click", (validation) => {
//     validation.preventDefault()
//     if (pass.value === conpass.value) {
//         console.log("password Correct");
//         mismatcherror.style.display = "none"
//     }
//     else if (pass.value != conpass.value) {
//         mismatcherror.innerHTML = "<p>Password Missmatch Please check !!</p>"
//         mismatcherror.style.color = "red"
//     }
//     else if (pass.value != conpass.value > 3) {
//         submitnine.display = "none"
//     }

// })
