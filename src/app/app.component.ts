import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  form : any
  
  constructor(private fb: FormBuilder){
  }
  initForm(){
    this.form = this.fb.group({
      input : '',
      output: ''
    })
  }
  ngOnInit(){
    this.initForm()
  }
  onClick(){
    let regex = '📦.*'
    let matches = [...(this.form.value.input.matchAll(regex))]
    let result = Array.from(matches, m=> m[0])
    result.map((val, i) => result[i] = val.replace(")", "").replace(" (", " | "))
    console.log(result)
    this.form.patchValue({output: result.join("\n")})
  }
  
}
