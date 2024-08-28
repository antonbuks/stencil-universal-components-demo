/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@workspace/components';


@ProxyCmp({
  inputs: ['checked', 'cols', 'controlled', 'counter', 'disabled', 'helperText', 'icon', 'inputId', 'invalid', 'label', 'maxLength', 'minLength', 'multiple', 'name', 'placeholder', 'required', 'resize', 'rows', 'size', 'status', 'styles', 'transparent', 'type', 'value', 'variant', 'visibleSize']
})
@Component({
  selector: 'test-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'cols', 'controlled', 'counter', 'disabled', 'helperText', 'icon', 'inputId', 'invalid', 'label', 'maxLength', 'minLength', 'multiple', 'name', 'placeholder', 'required', 'resize', 'rows', 'size', 'status', 'styles', 'transparent', 'type', 'value', 'variant', 'visibleSize'],
})
export class TestInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scale-input', 'scaleInput', 'scale-change', 'scaleChange', 'scale-focus', 'scaleFocus', 'scale-blur', 'scaleBlur', 'scale-keydown', 'scaleKeyDown']);
  }
}


import type { InputChangeEventDetail as ITestInputInputChangeEventDetail } from '@workspace/components';

export declare interface TestInput extends Components.TestInput {
  /**
   * Emitted when a keyboard input occurred.
   */
  'scale-input': EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   *  @deprecated in v3 in favor of kebab-case event names
   */
  scaleInput: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   * Emitted when the value has changed.
   */
  'scale-change': EventEmitter<CustomEvent<ITestInputInputChangeEventDetail>>;
  /**
   *  @deprecated in v3 in favor of kebab-case event names
   */
  scaleChange: EventEmitter<CustomEvent<ITestInputInputChangeEventDetail>>;
  /**
   * Emitted when the input has focus.
   */
  'scale-focus': EventEmitter<CustomEvent<void>>;
  /**
   *  @deprecated in v3 in favor of kebab-case event names
   */
  scaleFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  'scale-blur': EventEmitter<CustomEvent<void>>;
  /**
   *  @deprecated in v3 in favor of kebab-case event names
   */
  scaleBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted on keydown.
   */
  'scale-keydown': EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   *  @deprecated in v3 in favor of kebab-case event names
   */
  scaleKeyDown: EventEmitter<CustomEvent<KeyboardEvent>>;
}


