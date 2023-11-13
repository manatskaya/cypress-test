describe('first test suite', () => {
        it('first test', () => {
                cy.visit('pages/forms/layouts');
                cy.get(".form-inline .appearance-filled.size-medium.status-primary.shape-rectangle.transitions").should("contain.text", "Submit")
        });
});
describe('second test suite', () => {
        it('first test',() => {
                cy.visit('/pages/forms/layouts');
                cy.get('.inner-circle').eq(0).prev();
        })
        it('Verify real event',() => {
                cy.visit('/pages/forms/layouts');
                cy.get('span:contains("Option 1")').realClick({pointer:'mouse'});
                cy.get('#inputEmail1').focus().realType('Some text {enter}');
        })
        it('Verify tooltip',() => {
                cy.visit('pages/modal-overlays/tooltip');
                cy.contains('Show Tooltip').eq(0).realHover();
        })
})
describe('Scrolling on the page', () => {
        it('scrolling using scroll into view', () => {
               // cy.visit('auth/login');
                //cy.get('[aria-label="Register"]').scrollIntoView({duration: 500});
        });
        it('scrollingTo', () => {
                cy.visit('auth/login');
                cy.get('[aria-label="Register"]').scrollTo("bottom", {ensureScrollable:false});
        }
        )
        it('working with tables', () => {
                const element = [];
                cy.visit('/pages/tables/smart-table');
                cy.get('[placeholder="ID"]').type(12);
                cy.wait(1000);
                cy.get('tbody tr td').each(($el) => {
                        let element1 = $el.text();
                        element.push(element1);
                        cy.log(element);
                })
        })
        it.only('working with tables', () => {
                const element = [];
                const elementToVerify = ['12', 'Jacob', 'Thornton', '@jacob', 'jacob@yandex.ru', '48']
                cy.visit('/pages/tables/smart-table');
                cy.get('[placeholder="ID"]').type(5);
                cy.wait(1000);
                cy.get('tbody tr td').find('[ng-reflect-ng-switch]').each(($el) => {
                        let element1 = $el.text();
                        element.push(element1);
                        cy.log(element);
                }).then(() => {
                        expect(element[0]).to.include(12);
                        expect(element).eql(elementToVerify);
                        expect(element).to.have.length(6);
                });
                element.forEach(() => {
                        cy.get(`[data-test=id${select}]`).click();
                        cy.go("back");
                });
        })
});