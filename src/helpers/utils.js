export function toProperCase(){
  const words = this.split(' ')
  return words.map(w => w[0].toUpperCase()+w.slice(1)).join(' ')
}

String.prototype.toProperCase = toProperCase