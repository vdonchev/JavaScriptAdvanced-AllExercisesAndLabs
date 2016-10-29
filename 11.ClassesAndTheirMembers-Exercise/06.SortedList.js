class SortedList {
    constructor() {
        this.storage = [];
        this.size = 0;
    }

    add(item) {
        this.storage.push(item);
        this._sort();
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.storage.length) {
            this.storage.splice(index, 1);
            this._sort();
            this.size--;
        } else {
            throw new Error;
        }
    }

    get(index) {
        if (index >= 0 && index < this.storage.length) {
            return this.storage[index];
        } else {
            throw new Error;
        }
    }
    
    _sort() {
        this.storage = this.storage.sort((a, b) => a - b);
    }
}

let l = new SortedList();
l.add(5);
l.add(3);
l.add(2);
console.log(l.storage);