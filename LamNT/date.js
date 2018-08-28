function myFunction(){
	var x = document.getElementById("date").value;
	// console.log(x);
	var parts = x.split('-');
	var y = new Date(parts[0],parts[1]-1,parts[2]);
	var day = y.getDay();
	var date = y.getDate();
	var month = y.getMonth() + 1;
	var year = y.getFullYear();
	switch (day) {
		case 1:
			day = "Thứ Hai";
			break;
		case 2:
			day = "Thứ Ba";
			break;
		case 3:
			day = "Thứ Tư";
			break;
		case 4:
			day = "Thứ Năm";
			break;
		case 5:
			day = "Thứ Sáu";
			break;
		case 6:
			day = "Thứ Bảy";
			break;
		case 0:
			day = "Chủ nhật";
			break;
		default:
			break;
	}
	alert(day +" " + "ngày" + " " + date + " " + "tháng" + " " + month + " " + "năm" + " " + year);
}