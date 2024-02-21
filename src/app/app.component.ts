import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './inicio/menu/menu.component';
import { FooterComponent } from './inicio/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from "./navigation/navigation.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsuariosTableComponent } from "./usuarios-table/usuarios-table.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MenuComponent, FooterComponent, HttpClientModule, FormsModule, NavigationComponent, DashboardComponent, UsuariosTableComponent]
})
export class AppComponent {
  title = 'typo_front';
}
