function doctorregisterfunction(){
    location.href="/doctoregistry.html";
}


function doctorformsubmit(){
    var form = $("#doctorregistryformid");
    $.ajax({
        type : "GET",
        url: "http://localhost:8080/doctorregistryform",
      data: form.serialize(),
      success: function(data){
          document.write(data);
      }
    });
}

