import { Component, OnInit } from '@angular/core';
import { WalletClient } from '../clients/wallet.client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  public userWallets: Observable<any> = this.walletClient.getUserWallets();

  constructor(
    private walletClient: WalletClient
    ) {}

  ngOnInit(): void {
  }

}
