import * as utils from '../utils'

const testData = [
  ['deepak', 'Deepak'],
  ['dan abramov', 'Dan Abramov'],
  ['something different to learn', 'Something Different To Learn'],
]

describe('Utils.toProperCase()', () => {
  it.each(testData)('"%s".toProperCase() works ', (input, expected) => {
    expect(input.toProperCase()).toEqual(expected);
  })
})