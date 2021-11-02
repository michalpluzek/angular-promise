import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <p>{{ result }}</p> `,
})
export class AppComponent {
  result = 2 + 3;
}
