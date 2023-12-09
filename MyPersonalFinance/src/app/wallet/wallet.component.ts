import { Component, OnInit } from '@angular/core';
import { WalletClient } from '../clients/wallet.client';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddStockModalComponent } from '../add-stock-modal/add-stock-modal.component';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  public userWallets: Observable<any> = this.walletClient.getUserWallets();

  constructor(
    private dialog: MatDialog,
    private walletClient: WalletClient
    ) {}

  ngOnInit(): void {
  }


  openAddStockModal(userWallet: any): void {
    const dialogRef = this.dialog.open(AddStockModalComponent, {
      width: '400px', 
      data: { userWallet: userWallet }
    });

    dialogRef.afterClosed().subscribe(result => {
    
    });
  }
}
