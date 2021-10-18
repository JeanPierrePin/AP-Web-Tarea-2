var getData = function (){
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var correo=document.getElementById("correo").value;
    var contraseña=document.getElementById("contraseña").value;
    var telefono=document.getElementById("telefono").value;

    if (nombre =="") {
        document.getElementById("nombre").focus();
    } else {
        if (apellido =="") {
            document.getElementById("apellido").focus() ;
        } else {
            if (correo =="") {
                document.getElementById("correo").focus() ;
            } else {
                if (contraseña =="") {
                    document.getElementById("contraseña").focus ();
                } else {
                    if (telefono =="") {
                        document.getElementById("telefono").focus() ;
                    } else {
                        console.log(nombre+" "+apellido+" "+correo+" "+contraseña+" "+telefono);  
                        document.getElementById("nombre").value="";
                        document.getElementById("apellido").value="";
                        document.getElementById("correo").value="";
                        document.getElementById("contraseña").value="";
                        document.getElementById("telefono").value="";
                        document.getElementById("nombre").focus();
                    }
                } 
            }
        }
    }
    
}

