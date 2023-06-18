import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    public _md: MatDialog,
    public dialogRef: MatDialogRef<CreateTaskComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      task: ['', Validators.required]
    });
  }

  submit(){
    console.log('good')
    this.dialogRef.close(
      // {
      //   id: 156,
      //   title: this.createForm.value.task,
      //   completed: false,
      //   userId: 10
      // }
      
    {userId: 10, id: 200, title: this.createForm.value.task, completed: false}
    );
  }

  close(){
    this.dialogRef.close();
  }

}
