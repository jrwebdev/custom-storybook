describe('Storybook screenshots', () => {
  let stories = [];

  before(() => {
    console.log('loading');
    // TODO: Make configurable
    return cy.visit('http://localhost:9001/?iframe.html').then(() => {
      console.log('loaded');
    });
  });

  it('should equal true', () => {
    expect(true).to.eq(false);
  });
});
