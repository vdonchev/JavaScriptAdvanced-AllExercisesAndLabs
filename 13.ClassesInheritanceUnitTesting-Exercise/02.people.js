function createPeopleClasses() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Employee class cannot be instantiated.')
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(`${this.name} ${currentTask}`);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this._calculateSalary()} this month.`);
        }

        _calculateSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks.push('is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks.push('is working on a complicated task.');
            this.tasks.push('is taking time off work.');
            this.tasks.push('is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;

            this.tasks.push('scheduled a meeting.');
            this.tasks.push('is preparing a quarterly report.');
        }

        _calculateSalary() {
            return this.salary + this.dividend;
        }
    }

    return {Employee, Junior, Senior, Manager};
}