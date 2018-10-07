import FieldConfig from '../../../src/config/ResourceConfig/FieldConfig';

describe('FieldConfig', () => {
  // -- Key must be a valid string
  it('throws if invalid key', () => {
    expect(() => new FieldConfig.Builder(null)).toThrow();
    expect(() => new FieldConfig.Builder('')).toThrow();
  });

  it('sets default values when instantiated', () => {
    const builder = new FieldConfig.Builder('test');
    expect(builder.check('defaultLabel')).toBe('Test');
    expect(builder.check('type')).toBe('string');
  });

  it('allows setting default label', () => {
    const builder = new FieldConfig.Builder('test');
    builder.withDefaultLabel('Label');
    expect(builder.check('defaultLabel')).toBe('Label');
  });

  it('allows setting data type', () => {
    const builder = new FieldConfig.Builder('test');
    builder.ofType('number');
    expect(builder.check('type')).toBe('number');
  });

  // -- Ensure the builder creates predictable output
  it('builds a valid field configuration', () => {
    const builder = new FieldConfig.Builder('test');
    builder.ofType('bool').withDefaultLabel('A Test');

    const e = builder.build();

    // -- check structure
    const keys = Object.keys(e);
    expect(keys.length).toBe(3);
    expect(keys).toContain('key');
    expect(keys).toContain('defaultLabel');
    expect(keys).toContain('type');

    // -- check actual values
    expect(e.key).toBe('test');
    expect(e.type).toBe('bool');
    expect(e.defaultLabel).toBe('A Test');
  });
});
