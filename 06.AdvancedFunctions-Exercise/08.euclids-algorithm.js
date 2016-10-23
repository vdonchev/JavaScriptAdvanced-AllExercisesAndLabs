function euclidAlgorithm(numA, numB) {
    if (numA == 0) {
        return numB;
    }

    if (numB == 0) {
        return numA;
    }

    return euclidAlgorithm(numB, numA % numB);
}

console.log(euclidAlgorithm(252, 105));