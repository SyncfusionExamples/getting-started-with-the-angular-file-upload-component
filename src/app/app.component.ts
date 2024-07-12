import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploaderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public dropElement?: HTMLElement;
  ngOnInit() {
    this.dropElement = document.getElementById('droparea') as HTMLElement;
  }
  public path: Object = {
    saveUrl:'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove',
    chunkSize: 102400
  }
  title = 'myangularapp';
}
