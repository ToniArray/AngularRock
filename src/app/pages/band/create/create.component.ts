import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public formCreateBand: FormGroup
  public artist: FormGroup
  public members: any
  public alertSuccess: boolean = false
  public alertDanger:boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private localstorageService: LocalstorageService
  ) {
    this.formCreateBand = this.formBuilder.group({
      id: '',
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      members: this.formBuilder.array([
        this.newMember()
      ])
    });
    this.members = this.formCreateBand.get("members") as FormArray
  }

  ngOnInit(): void {
  }

  newMember(): FormGroup {
    return this.formBuilder.group({
        name: ['', Validators.required],
        instrument: ['', Validators.required]
    });
  }

  addArtist() {
    this.members.push(this.newMember())
  }

  removeArtist(i: number) {
    this.members.removeAt(i);
  }

  save() {
    this.alertDanger = false
    this.alertSuccess = false
    if(this.formCreateBand.valid) {
      let bands = this.localstorageService.getData('bands')
      this.formCreateBand.value['id'] = (bands.length+1).toString()
      bands.push(this.formCreateBand.value)
      this.localstorageService.setData('bands', bands)
      this.alertSuccess = true
    } else {
      this.alertDanger = true
    }
  }

}
