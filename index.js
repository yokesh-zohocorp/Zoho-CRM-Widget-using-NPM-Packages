const dayjs = require('dayjs');
const { v4: uuidv4} = require('uuid');

const now = dayjs();
console.log(now.format('YYYY-MM-DD HH:mm:ss'));
console.log(uuidv4());

//This will be triggered when page is loaded
ZOHO.embeddedApp.on("PageLoad", function(data){
    console.log(data);
    var recordData = {
        "Company": "Zylker",
        "Last_Name": "Peterson"
    }
    ZOHO.CRM.API.insertRecord({Entity:"Leads",APIData:recordData,Trigger:["workflow"]}).then(function(data){
        console.log(data);
    });
})


//We need to import the widgets sdk before initializing
//Once imported we need to initialize the widget sdk by using below method so that we can use sdk methods
ZOHO.embeddedApp.init();