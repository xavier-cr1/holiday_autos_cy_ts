export class HolidayAutosHomePage {
    visit(): void {
        cy.visit("https://www.holidayautos.com");
        cy.url().should('contain', '/searchcars');
    }

    enterPickUpLocation(location: string): void {
        let enterPickUpLocationSelector: string = '#pickupLocation';
        cy.get(enterPickUpLocationSelector).click();
        cy.get(enterPickUpLocationSelector).type(location).type('{enter}');
        cy.get('#item-0-0').click()
    }

    selectPickUpAndReturnDates(pickupDate: Date, returnDate: Date): void {
        cy.get('#pickupDate').click();
        this.selectDate(pickupDate);

        cy.get('#returnDate').click();
        this.selectDate(returnDate);
    }

    selectDate(localDate: Date): void {
    }
}