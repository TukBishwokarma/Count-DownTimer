function countDown(){
    setInterval(function(){
    let dest =new Date("August 8,2024,10:00:00").getTime();
    let cur =new Date().getTime();
    let diff =cur -dest;

    let day =Math.floor(diff/(60*60*24*1000));
    console.log(day);
    let hr =Math.floor(diff%(1000*60*60*24)/(1000*60*60));
    console.log(hr);
    let min =Math.floor(diff%(1000*60*60*24)/(1000*60));
    console.log(min);
    let sec =Math.floor(diff%(1000*60*60*24)/(1000));
    console.log(sec);
    document.getElementById("day").innerHTML=day+"<br>" +"day";
    document.getElementById("hr").innerHTML=hr+"<br>" +"hr";
    document.getElementById("min").innerHTML=min+"<br>" +"min";
    document.getElementById("sec").innerHTML=sec+"<br>" +"sec";

 } ,1000)
}
countDown()