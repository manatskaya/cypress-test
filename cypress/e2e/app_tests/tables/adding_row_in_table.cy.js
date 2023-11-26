
import { clickOnAddNewRowButton, verifyTypingDataInInputs, clickOnAddTickBox, clickInInputFieldDuringSearch, typeValueToIdInputDuringSearch, verifySearchResultContainsSpecifiedValue } from '../../../models/tables/addRowModel.js'

describe ('Working with tables', () => {

        beforeEach(() => {
            cy.visit('/pages/tables/smart-table');
        });

    it('Verify adding new row in the table', () => {
        clickOnAddNewRowButton();
        verifyTypingDataInInputs('test');
        clickOnAddTickBox();
        clickInInputFieldDuringSearch();
        typeValueToIdInputDuringSearch('test');
        verifySearchResultContainsSpecifiedValue(1, 'test')

    });
});

    

