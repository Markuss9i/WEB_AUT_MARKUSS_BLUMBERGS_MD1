export class BasePage {
    static visit() {
        return cy.visit(this.url);
    }

    static get url() {
        return "https://demoqa.com/selectable";
    }

    static get gridButton(){
        return cy.get('[id="demo-tab-grid"]');
    }

}