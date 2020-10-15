import { Coder } from './coder.model';

describe('Coder', () => {
  it('should create an instance', () => {
    expect(new Coder(42, 'Tom', 'Smith', new Date(), 2300)).toBeTruthy();
  });
});
