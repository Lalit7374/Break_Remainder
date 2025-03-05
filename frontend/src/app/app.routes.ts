// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BreakSuggestionsComponent } from './components/break-suggestions/break-suggestions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reminder', component: ReminderComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'break-suggestions', component: BreakSuggestionsComponent }, // ✅ Add this
  { path: '**', redirectTo: '' }  // Redirect unknown paths to Home
];
