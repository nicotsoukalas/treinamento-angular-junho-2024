import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treinamento-angular-junho-2024';

exibirAlerta(has: string) {
  console.log('MINHA FUNCAO')
  alert(`O Palmeiras ${has} Mundial`);
}

}
