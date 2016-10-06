describe("Hourglass Challenge", function() {
  var array2D = [
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 9, 2, -4, -4, 0 ],
    [ 0, 0, 0, -2, 0, 0 ],
    [ 0, 0, -1, -2, -4, 0 ]
  ]

  it("returns the sum of Hourglass properly", function() {
    expect(calculate_sum(array2D)).toBe(13);
  });
});