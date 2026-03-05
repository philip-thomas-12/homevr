AFRAME.registerComponent('height-control', {

    init: function () {

        const el = this.el;

        document.addEventListener("keydown", function (e) {

            let pos = el.getAttribute("position");

            // press E to go upstairs
            if (e.key === "e") {
                pos.y = 3.8;
            }

            // press Q to go downstairs
            if (e.key === "q") {
                pos.y = 1.6;
            }

            el.setAttribute("position", pos);

        });

    }

});