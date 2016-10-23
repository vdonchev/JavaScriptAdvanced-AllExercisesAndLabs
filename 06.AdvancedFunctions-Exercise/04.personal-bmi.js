function personalBmi(personName, age, weight, height) {
    function calculateBmi(w, h) {
        h = Number(h) / 100;
        w = Number(w);
        return w / (h * h);
    }

    let output = {};
    output.name = personName;
    output.personalInfo = {
        age: age,
        weight: Math.round(Number(weight)),
        height: Math.round(Number(height))
    };

    output.BMI = Math.round(calculateBmi(weight, height));

    let status;
    switch (true) {
        case output.BMI < 18.5:
            status = 'underweight';
            break;
        case output.BMI < 25:
            status = 'normal';
            break;
        case output.BMI < 30:
            status = 'overweight';
            break;
        default:
            status = 'obese';
            break;
    }

    output.status = status;
    if (status === 'obese') {
        output.recommendation = 'admission required';
    }

    return output;
}

console.log(personalBmi('Peter', 29, 75, 182));
// console.log(personalBmi('Honey Boo Boo', 9, 57, 137));
