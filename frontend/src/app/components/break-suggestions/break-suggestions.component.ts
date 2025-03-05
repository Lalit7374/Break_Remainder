import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-break-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './break-suggestions.component.html',
  styleUrls: ['./break-suggestions.component.css']
})
export class BreakSuggestionsComponent {
  breakSuggestions = [
    "Take a short walk 🚶",
    "Stretch for 5 minutes 🧘",
    "Drink a glass of water 💧",
    "Listen to relaxing music 🎵",
    "Close your eyes and breathe deeply 😌",
    "Do some light exercise 🏋️‍♂️"
  ];

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/reminder']);
  }
}
