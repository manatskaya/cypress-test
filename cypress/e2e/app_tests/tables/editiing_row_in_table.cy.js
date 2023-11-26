import { clickOnRowsEditButton, clearFoundIdInput, typeValueInIdInput, clickOnEditButton, verifyEditedInputContainsFilledValue } from '../../../models/tables/editRowModel.js'

describe('Editing table', () => {
    beforeEach(()=>{
        cy.visit('/pages/tables/smart-table');
    });
    it('Verify edit of the row in table', () => {
        clickOnRowsEditButton();
        clearFoundIdInput();
        typeValueInIdInput('edited');
        clickOnEditButton()
        verifyEditedInputContainsFilledValue('edited');


            
           // cy.get('ng2-smart-table tbody > tr:nth-child(1)').as('firstRow');

            //cy.get('@firstRow')
              //  .find('i.nb-edit')
              //  .realClick();

            //cy.get('@firstRow')
              //  .find('input[placeholder="ID"]')
             //   .clear()
               // .type('edited')

            //cy.get('@firstRow')
               // .find('i.nb-checkmark')
               // .realClick();

            //cy.get('@firstRow')
             //   .find('div.ng-star-inserted')
               // .should('contain.text', 'edited')
    });
});
