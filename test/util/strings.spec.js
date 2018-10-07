import { capitalize, spaceAtCaps } from '../../src/util/strings';

describe('String utilities', () => {
  describe('capitalize(word)', () => {
    it('should capitalize a word', () => {
      const w = capitalize('test');
      expect(w).toBe('Test');

      const a = capitalize('a');
      expect(a).toBe('A');

      const x = capitalize('');
      expect(x).toBe('');
    });

    it('should convert to string and then capitalize', () => {
      const t = capitalize(true);
      expect(t).toBe('True');

      const z = capitalize(0);
      expect(z).toBe('0');
    });
  });

  describe('spaceAtCaps(str)', () => {
    it('should put a space before capital letters', () => {
      const s = spaceAtCaps('ThisIsFun');
      expect(s).toBe('This Is Fun');
    });

    it('should not modify acronymns if requested', () => {
      const s = spaceAtCaps('SomeHTML', true);
      expect(s).toBe('Some HTML');
    });

    it('should default to ignoring acronymns', () => {
      const s = spaceAtCaps('ATest');
      expect(s).toBe('A Test');
    });
  });
});
