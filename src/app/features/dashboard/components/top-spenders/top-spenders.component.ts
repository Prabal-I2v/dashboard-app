import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../../core/services/expense.service';
import { IUser } from '../../../../core/models/user.model';

@Component({
  selector: 'app-top-spenders',
  templateUrl: './top-spenders.component.html',
  styleUrls: ['./top-spenders.component.scss']
})
export class TopSpendersComponent implements OnInit {
  topSpenders: IUser[] = [];
  timeOptions: any[] = [{label : 'this year'}, { label: 'month' }, { label: 'year' }]
  timeFrame: string = "month";
  
  constructor(private expenseService: ExpenseService) {}
  
  ngOnInit(): void {
    this.loadTopSpenders();
  }
  
  loadTopSpenders(): void {
    this.expenseService.getTopSpendingUsers().subscribe(users => {
      this.topSpenders = users;
    });
  }
  

  onOptionSelect(selectedValue: string) {
    this.timeFrame = selectedValue;
  }
}