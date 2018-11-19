const fs = require('fs')
const path =require('path')
//Function definition to map cols as keys to rows  as values  and return it as an object
const tarnsform=(arr1,arr2)=>{
    let Obj={}
    for(var i =0 ;i <arr1.length;i++)      
                {     
                   Obj[arr1[i]]=arr2[i]      
                }
            return JSON.stringify(Obj,null,2) 
    }  //End of transform function

const tojson=function(){
    (process.argv[2])?csvFile=process.argv[2] :csvFile='customer-data.csv'    //(process.argv.length>=2)?process.argv.pop():                         
    var jsonArr = []
    data =fs.readFileSync(path.join(__dirname,csvFile),{encoding:'utf-8'})
    //let's extract the first coloumn to get the headings
    //console.log(data) 
     var lines= data.split('\n')
     var cols= lines.shift().split(',')

    // Loop the lines 
    while(lines.length>0){
        
        let  currentCustomer=lines.shift().split(',')
        //Now we have an Array of currentCustomer let's call our trnsform function
        let Customer = tarnsform(cols,currentCustomer)
        jsonArr.push(Customer)
    }
    // Write json to customer-json.json file in the program directory
    console.log(jsonArr[5])
    const fileName=path.join(__dirname,'customer-data.json')
    fs.writeFile(fileName,JSON.stringify(jsonArr,null,2),(err)=>{
        console.log(jsonArr)
        if(err) console.log('Error has occured while attempting to write the file ',err.message)
        console.log('           The file was successfuly converted and written to file name : ',fileName)

    })
}// End tojson function our main program entry

tojson()
