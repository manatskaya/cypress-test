import { TableAddNewRow } from "../../pageObject/tables/addingRowInTable";

const tableAddNewRow = new TableAddNewRow();

function clickOnAddNewRowButton() {
    tableAddNewRow.getAddNewRowButton().realClick();
}
function verifyTypingDataInInputs(data) {
    cy.wait(1000);
    tableAddNewRow.getIdFieldInNewRow().each(($el) => {
        cy.wrap($el).type(data);
   });

}
function clickOnAddTickBox() {
    tableAddNewRow.getAddTickBox().realClick();
        cy.wait(1000);
}
function clickInInputFieldDuringSearch() {
    tableAddNewRow.getIdInputDuringSearch().realClick();
}
function typeValueToIdInputDuringSearch(value) {
    tableAddNewRow.getIdInputDuringSearch().type(value);
        cy.wait(100);
}
function verifySearchResultContainsSpecifiedValue(length, text) {
    tableAddNewRow.getRowsFromTable().should('have.length', length)
    .and('contain.text', text);
}
export {clickOnAddNewRowButton, verifyTypingDataInInputs, clickOnAddTickBox, clickInInputFieldDuringSearch, typeValueToIdInputDuringSearch, verifySearchResultContainsSpecifiedValue }







