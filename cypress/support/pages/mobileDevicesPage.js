class MobileDevicesPage {

    get deviceListContainer() {
        return '#react-devicelisting-container';
    }

    deviceBrandFilter(brand) {
        return `img[src*="logo-${brand}"]`;
    }

    deviceBlockHeaderName(brand, deviceName) {
        return `h5>a[href*="${brand}"][href*="${deviceName}"]`;
    }

    deviceColourButton(brand, deviceName, colour) {
        return `button[data-testid*=${colour}][data-testid*=${deviceName}][data-testid*=${brand}]`
    }

    deviceSelectButton(brand, deviceName, colour) {
        return `a[id*=${colour}][id*=${deviceName}][id*=${brand}]`
    }
}

export default new MobileDevicesPage();
