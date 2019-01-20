import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBindIOModule } from 'ngx-bind-io';
import {
  BasicBindInputWithDeepInheritsComponent,
  BasicBindInputWithDeepInheritsParentComponent
} from './bind-input-with-deep-inherits.component';
import {
  BasicBindInputWithExcludeComponent,
  BasicBindInputWithExcludeParentComponent
} from './bind-input-with-exclude.component';
import {
  BasicBindInputWithIncludeComponent,
  BasicBindInputWithIncludeParentComponent
} from './bind-input-with-include.component';
import { BasicBindInputComponent, BasicBindInputParentComponent } from './bind-input.component';
import { BasicBindIOWithMixinsComponent, BasicBindIOWithMixinsParentComponent } from './bind-io-with-mixins.component';
import { BasicBindIOComponent, BasicBindIOParentComponent } from './bind-io.component';
import {
  BasicBindOutputWithClickComponent,
  BasicBindOutputWithClickParentComponent
} from './bind-output-with-click.component';
import {
  BasicBindOutputWithCustomClickComponent,
  BasicBindOutputWithCustomClickParentComponent
} from './bind-output-with-custom-click.component';
import { BasicBindOutputComponent, BasicBindOutputParentComponent } from './bind-output.component';

@NgModule({
  imports: [CommonModule, NgxBindIOModule],
  declarations: [
    BasicBindInputComponent,
    BasicBindInputParentComponent,
    BasicBindInputWithExcludeComponent,
    BasicBindInputWithExcludeParentComponent,
    BasicBindInputWithIncludeComponent,
    BasicBindInputWithIncludeParentComponent,
    BasicBindInputWithDeepInheritsComponent,
    BasicBindInputWithDeepInheritsParentComponent,
    BasicBindIOWithMixinsComponent,
    BasicBindIOWithMixinsParentComponent,
    BasicBindOutputComponent,
    BasicBindOutputParentComponent,
    BasicBindOutputWithClickParentComponent,
    BasicBindOutputWithClickComponent,
    BasicBindIOParentComponent,
    BasicBindIOComponent,
    BasicBindOutputWithCustomClickParentComponent,
    BasicBindOutputWithCustomClickComponent
  ],
  exports: [
    BasicBindInputParentComponent,
    BasicBindInputWithExcludeParentComponent,
    BasicBindInputWithIncludeParentComponent,
    BasicBindInputWithDeepInheritsParentComponent,
    BasicBindIOWithMixinsParentComponent,
    BasicBindOutputParentComponent,
    BasicBindOutputWithClickParentComponent,
    BasicBindIOParentComponent,
    BasicBindOutputWithCustomClickParentComponent
  ]
})
export class BasicsModule {}