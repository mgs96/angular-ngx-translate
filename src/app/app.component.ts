import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isEnglish = true;
  private isDeutsch = false;
  private isSpanish = false;

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  useLanguage(lang: string) {
    this.changeActiveButton(lang);
    this.translate.use(lang);
  }
  changeActiveButton(lang: string) {
    switch (lang) {
      case 'en':
        this.isEnglish = true;
        this.isDeutsch = false;
        this.isSpanish = false;
        break;
      case 'de':
        this.isEnglish = false;
        this.isDeutsch = true;
        this.isSpanish = false;
        break;
      case 'es':
        this.isEnglish = false;
        this.isDeutsch = false;
        this.isSpanish = true;
        break;
      default:
        this.isEnglish = true;
        this.isDeutsch = false;
        this.isSpanish = false;
        break;
    }
  }

}
