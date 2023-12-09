import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-stock-modal',
  templateUrl: './add-stock-modal.component.html',
  styleUrls: ['./add-stock-modal.component.css']
})
export class AddStockModalComponent {
  userId: string | null = null;
  walletName: string = '';
  stockTicker: string = '';
  stockShares: number = 0;
  averageValue: number = 0;
  currentValue: number = 0;

  constructor(
    public dialogRef: MatDialogRef<AddStockModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient  ) {}

  onSubmit(): void {
    
    this.userId = localStorage.getItem('userId');

    const formData = {
      userId: this.userId,
      walletName: this.walletName,
      mnemonic: this.stockTicker,
      shares: this.stockShares,
      averageValue: this.averageValue,
      currentValue: this.currentValue
    };

    console.log('payload = ' + formData);
    const apiUrl = environment.apiUrl + '/api/Wallet/CreateStockInWallet';

    this.http.post(apiUrl, formData).subscribe(response => {
      console.log('Requisição POST bem-sucedida', response);
    }); 

    this.dialogRef.close();
  }
}
