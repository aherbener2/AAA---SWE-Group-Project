import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showTutorProfile = false;
  pantherID: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit () {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    //if user is logged in show the tutor-profile component
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showTutorProfile = this.roles.includes('ROLE_TUTOR');

      this.pantherID = user.pantherID;
    }
  }

  //component will also display logout button in nav when user is logged
  logout() {
    this.tokenStorageService.signout();
    window.location.reload();
  }
}
