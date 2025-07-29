"use strict";
// task_5/js/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMajorCredits = sumMajorCredits;
exports.sumMinorCredits = sumMinorCredits;
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _majorCreditBrand: undefined
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _minorCreditBrand: undefined
    };
}
