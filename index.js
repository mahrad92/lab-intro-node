class SortedList {
  constructor(items = []) {
    this.items = items;
    this.length = items.length;
  }
  add(itemA) {
    this.items.push(itemA);
    this.items = this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos > this.items.length || pos < 0) throw new Error("OutOfBounds");
    else return this.items[pos];
  }

  max() {
    let m;
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      let m = this.items.reduce((a, c) => (a > c ? a : c));
      return m;
    }
  }

  min() {
    let m;
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      let m = this.items.reduce((a, c) => (a < c ? a : c));
      return m;
    }
  }

  sum() {
    let m = this.items.reduce((a, c) => a + c, 0);
    return m;
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    let m = this.items.reduce((a, c) => a + c, 0) / this.items.length;
    return m;
  }
}
let a = new SortedList([1, 2, 3]);
console.log("m", a.avg());

module.exports = SortedList;
