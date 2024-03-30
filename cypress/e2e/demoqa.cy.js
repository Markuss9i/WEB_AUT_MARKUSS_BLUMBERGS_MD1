import { BasePage } from "../pageObjects/BasePage";
import { GridButtons } from "../pageObjects/GridButtons";

describe("DemoQA", () => {
    context("Grid", () => {
        beforeEach(() => {
            BasePage.visit();
        });

        it("MD1 Scenario", () => {
            BasePage.gridButton.click();
            GridButtons.twoButton.click();
            GridButtons.fourButton.click();
            GridButtons.sixButton.click();
            GridButtons.eightButton.click();

            GridButtons.twoButton.should('class', "active");
            GridButtons.fourButton.should('class', "active");
            GridButtons.sixButton.should('class', "active");
            GridButtons.eightButton.should('class', "active");

            
            GridButtons.oneButton.should('not.have.value', 'active');
            GridButtons.threeButton.should('not.have.value', 'active');
            GridButtons.fiveButton.should('not.have.value', 'active');
            GridButtons.sevenButton.should('not.have.value', 'active');
            GridButtons.nineButton.should('not.have.value', 'active');
        });

    });
});