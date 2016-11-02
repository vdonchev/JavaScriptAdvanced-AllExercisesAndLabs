function extendClass(className, species = 'Human') {
    className.prototype.species = species;
    className.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}