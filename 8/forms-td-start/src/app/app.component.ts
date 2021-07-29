import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) signUpForm: NgForm;
  defaultQuestion = 'pet'
  answer = ''
  genders = ['male', 'female']
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData:{
    //   username:suggestedName,
    //   email:''
    // },secret:'pet',questionAnswer:'',gender:'male'})
    this.signUpForm.form.patchValue({ userData: { username: suggestedName } })
  }
  // onSubmit(form : NgForm){
  //   console.log(form)
  // }
  onSubmit() {
    console.log(this.signUpForm);
  }
}
