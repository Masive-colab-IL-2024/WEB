import Swal from 'sweetalert2';

const ShowAlert = (type, message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  if (type === 'success') {
    Toast.fire({
      icon: 'success',
      title: message
    });
  } else if (type === 'error') {
    Toast.fire({
      icon: 'error',
      title: message
    });
  } else {
    console.error('Unknown alert type:', type);
  }
};

export default ShowAlert;
