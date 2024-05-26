//                     JAVASCRIPT CODE

// Select the theme-toggle button and body element
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const user = document.getElementById("welcome-screen");
let username = "Farqleet Ahmed Sheikh";
// Check the user's preference from local storage (if available)
// const currentTheme = localStorage.getItem("theme");

// Set the initial theme
// if (currentTheme) {
//   body.classList.add(currentTheme);
// }

// Add a click event listener to the theme-toggle button
// themeToggle.addEventListener("click", () => {
// Toggle the theme class on the body element
//   body.classList.toggle("dark-mode");

// Update the user's preference in local storage
//   const theme = body.classList.contains("dark-mode")  ? "dark-mode"
//     : "light-mode";
//   localStorage.setItem("theme", theme);
// });

// Adding Functionallity to the buttons of todo list

let titl;
let desc;

// this function refresh the view area when ever user add or delete it's task

user.innerText = `Welcome ${username}`;

const update = () => {
  let table = document.getElementById("table_body");
  let str = "";

  //values storing in local host and showing on web

  if (localStorage.getItem("itemJSON") == null) {
    let itemJSONArray = [];
    localStorage.setItem("itemJSON", JSON.stringify(itemJSONArray));
  } else {
    itemJSONArrayStr = localStorage.getItem("itemJSON");
    itemJSONArray = JSON.parse(itemJSONArrayStr);
  }
  // assing values on web view area

  itemJSONArray.forEach((ele, index) => {
    str += `
    <div class="col task">
      <div class="card shadow-lg mx-3" style="height:250px;">
        <div class="card-body">
          <h5 class="card-title">${ele[0]}</h5> 
          <p class="card-text">${ele[1]}.</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary"><button class="btn btn-primary" id="del-task" onClick=deleted(${index})>Delete</button></small>
        </div>
      </div>
    </div>`;
  });
  table.innerHTML = str;
};

//this funtcion will get the data from user and update the fields to show task to user on the view area

const getAndUpdate = () => {
  titl = document.getElementById("title").value;
  desc = document.getElementById("task-des").value;
  if (localStorage.getItem("itemJSON") == null) {
    let itemJSONArray = [];
    itemJSONArray.push([titl, desc]);
    localStorage.setItem("itemJSON", JSON.stringify(itemJSONArray));
  } else {
    itemJSONArrayStr = localStorage.getItem("itemJSON");
    itemJSONArray = JSON.parse(itemJSONArrayStr);
    itemJSONArray.push([titl, desc]);
    localStorage.setItem("itemJSON", JSON.stringify(itemJSONArray));
  }
  // calling the function to update data
  update();
};
// this function will delete the data store in local store as the wish of user

const deleted = (index) => {
  console.log(index);
  itemJSONArrayStr = localStorage.getItem("itemJSON");
  itemJSONArray = JSON.parse(itemJSONArrayStr);
  itemJSONArray.splice(index, 1);
  localStorage.setItem("itemJSON", JSON.stringify(itemJSONArray));
  // calling the function to update data
  update();
};
document.getElementById("add-btn").addEventListener("click", getAndUpdate);

update();
