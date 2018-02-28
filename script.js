// 注释有空再写 累成狗了
javascript:
    var QT = new Array();
    var OP = new Array();
   
    var ID1 =  Math.random() * 10;
    var AN1 = "q1_";
    if(ID1 >= 0 && ID1 < 5){
        AN1 += "1";
        OP[1] = 1;
    }
    else {
        AN1 += "2";
        OP[1] = 2;
    }
    QT[1] = document.getElementById(AN1);

    var ID2 =  Math.random() * 10;
    var AN2 = "q2_";
    if(ID2 >= 0 && ID2 < 1) {
        AN2 += "1";
        OP[2] = 1;
    }
    else if(ID2 >= 1 && ID2 < 8){
        AN2 += "2";
        OP[2] = 2;
    }
    else if(ID2 >= 8 && ID2 <= 9){
        AN2 += "3";
        OP[2] = 3;
    }
    else {
        AN2 += "4";
        OP[2] = 4;
    }
    QT[2] = document.getElementById(AN2);

    
  
    var ID3 = Math.random() * 100;
    var AN3 = "q3_";
    if(ID3 >= 0 && ID3 < 85){
        AN3 += "1";
        OP[3] = 1;
    }
    else {
        AN3 += "2";
        OP[3] = 2;
    }
    QT[3] = document.getElementById(AN3);
    
    
    var ID4 = Math.random() * 10;
    var AN4 = "q4_";
    if(ID4 >= 0 && ID4 < 6) {
        AN4 += "1";
        OP[4] = 1;
        
    }
    else if(ID4 >= 6 && ID4 < 9){
        AN4 += "2";
        OP[4] = 2;
    }
    else{
        AN4 += "3";
        OP[4] = 3;
    }
    QT[4] = document.getElementById(AN4);
    
    
    
    
    var ID5 = Math.random() * 100;
    var AN5 = "q5_";
    if(ID5 >= 0 && ID5 < 55) {
        AN5 += "1";
        OP[5] = 1;
    }
    else if(ID5 >= 55 && ID5 < 85) {
        AN5 += "2";
        OP[5] = 2;
    }
    else if(ID5 >= 85 && ID5 < 95) {
        AN5 += "3";
        OP[5] = 3;
    }
    else {
        AN5 += "4";
        OP[5] = 4;
    }
    QT[5] = document.getElementById(AN5);

    var ID7 = Math.random() * 10;
    var AN7 = "q7_";
    if(ID7 >= 0 && ID7 < 1){
        AN7 += "1";
        OP[7] = 1;
    }
    else if(ID7 >= 1 && ID7 < 7){
        AN7 += "2";
        OP[7] = 2;
    }
    else {
        AN7 += "3";
        OP[7] = 3;
    }
    QT[7] = document.getElementById(AN7);



    for(var i = 1;i <=7;i++){
        if(i != 6){
            QT[i].click();
            QT[i].checked = true;
            QT[i].focus();
            QT[i].value = OP[i];
            QT[i].blur();
        }
    }
    var array = new Array();
    var as = document.getElementsByTagName("a");
    var preName = "";
    var change = false;
    for(var i=0; i < as.length; i++){
        if(as[i].getAttribute("rel") != null && as[i].nextSibling.getAttribute("type") == "checkbox"){
            var name = as[i].nextSibling.getAttribute("name");
            var check = as[i].nextSibling.getAttribute("checked");
            if(check == "checked"){
                as[i].click();
            }
            if(preName == "" || preName == name){
                if(Math.random() * 10 > 5){
                    as[i].click();
                    change = true;
                }
            }
            var next = as[i + 1];
            if(next.getAttribute("rel") != null && next.nextSibling.getAttribute("type") == "checked" && next.getAttribute("name") != name){
                if(!change){
                    as[i].click();
                }
                change = false;
            }
            if(i == as.length - 1 && !change){
                as[i].click();
            }
            preName = name;
        }
    }
function validate(){return true;}
var button = document.getElementById("submit_button");
window.setTimeout(button.click(),5000);

