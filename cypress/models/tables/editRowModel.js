import { EditTableRow } from "../../pageObject/tables/editingTables";

const editTableRow = new EditTableRow();

export function clickOnRowsEditButton() {
    editTableRow.getFirstRowEditButton().realClick();
}
export function clearFoundIdInput() {
    editTableRow.getFirstRowIdInput().clear();
}

export function typeValueInIdInput(value) {
    editTableRow.getFirstRowIdInput().type(value);
}
export function clickOnEditButton() {
    editTableRow.getFirstRowAddButton().realClick();
}
export function verifyEditedInputContainsFilledValue(value) {
    editTableRow.getInputInserted().should('contain.text', value);
}