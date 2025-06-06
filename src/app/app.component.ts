import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  // template: `<h1>Anuar Rozman</h1>`,
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="Logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home>
          <h1> Home App</h1>
        </app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'homes';
}
