import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LikeComponent } from '../like/like.component';
import { CharacterComponent } from '../character/character.component';
import { inject } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [RouterModule, CommonModule, LikeComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {

  starsArray = [1,2,3,4,5];
  visible = true;
  @Input() item!: Item;
  @Output() delete = new EventEmitter<number>(); 


  whatsappShareUrl(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.item.name + ' - ' + this.item.link)}`;
  }

  telegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.item.link)}&text=${encodeURIComponent(this.item.name)}`;
  }

  onDelete(): void {
    this.delete.emit(this.item.id); // Emit the item ID to be deleted
  }

}
