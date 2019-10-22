const getEmployerRole = (employeeName, employees) => {
    const name =  employees.find(e => e.name === employeeName);
     return name.role
       
   };
module.exports = getEmployerRole;
