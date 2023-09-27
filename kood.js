function matemaatilisedArvutused(a, b) {
    let summa = a + b;
    let vahe = a - b; // Parandus: vähendame a-st b, mitte a-st a
    let jagatis = Math.floor(a / b);
    let korrutis = a * b;

    return { summa, vahe, jagatis, korrutis };
}

module.exports = matemaatilisedArvutused;