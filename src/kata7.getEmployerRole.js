const getEmployerRole = (employeeName, employees) => {
        if(!employees) {
            return 'You did not provide me with somewhere to search'
        }
        if (!employeeName) {
            return 'You didnt provide an employee to search'
        }
        const name =  employees.find(e => e.name === employeeName);
        
        if (!name){
            return 'Does not work here'
        }
        return name.role
    }
module.exports = getEmployerRole;

