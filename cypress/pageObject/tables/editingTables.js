export class EditTableRow {

    getFirstRowInTable() {
        return cy.get('ng2-smart-table tbody > tr:nth-child(1)').as('firstRow');
    }
    getFirstRowEditButton() {
        return this.getFirstRowInTable('@firstRow').find('i.nb-edit');
    }
    getFirstRowIdInput() {
        return cy.get('@firstRow').find('input[placeholder="ID"]');
    }
    getFirstRowAddButton() {
        return cy.get('@firstRow').find('i.nb-checkmark');
    }
    
    getInputInserted() {
        return cy.get('@firstRow').find('div.ng-star-inserted');
    }

}