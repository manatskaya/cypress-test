import { TableAddNewRow } from "../../pageObject/tables/addingRowInTable";

const tableAddNewRow = new TableAddNewRow();

export function clickOnAddNewRowButton() {
    tableAddNewRow.getAddNewRowButton().realClick();
}
export function verifyTypingDataInInputs(data) {
    cy.wait(1000);
    tableAddNewRow.getIdFieldInNewRow().each(($el) => {
        cy.wrap($el).type(data);
   });

}
export function clickOnAddTickBox() {
    tableAddNewRow.getAddTickBox().realClick();
        cy.wait(1000);

}
export function clickInInputFieldDuringSearch() {
    tableAddNewRow.getIdInputDuringSearch().realClick();
    
}
export function typeValueToIdInputDuringSearch(value) {
    tableAddNewRow.getIdInputDuringSearch().type(value);
        cy.wait(100);
}
export function verifySearchResultContainsSpecifiedValue(length, text) {
    tableAddNewRow.getRowsFromTable().should('have.length', length)
    .and('contain.text', text);
    
}







