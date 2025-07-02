import { HolidayAutosHomePage } from "@pages/HolidayAutosHomePage";

describe("Holiday Autos - Search Test", () => {
  const homepage = new HolidayAutosHomePage();

  it("should search cars using a valid date range", () => {

    homepage.visit();
  });
});
