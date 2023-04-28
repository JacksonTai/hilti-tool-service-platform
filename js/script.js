const scanButton = document.getElementById('scan-button');
scanButton.addEventListener('click', () => {
  Swal.fire({
    title: 'Scanning in progress...',
    timer: 4000,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
        
    }
  });
});
