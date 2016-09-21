function emergencyregistryfunc(){
  var form =$("#emergencyregistryid");
 $.ajax( {
      type: "GET",
      url: "http://localhost:8080/emergencyform",
      data: form.serialize(),
      success:function(data){
          document.write(data);
      }
 });
    console.log("reaching");
}