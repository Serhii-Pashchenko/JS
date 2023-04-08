describe("Scale", () => {
  const desc = "<p>Check the Scale function</p>";

  describe(desc, () => {
    it("The 'photo-scale' class added to the photo", () => {
      expect(scale()).toBe(true);
    });
  });
});

describe("Scroll", () => {
  const desc = "<p>Check the Scroll function</p>";

  describe(desc, () => {
    it("The Scroll function have been called", () => {
      spyOn(window, 'scroll');
      document.addEventListener("keyup", (event) => {
        scroll(event);
        expect(scroll).toHaveBeenCalled();
      });
    });
  });
});