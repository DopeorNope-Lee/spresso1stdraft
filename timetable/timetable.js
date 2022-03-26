const HIDDEN_CLASSNAME = "hidden";

let week_num = [1,2,3,4,5,6,7];
let week_name = ["Mon","Tue","Wen","Thu","Fri","Sat","Sun"];
let day_num = [1,2,3,4,5,6,7,8,9,10];

/// name + on/off + num
for( var j=0; j<day_num.length; j++){
    for( var i =0; i<week_num.length; i++){
        let id_off =String(week_name[i])+"_"+day_num[j] +"_off";
        let id_on = String(week_name[i])+"_"+day_num[j] +"_on";
        console.log(id_off);
        console.log(id_on);
        let day_off = document.getElementById(id_off);
        let day_on = document.getElementById(id_on);
        day_off.addEventListener("click",()=>{
            day_off.classList.add(HIDDEN_CLASSNAME);
            day_on.classList.remove(HIDDEN_CLASSNAME);
        })
        day_on.addEventListener("click",()=>{
            day_on.classList.add(HIDDEN_CLASSNAME);
            day_off.classList.remove(HIDDEN_CLASSNAME);
        })
    }
}