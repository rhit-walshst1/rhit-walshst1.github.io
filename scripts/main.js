/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Sam Walsh
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.counter = 0;

/** function and class syntax examples */
rhit.functionName = function () {
	/** function body */
};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
	const buttons = document.querySelectorAll(".avocado");

	for (const button of buttons) {
		button.onclick = (event) => {
            if (rhit.counter == 0) {
                rhit.counter = 1;
                document.getElementById("theHead").classList.add("avo-header");
                document.getElementById("about").classList.add("avo-body");
                document.getElementById("theFoot").classList.add("avo-footer");
                for (const navButton of document.getElementsByClassName("nav-button")) {
                    navButton.classList.add("navocado");
                }
            } else {
                rhit.counter = 0;
                document.getElementById("theHead").classList.remove("avo-header");
                document.getElementById("about").classList.remove("avo-body");
                document.getElementById("theFoot").classList.remove("avo-footer");
                for (const navButton of document.getElementsByClassName("nav-button")) {
                    navButton.classList.remove("navocado");
                }
            }
		}
	}
};

rhit.main();
