import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'
import { Ingredient } from 'src/app/Shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm
  subscription: Subscription
  editMode: boolean = false
  editedItemIndex: number
  editedItem: Ingredient
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true
        this.editedItemIndex = index
        this.editedItem = this.slService.getIngredient(index)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      },
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  onClear(): void {
    this.slForm.reset()
    this.editMode = false
  }
  onDelete(): void {
    this.slService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }
  onSubmit(form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient)
    }
    this.editMode = false
    form.reset()
  }
}
