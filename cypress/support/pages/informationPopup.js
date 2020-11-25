class InformationPopup {

    get closePopUp() {
        return '[data-testid="popup-button--close"]';
    }

    get popUpButtonNo() {
        return '[data-testid="ziggo-customer-popup-button-no"]';
    }

    get popUpButtonYes() {
        return '[data-testid="ziggo-customer-popup-button-yes"]';
    }
}

export default new InformationPopup();
