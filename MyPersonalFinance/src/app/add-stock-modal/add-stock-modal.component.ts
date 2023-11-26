import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-stock-modal',
  template: `
    <h2 mat-dialog-title>Adicionar Ação</h2>
    <mat-dialog-content>
      <!-- Seu formulário para adicionar ações -->
      <form (ngSubmit)="onSubmit()">
        <!-- Adicione campos do formulário conforme necessário -->
        <!-- Exemplo: -->
        <mat-form-field>
          <input matInput placeholder="Mnemônico" [(ngModel)]="stockMnemonic" name="stockMnemonic" required>
        </mat-form-field>

        <mat-form-field>
          <input matInput type="number" placeholder="Cotas" [(ngModel)]="stockShares" name="stockShares" required>
        </mat-form-field>

        <!-- Adicione outros campos conforme necessário -->

        <button mat-raised-button color="primary" type="submit">Adicionar</button>
      </form>
    </mat-dialog-content>
  `,
})
export class AddStockModalComponent {
  stockMnemonic: string = '';
  stockShares: number = 0;

  constructor(
    public dialogRef: MatDialogRef<AddStockModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit(): void {
    // Lógica para adicionar ação ao banco de dados ou à lista de ações da carteira
    // Certifique-se de ajustar conforme necessário

    // Fechar o modal após adicionar ação
    this.dialogRef.close();
  }
}