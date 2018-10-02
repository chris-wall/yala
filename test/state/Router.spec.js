import { routeFrom, goTo } from '../../src/state/Router';

describe('Router', () => {

  it('passes params for home route', done => {
    const verify = p => {
      expect(p.resource).toBe(null);
      expect(p.key).toBe(null);
      expect(p.parent).toBe(null);
      done();
    }

    routeFrom(verify);
    goTo('/');
  });

  it('passes params for list route', done => {
    const verify = (p) => {
      expect(p.resource).toBe('person');
      expect(p.key).toBe(null);
      expect(p.parent).toBe(null);
      done();
    };

    routeFrom(verify);
    goTo('/person');
  });

  it('passes params for detail route', done => {
    const verify = p => {
      expect(p.resource).toBe('person');
      expect(p.key).toBe('123');
      expect(p.parent).toBe(null);
      done();
    }

    routeFrom(verify);
    goTo('/person/123');
  });

  it('passes params for child list route', done => {
    const verify = p => {
      expect(p.resource).toBe('address');
      expect(p.key).toBe(null);
      expect(p.parent == null).toBe(false);

      const parent = p.parent;
      expect(parent.resource).toBe('person');
      expect(parent.key).toBe('123');
      expect(parent.parent).toBe(null);
      done();
    }

    routeFrom(verify)
    goTo('/person/123/address');
  });

  it('passes params for child detail route', done => {
    const verify = p => {
      expect(p.resource).toBe('address');
      expect(p.key).toBe('5');
      expect(p.parent == null).toBe(false);

      const parent = p.parent;
      expect(parent.resource).toBe('person');
      expect(parent.key).toBe('123');
      expect(parent.parent).toBe(null);
      done();
    }

    routeFrom(verify)
    goTo('/person/123/address/5');

  });

  it('passes more than one ancestor in parent tree', done => {
    const verify = p => {
      expect(p.resource).toBe('transaction');
      expect(p.key).toBe('100');
      expect(p.parent == null).toBe(false);

      const parent = p.parent;
      expect(parent.resource).toBe('account');
      expect(parent.key).toBe('123');
      expect(parent.parent == null).toBe(false);

      const gparent = parent.parent;
      expect(gparent.resource).toBe('person');
      expect(gparent.key).toBe('jdoe');
      expect(gparent.parent).toBe(null);
      done();
    }

    routeFrom(verify)
    goTo('/person/jdoe/account/123/transaction/100');
  });
});
