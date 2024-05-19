const scriptURL =
  "https://script.google.com/macros/s/AKfycbxOXmFSk_nLxDYQJs4adPwOIWfW6hvIqZQPcn3RKKJF_8ctsV3r-mLXCqRo5Z1W21M/exec"; // استبدل YOUR_SCRIPT_ID بالمعرف الفعلي للسكربت الخاص بك

document
  .getElementById("crudForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        Email: email,
        Password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          alert("Data added successfully!");
          document.getElementById("crudForm").reset();
          fetchData();
        } else {
          alert("Error adding data: " + data.error);
        }
      })
      .catch((error) => alert("Request failed: " + error));
  });

document.getElementById("fetchData").addEventListener("click", fetchData);

function fetchData() {
  // Note: This requires an endpoint that returns JSON data from your Google Sheet
  fetch("YOUR_GOOGLE_SHEET_API_URL") // يجب إعداد API للوصول إلى البيانات من Google Sheets
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector("#dataTable tbody");
      tableBody.innerHTML = "";
      data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${row.Email}</td>
                    <td>${row.Password}</td>
                    <td>
                        <button onclick="editRow(${row.id})">Edit</button>
                        <button onclick="deleteRow(${row.id})">Delete</button>
                    </td>
                `;
        tableBody.appendChild(tr);
      });
    });
}

function editRow(id) {
  // منطق تعديل الصف المحدد
}

function deleteRow(id) {
  // منطق حذف الصف المحدد
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxOXmFSk_nLxDYQJs4adPwOIWfW6hvIqZQPcn3RKKJF_8ctsV3r-mLXCqRo5Z1W21M/exec"; // استبدل YOUR_SCRIPT_ID بالمعرف الفعلي للسكربت الخاص بك

document
  .getElementById("crudForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        Email: email,
        Password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          alert("Data added successfully!");
          document.getElementById("crudForm").reset();
          fetchData();
        } else {
          alert("Error adding data: " + data.error);
        }
      })
      .catch((error) => alert("Request failed: " + error));
  });

document.getElementById("fetchData").addEventListener("click", fetchData);

function fetchData() {
  // Note: This requires an endpoint that returns JSON data from your Google Sheet
  fetch("YOUR_GOOGLE_SHEET_API_URL") // يجب إعداد API للوصول إلى البيانات من Google Sheets
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector("#dataTable tbody");
      tableBody.innerHTML = "";
      data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${row.Email}</td>
                    <td>${row.Password}</td>
                    <td>
                        <button onclick="editRow(${row.id})">Edit</button>
                        <button onclick="deleteRow(${row.id})">Delete</button>
                    </td>
                `;
        tableBody.appendChild(tr);
      });
    });
}

function editRow(id) {
  // منطق تعديل الصف المحدد
}

function deleteRow(id) {
  // منطق حذف الصف المحدد
}
