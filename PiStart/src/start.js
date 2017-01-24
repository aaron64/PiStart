$(document).ready(function(e) {
	setBackground();
	updateDate();
	loop();

	function loop() {
		updateTime();
		setTimeout(loop, 1000);
	}

	function setBackground()
	{
		//$("body").css("background", "url('res/bg"+Math.floor(Math.random() * 4)+".gif')");
		//$("body").css("background-size", "1920px 1080px");
	}

	function updateDate() {
		var d = new Date();

		var day = d.getDay();
		var dayOfMonth = d.getDate();
		var month = d.getMonth() + 1;
		var year = d.getYear();

		var date = "";

		// format date
		if(dayOfMonth < 10)
			dayOfMonth = "0" + dayOfMonth;

		if(month < 10)
			month = "0" + month;

		// get day of week
		switch(day)
		{
			case 0:
					day = "Sunday";
			break;
			case 1:
					day = "Monday";
			break;
			case 2:
					day = "Tuesday";
			break;
			case 3:
					day = "Wednesday";
			break;
			case 4:
					day = "Thursday";
			break;
			case 5:
					day = "Friday";
			break;
			case 6:
					day = "Saturday";
			break;
		}

		// construct date
		date = day + "\n" + month + "/" + dayOfMonth;

		$("#date-component").text(date);
	}

	function updateTime() {
		var d = new Date();

		var hours = d.getHours();
		var minutes = d.getMinutes();

		var time = "";

		// format time
		if(hours > 12)
			hours -= 12;

		if(hours < 10)
			hours = "0" + hours;

		if(minutes < 10)
			minutes = "0" + minutes;

		// construct time
		time = hours + ":" + minutes;

		$("#time-component").text(time);
	}
});