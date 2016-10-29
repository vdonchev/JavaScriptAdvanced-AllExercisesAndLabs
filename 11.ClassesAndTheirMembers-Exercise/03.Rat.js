class Rat {
    constructor(name) {
        this.name = name;
        this.rats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat);
        }
    }

    getRats() {
        return this.rats;
    }
    
    toString() {
        let output = '';
        output += this.name + '\n';
        for (let rat of this.rats) {
            output += `##${rat}\n`;
        }

        return output.trim();
    }
}