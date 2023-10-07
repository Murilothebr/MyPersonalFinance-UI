import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() logoutEvent = new EventEmitter<void>();

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
