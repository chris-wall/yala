import YalaConfig from '../../src/config/YalaConfig';
import EnumConfig from '../../src/config/EnumConfig';
import ResourceConfig from '../../src/config/ResourceConfig';

describe('YalaConfig', () => {
  describe('YalaConfig.enum', () => {
    it('provides access to new enum configuration', () => {
      const yala = new YalaConfig.Builder('test');
      const e = yala.enum('test');

      expect(e instanceof EnumConfig.Builder).toBe(true);
      expect(e.key).toBe('test');
    });

    it('allows determination of existing enum', () => {
      const yala = new YalaConfig.Builder('test');
      const e = yala.enum('test');
      expect(yala.hasEnum('test')).toBe(true);
    });

    it('provides access to existing enum configuration', () => {
      const yala = new YalaConfig.Builder('test');
      const e = yala.enum('yc_test');
      e.values('x', 'y');

      const f = yala.enum('yc_test');
      expect(f).toBe(e);
      expect(f.check('values').length).toBe(2);
    });
  });

  /**
   * Test YalaConfig.resource(key)
   */
  describe('YalaConfig.resource', () => {
    it('provides access to new resource configuration', () => {
      const yala = new YalaConfig.Builder('test');
      const e = yala.resource('test');

      expect(e instanceof ResourceConfig.Builder).toBe(true);
      expect(e.key).toBe('test');
    });

    it('allows determination of existing resource', () => {
      const yala = new YalaConfig.Builder('test');
      const e = yala.resource('test');
      expect(yala.hasResource('test')).toBe(true);
    });

    it('provides access to existing resource configuration', () => {
      const yala = new YalaConfig.Builder('test');
      const e = yala.resource('yc_test');
      const f = yala.resource('yc_test');
      expect(f).toBe(e);
    });
  });
});
