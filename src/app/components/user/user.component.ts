import { Component, EventEmitter, Injectable, Input, Output, inject } from '@angular/core';
import { operatingsSistems } from '../../interfaces/operating-system';
import { OperatingSystemsService } from '../../core/operating-systems.service';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string = "";
  @Output() greet: EventEmitter<any> = new EventEmitter<string>();
  operativeSystemService: OperatingSystemsService = inject(OperatingSystemsService)
  operatingSystems: operatingsSistems[] = this.operativeSystemService.getOperatingSystems();
  username: string = "Luis";
  doesUserExists: boolean = true;
  
  isEditable: boolean = true;
  onMouseOver(osName: string): void{
    console.log(osName)
  }

  emitToParent(): void{
    this.greet.emit("Hi! I'm your child");
  }
}
