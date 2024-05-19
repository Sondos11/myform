document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const data = { email, password };

  // Check if the data file has already been downloaded
  const downloaded = localStorage.getItem("downloaded");
  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  if (!downloaded) {
    // First time download
    formData.push(data);
    localStorage.setItem("formData", JSON.stringify(formData));

    const wb = XLSX.utils.book_new();
    const ws_data = [["Email", "Password"]].concat(
      formData.map((item) => [item.email, item.password])
    );
    const ws = XLSX.utils.aoa_to_sheet(ws_data);

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "form_data.xlsx");

    localStorage.setItem("downloaded", true);
  } else {
    // Add data to local storage
    formData.push(data);
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Data has been saved locally.");
  }

  // Reset the form fields
  document.getElementById("myForm").reset();
});

function downloadExcel() {
  const formData = JSON.parse(localStorage.getItem("formData")) || [];
  if (formData.length === 0) {
    alert("No data to download.");
    return;
  }

  const wb = XLSX.utils.book_new();
  const ws_data = [["Email", "Password"]].concat(
    formData.map((item) => [item.email, item.password])
  );
  const ws = XLSX.utils.aoa_to_sheet(ws_data);

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, "form_data.xlsx");
}

document.body.insertAdjacentHTML(
  "beforeend",
  '<button onclick="downloadExcel()">Download Excel</button>'
);
