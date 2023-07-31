export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [303, 'wrong combination of skills'],
      [40, 'username is too long'],
      [777, 'character file not found'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code) !== true) {
      throw new Error('Unknown error');
    }
    return this.errors.get(code);
  }
}
