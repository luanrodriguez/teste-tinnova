interface ElectionCalculatorProps {
  validVotes: number;
  blankVotes: number;
  nullVotes: number;
}

export class ElectionCalculator {
  private _totalVoters: number;
  private _validVotes: number;
  private _blankVotes: number;
  private _nullVotes: number;

  constructor({ validVotes, blankVotes, nullVotes }: ElectionCalculatorProps) {
    this._totalVoters = validVotes + blankVotes + nullVotes;
    this._validVotes = validVotes;
    this._blankVotes = blankVotes;
    this._nullVotes = nullVotes;
  }

  getPercentageOfValidVotes(): number {
    return this._validVotes / this._totalVoters;
  }

  getPercentageOfBlankVotes(): number {
    return this._blankVotes / this._totalVoters;
  }

  getPercentageOfNullVotes(): number {
    return this._nullVotes / this._totalVoters;
  }
}
