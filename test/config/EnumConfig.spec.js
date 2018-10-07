import EnumConfig from '../../src/config/EnumConfig';

describe('EnumConfig', () => {
  // -- Key must be a valid string
  it('throws if invalid key', () => {
    expect(() => new EnumConfig.Builder(null)).toThrow();
    expect(() => new EnumConfig.Builder('')).toThrow();
  });

  it('throws if invalid value object', () => {
    const builder = new EnumConfig.Builder('test');
    expect(() => builder.values({ value: '' })).toThrow();
    expect(() => builder.values());
  });

  it('converts primative values into value objects', () => {
    const builder = new EnumConfig.Builder('test');
    builder.values('testone', 42, true);

    // -- check actual values
    expect(builder.check('key')).toBe('test');
    const values = builder.check('values');
    expect(values.length).toBe(3);
    expect(values[0].key).toBe('testone');
    expect(values[0].label).toBe('testone');
    expect(values[0].value).toBe('testone');
    expect(values[1].key).toBe('42');
    expect(values[1].label).toBe('42');
    expect(values[1].value).toBe(42);
    expect(values[2].key).toBe('true');
    expect(values[2].label).toBe('true');
    expect(values[2].value).toBe(true);
  });

  // -- Ensure the builder creates predictable output
  it('builds a valid enum configuration', () => {
    const builder = new EnumConfig.Builder('test');
    builder.values('testone', {
      key: 'two',
      value: 'testtwo',
      label: 'Test Two'
    });

    const e = builder.build();

    // -- check structure
    const keys = Object.keys(e);
    expect(keys.length).toBe(2);
    expect(keys).toContain('key');
    expect(keys).toContain('values');

    // -- check actual values
    expect(e.key).toBe('test');
    expect(e.values.length).toBe(2);
    expect(e.values[0].key).toBe('testone');
    expect(e.values[0].value).toBe('testone');
    expect(e.values[1].key).toBe('two');
    expect(e.values[1].value).toBe('testtwo');
  });
});
