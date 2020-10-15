import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('Bob', 42)).toBeTruthy();
  });
});
