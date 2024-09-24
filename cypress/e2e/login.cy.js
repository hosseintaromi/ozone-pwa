describe('PhoneNumber Component', () => {
  beforeEach(() => {
    cy.visit('/login'); // مسیر صفحه‌ای که می‌خواهید تست کنید.
  });

  it('should display the form correctly', () => {
    cy.get('[data-testid="phone-input"]').should('be.visible');
    cy.get('[data-testid="submit-button"]').should('be.visible');
  });

  //   it('should not allow submitting an empty form', () => {
  //     cy.get('[data-testid="submit-button"]').click({ force: true });

  //     // انتظار داریم که پیام خطا ظاهر شود
  //     cy.get('[data-testid="phone-error"]').should('contain', 'Phone number is required');
  //   });

  it('should display an error for an invalid phone number', () => {
    cy.get('[data-testid="phone-input"]').type('123');
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[data-testid="phone-error"]').should('contain', 'شماره وارد شده صحیح نمی باشد');
  });

  it('should accept a valid phone number and display success message', () => {
    cy.get('[data-testid="phone-input"]').type('09123456789');
    cy.get('[data-testid="submit-button"]').click();
    cy.intercept('POST', '**/auth/v1/app/init').as('loginRequest');
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.contains('ورود کد تایید').should('be.visible');
  });

  it('should reset the form when the reset icon is clicked', () => {
    cy.get('[data-testid="phone-input"]').type('09123456789');
    cy.get('[data-testid="reset-icon"]').click();
    cy.get('[data-testid="phone-input"]').should('have.value', '');
  });
  it('should open and close the bottom sheet with terms and conditions', () => {
    // کلیک روی لینک شرایط و ضوابط
    cy.get('[data-testid="terms-link"]').click({ force: true });

    // صبر برای اطمینان از نمایش انیمیشن
    cy.wait(1500); // افزایش زمان انتظار برای پایان انیمیشن

    // بررسی اینکه BottomSheet باز شده است با استفاده از ویژگی data-rsbs-state
    cy.get('[data-testid="bottom-sheet"]').should('have.attr', 'data-rsbs-state', 'open');

    // بررسی اینکه BottomSheet دارای ویژگی‌های CSS مناسب است
    cy.get('[data-testid="bottom-sheet"]').should('have.css', 'opacity', '1');

    // بستن BottomSheet (در صورت نیاز)
    cy.get('[data-testid="terms-link"]').click({ force: true });
  });
});
