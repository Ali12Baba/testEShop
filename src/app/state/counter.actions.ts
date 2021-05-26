import { createAction } from "@ngrx/store";

export var increment = createAction('increment');
export var decrement = createAction('decrement');
export var reset = createAction('reset');
