describe("Ticket", function() {
  describe("cost", function() {
    it("will charge an adult the premium ticket price", function() {
      var newTicket = Object.create(Ticket);
      expect(newTicket.cost()).to.equal(12);
    });
    it("will apply a discount to ticket price for seniors", function() {
      var newTicket = Object.create(Ticket);
      newTicket.age = "senior";
      expect(newTicket.cost()).to.equal(10);
    });
  });
});
