const processes = ["Comparing with CAD", "Obtaining surface deviation"]
const scanButton = document.getElementById('scan-button');
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
          return axios.post('http://localhost:3000/awsproxy/predicttoolpartdefect', {
            "data": "0.43,0.41,0.15,0,1,0,0,0,0,0,0,0,0,0,0\n0.23,0.12,0.11,0,0,0,0,0,0,0,1,0,0,0,0\n0.12,0.32,0.17,0,0,0,0,0,0,0,0,0,0,1,0\n0.21,0.27,0.26,0,0,0,0,0,0,0,0,0,0,0,1\n0.14,0.24,0.3,0,0,0,0,1,0,0,0,0,0,0,0\n0.17,0.33,0.28,0,0,1,0,0,0,0,0,0,0,0,0\n0.19,0.18,0.19,0,0,0,1,0,0,0,0,0,0,0,0\n0.24,0.23,0.35,0,0,0,0,0,0,1,0,0,0,0,0\n0.12,0.14,0.34,0,0,0,0,0,1,0,0,0,0,0,0\n0.28,0.24,0.16,0,0,0,0,0,0,0,0,1,0,0,0\n0.24,0.29,0.28,1,0,0,0,0,0,0,0,0,0,0,0\n0.28,0.39,0.29,0,0,0,0,0,0,0,0,0,1,0,0\n"
          }, {
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
