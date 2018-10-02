import FieldConfig from '../../../src/config/ResourceConfig/FieldConfig';
import ResourceConfig from '../../../src/config/ResourceConfig';

describe('ResourceConfig', () => {

  /**
   * Test accessing the FieldConfig(s) for the Resource
   */
  describe('ReleaseConfig.field', () => {
    it('provides access to new field configuration', () => {
      const res = new ResourceConfig.Builder('test');
      const e = res.field('test');
      expect(e instanceof FieldConfig.Builder).toBe(true);
      expect(e.key).toBe('test');
    });

    it('allows determination of existing field', () => {
      const res = new ResourceConfig.Builder('test');
      const e = res.field('test');
      expect(res.hasField('test')).toBe(true);
    });

    it('provides access to existing field configuration', () => {
      const res = new ResourceConfig.Builder('test');
      const e = res.field('yc_test');
      e.ofType('number');

      const f = res.field('yc_test');
      expect(f).toBe(e);
      expect(f.check('type')).toBe('number');
    });
  });
});
