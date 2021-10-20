var count_val = 10;
var zero_state = false;
var button_event = document.getElementById("btn");
const countdownEl = document.getElementById("timer");
var input_un = document.getElementById("username");
var worker_name;
var input_pw = document.getElementById("password");
var qrcode_data;
var generated_qrcode;
var iscorrect;

function createQR(){

	var isworking = document.getElementById("work_state").options[document.getElementById("work_state").selectedIndex].text;
	var date = new Date();
	var hr = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	//시간 표시에 대한 설정
	hr = (hr < 10) ? "0" + hr : hr;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	// 시간 표시
	var time = hr + ":" + min + ":" + sec;
	count++;

	qrcode_data = worker_name + ";" + isworking + ";" + time + ";" + dev_val + ";" + count;
	generated_qrcode = new QRCode(qrcode, {text: qrcode_data, width: 250, height: 250});
}

function checkAccount(){
	if(input_un.value == 'bpsse' && input_pw.value == '590130'){
		worker_name = "신성은";
		iscorrect = 1;
	}
	else if(input_un.value == 'bpcmj' && input_pw.value == '980521'){
		worker_name = "추민정";
		iscorrect = 1;
	}
	else if(input_un.value == 'bpksy' && input_pw.value == '089608'){
		worker_name = "김세영";
		iscorrect = 1;
	}	
	else if(input_un.value == 'bplcb' && input_pw.value == '112233'){
		worker_name = "이창빈";
		iscorrect = 1;
	}
	else if(input_un.value == 'bpyjh' && input_pw.value == '006625'){
		worker_name = "윤지호";
		iscorrect = 1;
	}
	else if(input_un.value == 'bplhb' && input_pw.value == '980507'){
		worker_name = "이현빈";
		iscorrect = 1;
	}
	else if(input_un.value == 'bpkdh' && input_pw.value == '030403'){
		worker_name = "강동현";
		iscorrect = 1;
	}
	else if(input_un.value == 'bppjh' && input_pw.value == '590130'){
		worker_name = "박지환";
		iscorrect = 1;
	}	
	else{
		iscorrect = 0;
	}
}

function updateTimer(){

	checkAccount();
	if(iscorrect == 1){
		if(count_val >= 0){
			if(count_val == 10){
					createQR();
					zero_state = false;
			}
			countdownEl.innerHTML = count_val--;
			var count_down = setTimeout(updateTimer, 1000);
		}
		else if(count_val < 0){
			clearTimeout(count_down);
			zero_state = true;
			if(zero_state){
				document.getElementById("qrcode").innerHTML = '';
				countdownEl.innerHTML = '';
			}
			count_val = 10;
		}
	}
	else if(iscorrect == 0){
		alert("아이디 또는 비밀번호를 확인하세요.");
	}

}

button_event.addEventListener("click", function(e){
	//createQR();
	updateTimer();
}, false)
