import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, Input, OnInit, forwardRef } from '@angular/core';

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [INPUT_VALUE_ACCESSOR]
})
export class InputComponent implements ControlValueAccessor {

  private _value: any;

  set value(value: any) {
    this._value = value;
    this.notifyValueChange();
  }

  get value(): any {
    return this._value;
  }

  private _disabled: boolean = false;

  set disabled(value: boolean) {
    this._disabled = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  onChange: Function = () => {};
  onTouched: Function = () => {};

  constructor() { }


  notifyValueChange(): void {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  // called on form init and when ever the value changed
  writeValue(value: any): void {
    this._value = value;
  }

  // let the parent know when there is a change (name.valueChanges.subscribe((value) =>{}))
  registerOnChange(fn: any):  void {
    this.onChange = fn;
  }

  //let the parent know that the control was touched but not changed (name.touched = true and add class ng-touched)
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  //name.disable();
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onBlur() {
N
  }
}
