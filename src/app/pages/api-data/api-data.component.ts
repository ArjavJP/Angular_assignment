import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './api-data.component.html'
})
export class ApiDataComponent implements OnInit {
  users: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('API error:', err)
    });
  }
}
