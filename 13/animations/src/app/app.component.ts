import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({ backgroundColor: "red", transform: "translateX(0)" })
      ),
      state(
        "highlighted",
        style({ backgroundColor: "blue", transform: "translateX(100px)" })
      ),
      transition("normal => highlighted", animate(300)),
      transition("highlighted => normal", animate(800)),
    ]),
  ],
})
export class AppComponent {
  state = "normal";
  list = ["Milk", "Sugar", "Bread"];

  onAnimate() {
    this.state == "normal"
      ? (this.state = "highlighted")
      : (this.state = "normal");
  }
  onAdd(item) {
    this.list.push(item);
  }
  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
