async function api(lat,lon){
   


    let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a64bc1cd0aee1aeeda6f831e942c371f`,{
        method:"GET"
    }).then((res)=>res.json()).then((json)=>{return json.list});
    let  filterData =[];
    for (let i = 0; i < data.length; i++) {
      
        if (filterData.length === 0 || filterData[filterData.length - 1].dt_txt.split(" ")[0] != data[i].dt_txt.split(" ")[0]) {
          //  if(filterData.length!=0)console.log(data[i].dt_txt.split(" ")[0],"  ",filterData[filterData.length - 1].dt_txt.split(" ")[0])
            filterData.push(data[i]);
        }
    }
 
    return filterData;


}

module.exports ={api};