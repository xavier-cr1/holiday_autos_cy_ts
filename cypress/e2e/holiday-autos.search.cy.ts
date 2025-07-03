import { HolidayAutosHomePage } from "@pages/HolidayAutosHomePage";

describe("Holiday Autos - Search Test", () => {
  const homepage = new HolidayAutosHomePage();

  it("Test 1: Search for cars using pickup location and date range", () => {
    homepage.visit();
    homepage.enterPickUpLocation('Barcelona');
  });
});
