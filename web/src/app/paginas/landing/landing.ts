import { Component } from '@angular/core';
import { Base } from "../base/base";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Base],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  id = 'be371c21-a883-4da6-9b5e-652c267b99f4';
}
