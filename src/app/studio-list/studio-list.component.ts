import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudioService } from '../services/studio-service';
import { IStudio } from '../interfaces/studio';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.css']
})
export class StudioListComponent implements OnInit, OnDestroy {
  listTitle = 'Studios';
  subscription!: Subscription;

  studios: IStudio[] = [];

  constructor(private studioService: StudioService) {}

  ngOnInit(): void {
    this.subscription = this.studioService.getStudios().subscribe({
      next: studios => {
        this.studios = studios;
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

