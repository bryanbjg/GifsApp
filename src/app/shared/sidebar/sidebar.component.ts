import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get record() {

    return this.gifsService.record;


  }

  constructor(private gifsService: GifsService) { }

  search(gif: string) {

    this.gifsService.searchGifs(gif);
  }
}





