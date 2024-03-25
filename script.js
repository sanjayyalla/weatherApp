let input_val =document.getElementById("input");
let loc1=document.getElementById("loc");
let desc=document.getElementById("desc");
let btn=document.getElementById("button");
let tempVal=document.getElementById("temp-val");
const apiKey='7520c1c4010d427aeb986bd1f993fb51';

btn.onclick=function(){
    
    
    if(input_val.value=="")
    {
       alert("Enter City name") 
    }else{
        city=input_val.value;
        // console.log(city);
        // console.log(apiKey)
         url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        fetch(url).then(res=>res.json())
        .then((data)=>{
            console.log(data);
            const {name}=data;
            console.log(name);
            const {feels_like}=data.main;
            console.log(feels_like);
            const {main}=data.weather[0];
           // console.log(description);
            tempVal.innerText=Math.floor(feels_like-273);
            loc1.innerText=name;
            desc.innerText=main;
            
        })
        .catch(()=>{
            alert("Enter valid city");
        })
        
    }
}