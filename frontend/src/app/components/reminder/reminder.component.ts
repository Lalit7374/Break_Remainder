// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-reminder',
//   imports: [],
//   templateUrl: './reminder.component.html',
//   styleUrl: './reminder.component.css'
// })
// export class ReminderComponent {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [CommonModule, RouterModule,HttpClientModule],  // ✅ Add HttpClientModule here
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent {
  timeSpent = 0;
  breakSuggestion = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.timeSpent++; 
    }, 60000);
  }
  goToBreakSuggestions(): void {
    this.router.navigate(['/break-suggestions']);
  }


  goBack(): void {
    this.router.navigate(['/']);
  }
}
