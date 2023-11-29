import { EditTableRow } from "../../pageObject/tables/editingTables";

const editTableRow = new EditTableRow();

function clickOnRowsEditButton() {
    editTableRow.getFirstRowEditButton().realClick();
}
function clearFoundIdInput() {
    editTableRow.getFirstRowIdInput().clear();
}

function typeValueInIdInput(value) {
    editTableRow.getFirstRowIdInput().type(value);
}
function clickOnEditButton() {
    editTableRow.getFirstRowAddButton().realClick();
}
function verifyEditedInputContainsFilledValue(value) {
    editTableRow.getInputInserted().should('contain.text', value);
}
export{ clickOnRowsEditButton, clearFoundIdInput, typeValueInIdInput, clickOnEditButton, verifyEditedInputContainsFilledValue}