function increaseSalaries(salaries) {
    return salaries.map(function(salary, index) {
        if (index < 2) {
         
            return salary * 0.1 + salary;
        } else if (index < 4) {
            
            return salary * 0.2 + salary;
        } else {
           
            return salary * 0.05 + salary;
        }
    });
}

const salaries = [3000, 4000, 5000, 6000, 7000];


const increasedSalaries = increaseSalaries(salaries);

console.log(increasedSalaries); 