import { Component, Input } from '@angular/core';
import { Item } from '../item';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [RouterModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  starsArray = [1,2,3,4,5];
  @Input() item!: Item;

  whatsappShareUrl(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.item.name + ' - ' + this.item.link)}`;
  }

  telegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.item.link)}&text=${encodeURIComponent(this.item.name)}`;
  }

}
