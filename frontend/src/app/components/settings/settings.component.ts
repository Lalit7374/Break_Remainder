// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-settings',
//   imports: [],
//   templateUrl: './settings.component.html',
//   styleUrl: './settings.component.css'
// })
// export class SettingsComponent {

// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // ✅ Add HttpClientModule here
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  breakInterval = 30;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ breakInterval: number }>('http://localhost:5000/api/users/settings')
      .subscribe((response: { breakInterval: number }) => {
        this.breakInterval = response.breakInterval;
      });
  }

  updateBreakInterval(): void {
    this.http.post('http://localhost:5000/api/users/settings', { breakInterval: this.breakInterval })
      .subscribe(() => {
        alert('Break interval updated!');
      });
  }
}
