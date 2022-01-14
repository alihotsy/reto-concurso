const fs = require('fs');
const path = "./db/datos.json"

const saveData = (data) => {
    fs.writeFileSync(path,JSON.stringify(data));
}

const getData = () => {
    if(fs.existsSync(path)){
       const datas =  fs.readFileSync(path);
       return JSON.parse(datas);
    } 
}
module.exports = {
    saveData,
    getData
}