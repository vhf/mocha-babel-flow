// @flow
class Index {
  order: number;

  constructor({ order = 6 }: { order: number }) {
    this.order = order;
  }
}

module.exports = Index;
