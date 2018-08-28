function myFunction(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      	var obj = JSON.parse(this.responseText);      	
	      	for (var j = 1; j <= 10; j++) {
	      		document.getElementById('item-'+j).onclick = function clickPage(){
		      		var table = document.getElementById("tbody");
					var row;
					var item = document.getElementById(this.id).innerHTML;	
	      			document.getElementById("tbody").innerHTML = "";
	      			var t = 0;
	      			for (var i = (item-1)*10; i < item*10; i++) { 
					    row = table.insertRow(t);
					    t=t+1;
					    row.insertCell(0).innerHTML = i + 1;
					    row.insertCell(1).innerHTML = obj[i]['id'];
					    row.insertCell(2).innerHTML = obj[i]['first_name'];
					    row.insertCell(3).innerHTML = obj[i]['last_name'];
					    row.insertCell(4).innerHTML = obj[i]['display_name'];
					    row.insertCell(5).innerHTML = obj[i]['username'];
					    row.insertCell(6).innerHTML = obj[i]['email'];
					    row.insertCell(7).innerHTML = obj[i]['email_alt'];
					    row.insertCell(8).innerHTML = obj[i]['is_chairman'];
					   	row.insertCell(9).innerHTML = obj[i]['is_admin'];
					    row.insertCell(10).innerHTML = obj[i]['status'];
					    row.insertCell(11).innerHTML = obj[i]['order'];
					    row.insertCell(12).innerHTML = obj[i]['password'];
					    row.insertCell(13).innerHTML = obj[i]['language_use_in_email'];
			      	}
		      	}
	      	}
	    }
	};
	xhttp.open("GET", "https://training.gemvietnam.com/dummy-api/users.json", true);
	xhttp.send();
}