class HomePage {

    get acceptCookieDisclaimerButton() {
        return '[data-click-cat=cookies]';
    }

    get mobilePhoneTopBar() {
        return '#cc-mobiel';
    }

    get internetTopBar() {
        return '#cc-tv-internet';
    }

    get mobilePhoneButton() {
        return '[data-testid=btn-telefoons]';
    }

}

export default new HomePage();
