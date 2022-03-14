import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface SimleTest {
  first: number;
  second: number;
  result?: boolean;
}

@Component({
  selector: 'math-simple-checs',
  templateUrl: './simple-checs.component.html',
  styleUrls: ['./simple-checs.component.scss'],
})
export class SimpleChecsComponent implements OnInit {
  count: SimleTest[] = [];
  responseArray: FormArray = new FormArray([]);
  form: FormGroup = new FormGroup({
    responses: this.responseArray,
  });
  result: string = '';
  correct = 0;
  total = 0;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'equals',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/equals-solid.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'greater',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/greater-than-solid.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'less',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/less-than-solid.svg'
      )
    );
    this.generateTasks();
  }

  generateTasks(): void {
    this.count = [];

    for (let index = 0; index < 10; index++) {
      this.count.push({
        first: Math.floor(Math.random() * 100),
        second: Math.floor(Math.random() * 100),
        result: undefined,
      });
    }
  }

  ngOnInit(): void {
    this.count.forEach((row) =>
      this.responseArray.push(
        new FormControl(null, [
          Validators.required,
          Validators.pattern('[<>=]'),
        ])
      )
    );
  }

  checkAnswer(row: number): boolean {
    if (
      this.responseArray.controls[row].invalid ||
      this.responseArray.controls[row].value === null
    ) {
      return false;
    }

    const val: string = this.responseArray.controls[row].value;
    const item = this.count[row];

    const result: boolean = eval(
      `${item.first} ${val === '=' ? '===' : val} ${item.second}`
    );

    this.count[row].result = result;

    return result;
  }

  hasAnswer(row: number): boolean {
    return typeof this.count[row].result !== 'undefined';
  }

  hasResult(): boolean {
    return this.result.length > 0;
  }

  checkResult(): void {
    let ok = 0;
    this.count.forEach((item, index) => {
      // console.log(index);

      ok = this.checkAnswer(index) ? ok + 1 : ok;
    });

    this.correct = ok;
    this.result = `${ok} верни от ${this.count.length}`;
  }

  generateNew(): void {
    if (this.form.valid) {
      this.total += 1;
    }

    this.generateTasks();
    this.responseArray.controls.forEach((c) => c.reset());
    this.result = '';
  }

  log(what: any): void {
    console.log(what);
  }
}
