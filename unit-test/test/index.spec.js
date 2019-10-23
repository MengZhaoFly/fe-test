// const util = require('../src/index.js');
// console.log(util);
// 测试用例组
describe("equal", function () {
  it("should equal", function () {
    expect(add(1, 2)).toBe(3);
    expect(add(0, 2)).toBe(3);
  });
  it("test promise", function () {
    return testPromise().then(res => {
      expect(res).toBe('ok');
    })
  });
});