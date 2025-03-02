import { JSDOM } from 'jsdom';

interface FakeBrowserAction {
    pressButton(buttonId: string): string;
}

class FakeBrowserActionImpl implements FakeBrowserAction {
    private dom: JSDOM;

    constructor() {
        this.dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
    }

    pressButton(buttonId: string): string {
        const document = this.dom.window.document;

        document.body.insertAdjacentHTML('beforeend', `
            <div>
                <button id="${buttonId}" onclick="
                    document.body.insertAdjacentHTML('beforeend', '<span id=\\'clicked\\'>I have been clicked</span>');
                ">Click Me</button>
            </div>
        `);

        const buttonElement = document.getElementById(buttonId);
        if (buttonElement) {
            // fake click
            buttonElement.insertAdjacentHTML('beforeend', '<span id=\'clicked\'>I have been clicked</span>');
        }

        const clickedElement = document.getElementById('clicked');
        return clickedElement.innerHTML;
    }
}

export default FakeBrowserActionImpl;