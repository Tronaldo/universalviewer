/// <reference path="../../../js/jquery.d.ts" />

export class Panel {
    $element: JQuery;
    fitToParentWidth: bool;
    fitToParentHeight: bool;

    constructor($element: JQuery, fitToParentWidth?: bool, fitToParentHeight?: bool) {
        this.$element = $element;
        this.fitToParentWidth = fitToParentWidth || false;
        this.fitToParentHeight = fitToParentHeight || false;

        this.create();
    }

    create(): void {
        // todo: can't use static BaseApp.RESIZE property here without breaking inheritance.
        // possible bug with TS 0.9
        $.subscribe('onResize', () => {
            this.resize();
        });
    }

    resize(): void {
        var $parent = this.$element.parent();

        if (this.fitToParentWidth) {
            this.$element.actualWidth($parent.width());
        }

        if (this.fitToParentHeight) {
            this.$element.actualHeight($parent.height());
        }
    }
}