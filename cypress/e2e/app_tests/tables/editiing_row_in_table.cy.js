import { navigateToURL, verifyLandedURLisCorrect } from '../../../models/helpers.js';
import { clickOnRowsEditButton, clearFoundIdInput, typeValueInIdInput, clickOnEditButton, verifyEditedInputContainsFilledValue } from '../../../models/tables/editRowModel.js'

describe('Editing table', () => {
    beforeEach(()=>{
        navigateToURL('/pages/tables/smart-table');
        verifyLandedURLisCorrect('/pages/tables/smart-table');
    });
    it('Verify edit of the row in table', () => {
        clickOnRowsEditButton();
        clearFoundIdInput();
        typeValueInIdInput('edited');
        clickOnEditButton()
        verifyEditedInputContainsFilledValue('edited');
    });
});
