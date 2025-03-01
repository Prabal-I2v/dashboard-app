import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent {
  @Input() options: { label: string; icon?: string }[] = [];
  @Input() showSelectionValue: boolean = true;
  @Input() selectedOption: string = '';
  @Input() selectedImage: string = '';

  @Output() optionSelected = new EventEmitter<string>();

  @ContentChild('headerTemplate') headerTemplate!: TemplateRef<any>;
  @ContentChild('optionTemplate') optionTemplate!: TemplateRef<any>;
  @ContentChild('footerTemplate') footerTemplate!: TemplateRef<any>;

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.optionSelected.emit(option);
    this.isOpen = false;
  }
}
