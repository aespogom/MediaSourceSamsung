// ANA ESPONERA GOMEZ

const video = document.getElementById("input");
const titulo = document.getElementById("title");
titulo.innerHTML = "Video Demo";

video.addEventListener("change", function() {
    if(this.files[0].type!="video/mp4" && this.files[0].type !="video/mov"){
        swal({
            title:"Formato erroneo",
            text:"Por favor, inserte archivos .mp4 o .mov",
            buttons: false,
            closeOnClickOutside: false,
            icon: "warning",
            closeOnEsc: false,
            timer: 3000
        });
        this.files = null;
    } else {
        console.log(this.files[0]);
        cargarVideo(this.files[0]);
        titulo.innerHTML  = this.files[0].name;
    };
});

function cargarVideo(video) {
    swal({
        title:"Cargando video",
        text:"Espere mientras el video se carga",
        buttons:
            {cancel:
                {
                    text: "Cancel",
                    value: null,
                    visible: false,
                    className: "",
                    closeModal: true
                }
            },
        closeOnClickOutside: false,
        icon: "success",
        closeOnEsc: false,
        timer: 3000
    });

  var media = URL.createObjectURL(video);
  var video = document.getElementById("video");

  video.src = media;
  video.style.display = "block";

  cerrarModal();
}

function cerrarModal() {
  swal.close();
}

