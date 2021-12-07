import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  resultList: string[] = [];

  // Function Role :
  // Display numbers between 1 and N by following the rules:
  // if number can be divided by 3: display Fizz ;
  // if number can be divided by 5: display Buzz ;
  // if number can be divided by 3 AND 5 : display FizzBuzz ;
  // else: display the number.

  public fizzBuzz(event: any): void {
    const N = event?.target.value;
    this.resultList = [];
    for (let i = 1; i <= N; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.resultList.push("FizzBuzz");
      } else if (i % 3 === 0) {
        this.resultList.push("Fizz");
      } else if (i % 5 === 0) {
        this.resultList.push("Buzz");
      } else {
        this.resultList.push(i.toString());
      }
    }
  }

}
