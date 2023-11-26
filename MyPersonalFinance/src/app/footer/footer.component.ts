import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
