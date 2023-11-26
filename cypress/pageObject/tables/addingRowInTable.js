export class TableAddNewRow {
    getAddNewRowButton() {
        return cy.get('a .nb-plus');
    }
    getIdFieldInNewRow(){
        return cy.get('ng2-smart-table tr:nth-child(3) td input');
    }
    getAddTickBox(){
       return cy.get('i.nb-checkmark');
    }
    getIdInputDuringSearch() {
        return cy.get('th.ng2-smart-th.id.ng-star-inserted input');
    }
    getRowsFromTable(){
        return cy.get('ng2-smart-table tbody tr');
    }

}
