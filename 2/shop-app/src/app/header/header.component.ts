import { Component, OnInit } from '@angular/core'
import { DataStorageService } from '../Shared/data-storage.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}
  onSaveData() {
    this.dataStorageService.storeRecipes()
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe()
  }
}
