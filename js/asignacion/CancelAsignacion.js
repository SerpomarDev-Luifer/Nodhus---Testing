function cancelarAsignacion(id) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, actualizar"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://esenttiapp-production.up.railway.app/api/statecancel/${id}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al actualizar el estado');
            }
            Swal.fire({
              title: "¡Actualizado!",
              text: "El estado ha sido actualizado.",
              icon: "success"
            });
          })
          .then((response) => {
            time();
          })
          .catch(error => {
            console.error('Error:', error);
            Swal.fire({
              title: "¡Error!",
              text: "Hubo un problema al intentar actualizar el estado.",
              icon: "error"
            });
          });
      }
    });
  }
  
  function time() {
    setTimeout(() => {
        location.reload();
    }, 1500);
  }