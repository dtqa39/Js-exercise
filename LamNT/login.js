function myFunction(){
	var email = document.getElementById("email");
	var pass = document.getElementById("pass");
	if ( email.value === "") {
		document.getElementById("emailHelp").innerHTML = "email ko duoc de trong!";
	} else {
		document.getElementById("emailHelp").style.display = "none";
	}
	if (pass.value === "") {
		document.getElementById("passHelp").innerHTML = "password ko duoc de trong!";
	} else {
		document.getElementById("passHelp").style.display = "none";
	}
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      	var obj = JSON.parse(this.responseText);
	      	for (var i = 0; i < obj.length; i++) {
		     	if (email.value == obj[i]["email"] && pass.value == obj[i]["password"]) {
		      		document.getElementById("demo2").style.display = "none";
		      		document.getElementById("modal").style.display = "block";
		      		document.getElementById("hello").innerHTML = "Hello" + " " + obj[i]["first_name"] + " " + obj[i]["last_name"] + "!";		      		
		      		if (obj[i]["is_chairman"] == 1) {
		      			document.getElementById("role").innerHTML = "User role: is_chairman";
		      		} 
		      		if (obj[i]["is_admin"] == 1) {
		      			document.getElementById("role").innerHTML = "User role: is_admin";
		      		}
		      		break;
		     	} else {
		     		document.getElementById("demo1").style.display = "none";
		      		document.getElementById("demo2").style.display = "block";
		      		document.getElementById("demo2").innerHTML = "email hoặc mật khẩu không chính xác";
		     	}  	
	      	}
	    }
	};
	xhttp.open("GET", "https://training.gemvietnam.com/dummy-api/users.json", true);
	xhttp.send();
}