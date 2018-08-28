function register(){
	// var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#|$%|^&|*])(?=.{6,16}$)");
	var reLower = new RegExp("^(?=.*[a-z])");
	var reUpper = new RegExp("^(?=.*[A-Z])");
	var reNumber = new RegExp("^(?=.*[0-9])");
	var reSpecial = new RegExp("^(?=.*[!@#|$%|^&|*])");
	var reMinMax = new RegExp("^(?=.{6,16}$)");
	var pass = document.getElementById("pass").value;
	if (reLower.test(pass) === false) {
		document.getElementById("alert-pass--success").style.display = "none";
		document.getElementById("alert-pass--fail").style.display = "block";
		document.getElementById("alert-pass--fail").innerHTML = "Vui lòng nhập password gồm ít nhất 1 ký tự thường!";	
	} else if (reUpper.test(pass) === false) {
		document.getElementById("alert-pass--success").style.display = "none";
		document.getElementById("alert-pass--fail").style.display = "block";
		document.getElementById("alert-pass--fail").innerHTML = "Vui lòng nhập password gồm ít nhất 1 ký tự hoa!";
	} else if (reNumber.test(pass) === false) {
		document.getElementById("alert-pass--success").style.display = "none";
		document.getElementById("alert-pass--fail").style.display = "block";
		document.getElementById("alert-pass--fail").innerHTML = "Vui lòng nhập password gồm ít nhất 1 chữ số!";
	} else if (reSpecial.test(pass) === false) {
		document.getElementById("alert-pass--success").style.display = "none";
		document.getElementById("alert-pass--fail").style.display = "block";
		document.getElementById("alert-pass--fail").innerHTML = "Vui lòng nhập password gồm ít nhất 1 ký tự đặc biệt (@,#,$,%..)!";
	} else if (reMinMax.test(pass) === false) {
		document.getElementById("alert-pass--success").style.display = "none";
		document.getElementById("alert-pass--fail").style.display = "block";
		document.getElementById("alert-pass--fail").innerHTML = "Vui lòng nhập password có ít nhất 6 ký tự và nhều nhất 16 ký tự!";
	} else {
		document.getElementById("alert-pass--success").style.display = "block";
		document.getElementById("alert-pass--fail").style.display = "none";
		document.getElementById("alert-pass--success").innerHTML = "Password hợp lệ!";
	}
}
function emailCheck(){
	var email = document.getElementById('email').value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      	var obj = JSON.parse(this.responseText);
	      	var reEmail = new RegExp("^(?=.*@)");
	      	for (var i = 0; i < obj.length; i++) {
		     	if (email == obj[i]["email"]) {
		     		document.getElementById('alert-email--fail').style.display = "block";
		     		document.getElementById('alert-email--fail').innerHTML = "Email đã được đăng ký!";
		     		document.getElementById('alert-email--success').style.display = "none";
		      		break;
		     	} else if (reEmail.test(email) == false) {
		     		document.getElementById('alert-email--fail').style.display = "block";
		     		document.getElementById('alert-email--fail').innerHTML = "Email không hợp lệ!";
		     		document.getElementById('alert-email--success').style.display = "none";
		     	} else {
		     		document.getElementById('alert-email--success').style.display = "block";
		     		document.getElementById('alert-email--fail').style.display = "none";
		     		document.getElementById('alert-email--success').innerHTML = "Email hợp lệ!";
		     	}  	
	      	}
	    }
	};
	xhttp.open("GET", "https://training.gemvietnam.com/dummy-api/users.json", true);
	xhttp.send();
}
function success(){
	if (document.getElementById("alert-pass--success").innerHTML === "Password hợp lệ!" && document.getElementById('alert-email--success').innerHTML === "Email hợp lệ!") {
		document.getElementById("modal").style.display = "block";
		// document.getElementById("form").style.display = "none";
	} else {
		document.getElementById("modal").style.display = "none";
		document.getElementById("form").style.display = "block";
	}
}