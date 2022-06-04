const date = new Date()

const printDate = () => {
    date1 = new Date().toJSON().slice(0 , 10);
    console.log(date1)
    }


    const printMonth = () => {
        const month = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December" ]
        let nameOfMonth = month[date.getMonth()];
    console.log(nameOfMonth);
    }
    
    const getBatchInfo = ()=>{
        console.log("Radon, Week 3, the topic for today is Nodejs module system");
         }

         module.exports.printDate=printDate;
         module.exports.printMonth=printMonth;
         module.exports.getBatchInfo=getBatchInfo;
