function doctorlogin(){
    var form =$("#doctorloginformid");
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/doctorslogin",
        data:form.serialize(),
        success: function(data){
          document.write(data);
        }
    });
}