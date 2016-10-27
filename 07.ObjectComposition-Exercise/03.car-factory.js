function carProducer(requirements) {
    let carFactory = (function () {
        let engines = {
            90: {power: 90, volume: 1800},
            120: {power: 120, volume: 2400},
            200: {power: 200, volume: 3500}
        };

        let carriages = {
            hatchback: {type: 'hatchback', color: ''},
            coupe: {type: 'coupe', color: ''}
        };

        function selectEngine(power) {
            return engines[Object.keys(engines).filter(e => e >= power)[0]];
        }

        function selectCarriage(type, color) {
            let carriage = carriages[type];
            carriage.color = color;

            return carriage;
        }

        function selectWheels(size) {
            if (size % 2 == 0) {
                size--;
            }

            let wheels = [];
            for (let i = 0; i < 4; i++) {
                wheels.push(size)
            }

            return wheels;
        }

        function produceCar(requirements) {
            let car = {};
            car.model = requirements.model;
            car.engine = selectEngine(requirements.power);
            car.carriage = selectCarriage(requirements.carriage, requirements.color);
            car.wheels = selectWheels(requirements.wheelsize);

            return car;
        }

        return {produceCar};
    })();

    return carFactory.produceCar(requirements);
}

console.log(carProducer({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));