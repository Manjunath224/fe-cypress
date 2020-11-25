class DeviceBookingPage {

    get nextStepButton() {
        return {
            type1: '#cucumber-selector-postpaid-device',
            type2: 'div[class*=next-step]'
        };
    }

    get shoppingCartNextStepButton() {
        return '[data-testid="cart-contracting-party--next-button"]'
    }

    get personalDetails() {
        return {
            payerEmail: '#contracting_party_email',
            genderLabel: '#male_label',
            payerInitial: '#contracting_party_initials',
            payerLastName: '#contracting_party_last_name',
            payerBirthday: '#contracting_party_birthdate',
            payerMobile: '#contracting_party_phone_1'
        }
    }

    get address() {
        return {
            country: '#contracting_party_invoice_address_country',
            postalCode: '#contracting_party_invoice_address_postal_code',
            houseNumber: '#contracting_party_invoice_address_house_number',
            houseNumberAdditional: '#contracting_party_invoice_address_house_number_addition',
        }
    }

    get identification() {
        return {
            nationality: '#identity_nationality',
            type: '#identity_identity_type',
            number: '#identity_identity_number',
            expiryDate: '#identity_identity_expiry_date'
        }
    }

    get paymentDetails() {
        return {
            iban: '#payment_details_account_nr'
        }
    }

    get dataPageNextStepButton() {
        return '#nextStepBtn'
    }

    get monthlyLoanAndIncomeDetails() {
        return {
            relationStatus: '#loan_details_family_type',
            houseRentCost: '#loan_details_housing_costs',
            monthlyIncome: '#loan_details_income'
        }
    }

    get loanDataNextButton() {
        return '#nextStepBtn'
    }

    get numberPortabilityNextButton() {
        return '[data-testid="number-porting--next-step-btn"]'
    }

    get overviewPage() {
        return {
            cartBox: '#cart'
        }
    }
}

export default new DeviceBookingPage();
