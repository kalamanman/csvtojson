//var csv is the CSV file with headers
const fs = require ('fs')
const path = require ('path')
//const converter= require('./converter')
const 
convertToJson=(sourceFile='customer-data.csv',targetFile='myJson.json')=>{
    
     let csvData=''
     try{
    csvData =fs.readFileSync(path.join(__dirname,sourceFile),{encoding:'utf8'})
     }catch (e){console.error(e) }
   //saveb the returned data from the function csvData(csvData)  to jsonData before we write it to a file


   console.log('Data :'+csvData)
function csvJSON(csvData){

  let records=csvData.split("\n");

  let  jsonRecords = [];

  let  headers=records[0].split(",");

  for(let i=1;i<records.length;i++){

	  var tempObj = {};
	  var currentRecord=records[i].split(",");

	  for(let j=0;j<headers.length;j++){
		  tempObj[headers[j]] = currentRecord[j];
	  }

	  jsonRecords.push(tempObj);

  }
  
  //return result; //JavaScript object
  return JSON.stringify(jsonRecords); //JSON
}

//main programs call CsvData to convert csv to json save the returned jsonData to a file
     jsonData  =   csvJSON(csvData)
console.log(jsonData)
//write json to a file 
fs.writeFileSync(path.join(__dirname,targetFile),jsonData,{encoding:'utf8'},(error)=>{
  if (error) { throw error; return console.error(error.message);}else
  {
  return console.log('File saves successfully')
  }
})



}

convertToJson(process.argv[2,3])