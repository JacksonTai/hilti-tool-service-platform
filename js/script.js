const scanButton = document.getElementById('scan-button');
scanButton.addEventListener('click', () => {
  Swal.fire({
    title: 'Scanning in progress...',
    // timer: 40000,
    allowOutsideClick: false,
    // showCancelButton: true,
    didOpen: () => {
      Swal.showLoading()

      // Make an AJAX request to an proxy's API endpoint
      axios.post('http://localhost:3000/awsproxy/predicttoolpartdefect', {
        "data": "0.27,0.42,0.25,0,1,0,0,0,0,0,0,0,0,0,0\n0.27,0.14,0.17,0,0,0,0,0,0,0,1,0,0,0,0\n0.32,0.27,0.27,0,0,0,0,0,0,0,0,0,0,1,0\n0.21,0.27,0.26,0,0,0,0,0,0,0,0,0,0,0,1\n0.14,0.24,0.3,0,0,0,0,1,0,0,0,0,0,0,0\n0.17,0.33,0.28,0,0,1,0,0,0,0,0,0,0,0,0\n0.19,0.18,0.19,0,0,0,1,0,0,0,0,0,0,0,0\n0.24,0.23,0.35,0,0,0,0,0,0,1,0,0,0,0,0\n0.12,0.14,0.34,0,0,0,0,0,1,0,0,0,0,0,0\n0.28,0.24,0.16,0,0,0,0,0,0,0,0,1,0,0,0\n0.24,0.29,0.28,1,0,0,0,0,0,0,0,0,0,0,0\n0.28,0.39,0.29,0,0,0,0,0,0,0,0,0,1,0,0\n"
      }, {
        headers: { 'Content-Type': 'text/plain' }
      })
      .then(response => {
      // Handle the response from the API endpoint
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
    footer: '<div class="text-center"><button class="swal2-cancel swal2-styled" onclick="Swal.close()">Cancel</button></div>'
  }).then((result) => {
   
  });
});
// Swal.fire({
//     title: 'Submit your Github username',
//     input: 'text',
//     inputAttributes: {
//       autocapitalize: 'off'
//     },
//     showCancelButton: true,
//     confirmButtonText: 'Look up',
//     showLoaderOnConfirm: true,
//     preConfirm: (login) => {
//       return fetch(`//api.github.com/users/${login}`)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(response.statusText)
//           }
//           return response.json()
//         })
//         .catch(error => {
//           Swal.showValidationMessage(
//             `Request failed: ${error}`
//           )
//         })
//     },
//     allowOutsideClick: () => !Swal.isLoading()
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: `${result.value.login}'s avatar`,
//         imageUrl: result.value.avatar_url
//       })
//     }
//   })