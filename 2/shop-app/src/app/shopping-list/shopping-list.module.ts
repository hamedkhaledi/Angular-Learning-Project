import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../Shared/shared.module';
@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'shopping-list',
        component: ShoppingListComponent,
      },
    ]),
  ],
})
export class ShoppingListModule {}
