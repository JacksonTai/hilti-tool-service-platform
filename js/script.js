const processes = ["Comparing with CAD", "Obtaining surface deviation"]
const scanButton = document.getElementById('scan-button');

const drill_01 = "0.40,0.20,0.12,1,0,0,0,0,0,0,0,0,0,0,0\n0.23,0.12,0.11,0,1,0,0,0,0,0,0,0,0,0,0\n0.32,0.32,0.38,0,0,1,0,0,0,0,0,0,0,0,0\n0.21,0.27,0.26,0,0,0,1,0,0,0,0,0,0,0,0\n0.14,0.24,0.30,0,0,0,0,1,0,0,0,0,0,0,0\n0.14,0.13,0.28,0,0,0,0,0,1,0,0,0,0,0,0\n0.19,0.18,0.19,0,0,0,0,0,0,1,0,0,0,0,0\n0.24,0.13,0.30,0,0,0,0,0,0,0,1,0,0,0,0\n0.32,0.46,0.14,0,0,0,0,0,0,0,0,1,0,0,0\n0.18,0.24,0.16,0,0,0,0,0,0,0,0,0,1,0,0\n0.16,0.19,0.28,0,0,0,0,0,0,0,0,0,0,1,0\n0.28,0.29,0.19,0,0,0,0,0,0,0,0,0,0,0,1\n";
const drill_02 = "0.43,0.41,0.15,0,1,0,0,0,0,0,0,0,0,0,0\n0.23,0.12,0.11,0,0,0,0,0,0,0,1,0,0,0,0\n0.12,0.32,0.17,0,0,0,0,0,0,0,0,0,0,1,0\n0.21,0.27,0.26,0,0,0,0,0,0,0,0,0,0,0,1\n0.14,0.24,0.3,0,0,0,0,1,0,0,0,0,0,0,0\n0.17,0.33,0.28,0,0,1,0,0,0,0,0,0,0,0,0\n0.19,0.18,0.19,0,0,0,1,0,0,0,0,0,0,0,0\n0.24,0.23,0.35,0,0,0,0,0,0,1,0,0,0,0,0\n0.12,0.14,0.34,0,0,0,0,0,1,0,0,0,0,0,0\n0.28,0.24,0.16,0,0,0,0,0,0,0,0,1,0,0,0\n0.24,0.29,0.28,1,0,0,0,0,0,0,0,0,0,0,0\n0.28,0.39,0.29,0,0,0,0,0,0,0,0,0,1,0,0\n";

const scanDataList = [drill_01, drill_02];

let scanData = {
  "data": drill_01
};

scanButton.addEventListener('click', () => {
Swal.fire({
    title: '3D Scan',
    html: '<b>Scanning in progress...</b>',
    timer: 2500,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      processes.forEach((process, index) => {
        setTimeout(() => {
          b.textContent = `${process}...`;
  
          if (index === processes.length - 1) {
            setTimeout(() => {
              b.innerHTML = '';
            }, 1000);
          }
        }, (index + 1) * 500);
      });
    },
    footer: '<div class="text-center"><button class="swal2-cancel swal2-styled" onclick="Swal.close()">Abort Process</button></div>'
  }).then((result) => {
    console.log(result)
    if (result.dismiss) {
      Swal.fire({
        title: 'Scan Result Ready',
        confirmButtonText: 'Predict Defects',
        confirmButtonColor: '#3085d6',
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        preConfirm: () => {
          Swal.update({
            title: 'Smart Diagnosis', 
            html: '<b>Predicting defects...</b>',
            icon: "",
            showConfirmButton: false, 
          });
          Swal.showLoading()
          return axios.post('http://localhost:3000/awsproxy/predicttoolpartdefect', scanData, {
            headers: { 'Content-Type': 'text/plain' }
          })
          .then(response => {
            return response.data;
          })
          .catch(error => {
            Swal.fire('Error', error, 'error');
          });
        },
        footer: '<div class="text-center"><button class="swal2-cancel swal2-styled" onclick="Swal.close()">Cancel</button></div>'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem('result', JSON.stringify(result.value));
          window.location.href = '/result.html';
        }
      })
    } 
  });
});

const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');

const numberOfRepairs = document.getElementById('number-of-repairs');
const lastRepairDate = document.getElementById('last-repair-date');
const purchaseDate = document.getElementById('purchase-date');
const batteryRuntime = document.getElementById('battery-runtime');
const switchActivation = document.getElementById('switch-activation');

const resultsTableContents = document.querySelectorAll("#results-table tbody tr");

leftArrowButton.addEventListener('click', () => {
  // Use Drill_01
  scanData = {
    "data": drill_01
  };

  numberOfRepairs.innerHTML = "5";
  lastRepairDate.innerHTML = "2011-10-29";
  purchaseDate.innerHTML = "2006-06-19";
  batteryRuntime.innerHTML = "48 h 50 m";
  switchActivation.innerHTML = "332";

  resultsTableContents[0].innerHTML = `
    <td class="whitespace-nowrap px-6 py-2 border-r">234444</td>
    <td class="whitespace-nowrap px-6 py-2 border-r">2010-12-19</td>
    <td class="whitespace-nowrap px-6 py-2 border-r">Motor</td>
  `;
  resultsTableContents[1].style.display = "table-row";
  resultsTableContents[2].style.display = "table-row";

});

rightArrowButton.addEventListener('click', () => {
  // Use Drill_02
  scanData = {
    "data": drill_02
  };

  numberOfRepairs.innerHTML = "9";
  lastRepairDate.innerHTML = "2011-09-09";
  purchaseDate.innerHTML = "2005-05-23";
  batteryRuntime.innerHTML = "96 h 30 m";
  switchActivation.innerHTML = "503";

  resultsTableContents[0].innerHTML = `
    <td class="whitespace-nowrap px-6 py-2 border-r">109283</td>
    <td class="whitespace-nowrap px-6 py-2 border-r">2012-10-12</td>
    <td class="whitespace-nowrap px-6 py-2 border-r">Chuck Drill</td>
  `;
  resultsTableContents[1].style.display = "none";
  resultsTableContents[2].style.display = "none";

});