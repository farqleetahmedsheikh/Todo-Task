//                     JAVASCRIPT CODE

// Select the theme-toggle button and body element
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check the user's preference from local storage (if available)
const currentTheme = localStorage.getItem("theme");

// Set the initial theme
if (currentTheme) {
  body.classList.add(currentTheme);
}

// Add a click event listener to the theme-toggle button
themeToggle.addEventListener("click", () => {
  // Toggle the theme class on the body element
  body.classList.toggle("dark-mode");

  // Update the user's preference in local storage
  const theme = body.classList.contains("dark-mode")
    ? "dark-mode"
    : "light-mode";
  localStorage.setItem("theme", theme);
});

// Adding Functionallity to the buttons of todo list

var titl;
var desc;

// this function populating the table and store the values in local store and also display on web

function update() {
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
  // assing values on web table

  itemJSONArray.forEach((element, index) => {
    str += `
    <div class="col task" id="task">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${element[0]}</h5> 
          <button type="button" class="btn-close"  onlick=deleted(${index})></button>
          <p class="card-text">${element[1]}.</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary"><button class="btn btn-primary" id="del-task" onlick=deleted(${index})>Delete</button></small>
        </div>
      </div>
    </div>`;
  });
  table.innerHTML = str;
}

//this funtcion will get values or data from user

function getAndUpdate() {
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
  update();
  refreshWeb();
}

// this function will refresh website

function refreshWeb() {
  window.location.reload();
}

document.getElementById("add-btn").addEventListener("click", getAndUpdate);
update();

// this function will delete the data store in local store as the wish of user

function deleted(index) {
  console.log(index);
  itemJSONArrayStr = localStorage.getItem("itemJSON");
  itemJSONArray = JSON.parse(itemJSONArrayStr);
  itemJSONArray.splice(index, 1);
  localStorage.setItem("itemJSON", JSON.stringify(itemJSONArray));
  update();
  refreshWeb();
}

document.getElementById("del-task").addEventListener("click", deleted);
