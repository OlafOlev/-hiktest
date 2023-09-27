const chai = require("chai");
const expect = chai.expect;
const matemaatilisedArvutused = require("./kood"); // Impordime peamist koodifaili

// Ühiktestid
describe("matemaatilisedArvutused funktsioon", () => {
    it("Summa - Tagastab õige tulemuse", () => {
        const summaTulemus = matemaatilisedArvutused(10, 5).summa;
        expect(summaTulemus).to.equal(15);
    });

    it("Vahe - Tagastab õige tulemuse", () => {
        const vaheTulemus = matemaatilisedArvutused(10, 5).vahe;
        expect(vaheTulemus).to.equal(5);
    });

    it("Jagatis - Tagastab õige tulemuse", () => {
        const jagatisTulemus = matemaatilisedArvutused(10, 5).jagatis;
        expect(jagatisTulemus).to.equal(2);
    });

    it("Korrutis - Tagastab õige tulemuse", () => {
        const korrutisTulemus = matemaatilisedArvutused(10, 5).korrutis;
        expect(korrutisTulemus).to.equal(50);
    });
});