import { Component } from '@angular/core';
import uischemaAsset from '../assets/uischema.json';
import schemaAsset from '../assets/schema.json';
import dataAsset from './data';
import { createAjv, rankWith } from '@jsonforms/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ctsjsonforms';
  uischema = uischemaAsset;
  schema = schemaAsset;
  data = dataAsset;
  ajv = createAjv({
    schemaId: 'id',
    allErrors: true
  });
  renderers = [
    ...angularMaterialRenderers,
  ];
}
