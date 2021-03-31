import { Component, OnInit } from '@angular/core';
import { TopAnime } from 'src/app/models/jikan/topanime.model';
import { JikanService } from 'src/app/services/jikan/jikan-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topAnime: TopAnime[];
  isLoading: boolean;
  gridColumns: number = 3;

  constructor(private jikanService: JikanService) { }

  ngOnInit() {
    this.isLoading = true;
    this.jikanService.getTopAnime()
    .subscribe( res => {
      this.topAnime = res.top
      this.isLoading = false;
      console.log(this.topAnime)
    })
    // return console.log(this.topAnime);
  }

}
