// task_5/js/main.ts

export interface MajorCredits {
  credits: number;
  _majorCreditBrand: void; // Branding for type safety
}

export interface MinorCredits {
  credits: number;
  _minorCreditBrand: void; // Branding for type safety
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorCreditBrand: undefined
  };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorCreditBrand: undefined
  };
}