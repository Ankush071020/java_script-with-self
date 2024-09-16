form.addEventListener("submit",function(e){
    e.preventDefault();
    const Height=parseInt(document.querySelector("#height").value)
    const Weight=parseInt(document.querySelector("#weight").value)
  const Result=document.querySelector("#results")
  if(isNaN(Height)||Height===""||Height<0){
    Result.innerHTML=`Please enter a valid height:${Height}`
  }
  else if(isNaN(Weight)||Weight===""||Weight<0){
    Result.innerHTML=`Please enter a valid weight:${Weight}`
  }
  else{
    const BMI=(Weight/((Height*Height)/10000)).toFixed(3)
    if(BMI<18.6){
      Result.innerHTML=`<span>you are under weight: ${BMI}</span>`
    }
    else if(BMI>=18.6 && BMI<24.9){
      Result.innerHTML=`<span> you are in normal range: ${BMI}</span>`
    }
    else{
    Result.innerHTML=`<span>you are over weight:${BMI}</span>`
  }
  }
  
  });
  
  
  
  