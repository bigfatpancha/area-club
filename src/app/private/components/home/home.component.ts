import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  form!: FormGroup

  get document () {
    return this.form.get('document')
  }

  get points () {
    return this.form.get('points')
  }

  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {
    this.form = this.fb.group({
      document: [null, [Validators.required]],
      points: [null, [Validators.required, Validators.min(1)]]
    })
  }

  addPoints (): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
    // TODO chequear que el usuario existe
    console.log('se van a sumar ', this.points?.value, 'al usuario', this.document?.value)
  }
}
