import { Component, OnInit } from '@angular/core';

const typedContent = 'a Senior Front End Web Developer';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  typed!: string;
  typedIndex !: number;
  delta!: number;
  sign!: boolean;
  stop!: boolean;

  ngOnInit(): void {

    this.typed = '';
    this.typedIndex = 0;
    this.sign = false;
    this.delta = 1;
    this.stop = false;

    setInterval(() => {
      this.updateData();
    }, 100);

    setInterval(() => {
      this.setFocus();
    }, 400);
  }

  updateData(): void {
    if (this.typedIndex > typedContent.length) {
      setTimeout(() => {
        this.play();
      }, 2000);
      this.stop = true;
      this.delta = -1;
      this.typedIndex += this.delta;
    }
    if (this.typedIndex <= 0) this.delta = 1;
    if (this.stop) return;
    this.typed = typedContent.slice(0, this.typedIndex);
    this.typedIndex += this.delta;
  }

  setFocus(): void {
    this.sign = !this.sign;
  }

  play(): void {
    this.stop = false;
  }
}
