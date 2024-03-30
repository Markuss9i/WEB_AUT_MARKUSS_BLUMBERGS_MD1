import { BasePage } from "./BasePage";

export class GridButtons extends BasePage{
    
    static get oneButton(){
        return cy.get('[id="row1"]').contains("One");
    }

    static get twoButton(){
        return cy.get('[id="row1"]').contains("Two");
    }

    static get threeButton(){
        return cy.get('[id="row1"]').contains("Three");
    }

    static get fourButton(){
        return cy.get('[id="row2"]').contains("Four");
    }

    static get fiveButton(){
        return cy.get('[id="row2"]').contains("Five");
    }

    static get sixButton(){
        return cy.get('[id="row2"]').contains("Six");
    }

    static get sevenButton(){
        return cy.get('[id="row3"]').contains("Seven");
    }

    static get eightButton(){
        return cy.get('[id="row3"]').contains("Eight");
    }

    static get nineButton(){
        return cy.get('[id="row3"]').contains("Nine");
    }


}