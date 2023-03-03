import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReceitasService } from '../services/receitas.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './receita-add-edit.component.html',
  styleUrls: ['./receita-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit{

  empForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private recService: ReceitasService,
              private dialogRef: MatDialogRef<EmpAddEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) {
    this.empForm =  this._fb.group({
      companyName: '',
      companyCode: '',
      itemName: '',
      itemCode: '',
      itemAmount: ''
    })
  }

  ngOnInit(): void {
      this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this.recService
        .updateReceita(this.data.id, this.empForm.value)
        .subscribe({
          next: (val: any) => {
            alert('Formulario atualizado');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }else {
        this.recService
        .addReceita(this.empForm.value)
        .subscribe({
          next: (val: any) => {
            alert('Receita adicionada');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });

      }
    }
  }
}
