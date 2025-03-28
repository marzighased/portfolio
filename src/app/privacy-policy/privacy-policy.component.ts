import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  currentLang: string = 'en';

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang || 'en';
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  switchLanguage(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
