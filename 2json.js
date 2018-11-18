const fs = require('fs')
const path =require('path')
//Function definition to map cols as keys to rows  as values  and return it as an object
const tarnsform=(arr1,arr2)=>{
    let Obj={}
        let arr1Copy=arr1
        while(arr1Copy.length>0){
            Obj[arr1Copy.shift()]=arr2.shift()
        }
    return Obj
    }  //End of transform function

const tojson=function(){
    (process.argv[2])?csvFile=process.argv[2] :csvFile='customer-data.csv'    //(process.argv.length>=2)?process.argv.pop():                         
    var jsonArr = []
    data =fs.readFileSync(path.join(__dirname,csvFile),{encoding:'utf-8'})
    //let's extract the first coloumn to get the headings
    //console.log(data) 
    const cols= data.split('\n').shift().split(',')
    var lines = data.split('\n')
    // Loop the lines 
    while(lines.length>0){
        let  currentCustomer=lines.shift().split(',')
        //Now we have an Array of currentCustomer let's call our trnsform function
        let Customer = tarnsform(cols,currentCustomer)
        jsonArr.push(Customer) 
        }               //End while
    // Write json to customer-json.json file in the program directory
    const fileName=path.join(__dirname,'customer-data.json')
    fs.writeFile(fileName,JSON.stringify(jsonArr),err=>{
        if(err) console.log('Error has occured while attempting to write the file ',err.message)
        console.log('           The file was successfuly converted and written to file name : ',fileName)

    })
}// End tojson function our main program entry

//call tojson() function
tojson()
