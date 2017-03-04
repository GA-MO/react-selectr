const expect = require('chai').expect;
const Select = require('../src/index');

import {
  getValueArray,
  getValueString,
  getValueSelected,
} from '../src/utils';

describe('Select', function() {
  describe('temp', function() {
    it('true should be true', function(){
      expect(true).to.equal(true);
    });
  });
});

describe('Util', function() {
  it('getValueArray: Input array', () => {
    const value = [
      {
        label: 'Man',
        value: 'M',
      },
      {
        label: 'Women',
        value: 'W',
      },
    ];
    const result = ['M', 'W'];
    expect(getValueArray(value)).to.eql(result);
  });

  it('getValueArray: Input object', () => {
    const value = {
      label: 'Man',
      value: 'M',
    };
    const result = ['M'];
    expect(getValueArray(value)).to.eql(result);
  });

  it('getValueArray: Input string', () => {
    const value = 'M,W';
    const result = ['M', 'W'];
    expect(getValueArray(value)).to.eql(result);
  });

  it('getValueString', () => {
    const value = ['M', 'W'];
    const result = 'M,W';
    expect(getValueString(value)).to.eql(result);
  });

  it('getValueSelected', () => {
    const options = [
      {
        label: 'Man',
        value: 'M',
      },
      {
        label: 'Women',
        value: 'W',
      },
    ];
    const result = {
      label: 'Man',
      value: 'M',
    };
    expect(getValueSelected(options, 'M')).to.eql(result);
  });
  
});

