import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup }from '@angular/forms';
import { JikanService } from 'src/app/services/jikan/jikan-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFormGroup: FormGroup;

  constructor(
    private jikanService: JikanService,
    private fb: FormBuilder,

  ) {
      // anime: new FormControl;
  }

  ngOnInit(): void {
    this.createForms();
    this.listToFormChange();
  }

  createForms() {
    this.searchFormGroup = this.fb.group({
      anime:['']
    })
  }

  listToFormChange() {
    this.searchFormGroup.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  searchAnime(){
    //query api for search term and update ui
    console.log(this.searchFormGroup.value.anime)
  }

}
