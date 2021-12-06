import { Component } from '@angular/core';
import { ColorService } from './color.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colorsForm: FormGroup;
  defaultColor: string = 'red';
  tableColumns: string[] = ['hex']; 
  listGridData = new MatTableDataSource<any>([]);

  constructor(public formBuilder: FormBuilder, private colorService: ColorService) {
    this.colorsForm = this.formBuilder.group({
      'colorName': [null]
    });
    this.getColorsData();

    this.colorsForm.get('colorName').valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged())
      .subscribe(value => {
        if (value != '') {
          this.defaultColor = value;
        } else {
          this.defaultColor = 'red';
        }
        this.getColorsData();
      });


  }

  getColorsData() {
    this.colorService.getColorCode(this.defaultColor)
      .subscribe(res => {

        this.listGridData = new MatTableDataSource(res.colors)

        console.log('getColorsData res', this.listGridData);
      })
  }
}

