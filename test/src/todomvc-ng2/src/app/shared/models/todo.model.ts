import {
    ElementRef
} from "@angular/core";

import { Direction } from '../miscellaneous/miscellaneous';

﻿export class Tada {

}

/**
 * The todo class
 * See {@link TodoStore} for service using it
 */
export class Todo extends Tada {
    /**
     * Completed status
     */
    completed: boolean;
    /**
     * Editing status
     */
    editing: boolean;

    pos?: PopupPosition;

    [index: number]: string;

    testCommentFunction(dig: number, str: string, bool: boolean): object {
        return {};
    }

    dir: Direction = Direction.Left;

    /**
     * Title
     */
    private _title: string;
    /**
     * @return {string} _title value
     */
    get title() {
        return this._title;
    }
    /**
     * Setter of _title
     * @param  {string} value The new title
     */
    set title(value: string) {
        this._title = value.trim();
    }

    static classMethod() {
        return 'hello';
    }

    /**
     * Returns the runtime path
     * @returns {string}
     */
    get runtimePath() {
      return this._options.runtimePath;
    }

    /**
     * The todo constructor
     * Watch {@link TodoStore} for service using it
     */
    constructor(title: string) {
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }

    /**
     *  fakeMethod !!
     *  @example <caption>Usage of fakeMethod</caption>
     *  returns true;
     *  fakeMethod()
     */
    fakeMethod(): boolean {
        return true;
    }

    azert() {
      return 5;
    }
}

export type PopupPosition = ElementRef | HTMLElement;
