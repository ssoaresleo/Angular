import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventsComponent } from './components/events/events.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';

export const routes: Routes = [
  {
    path: '',
    component: FirstComponentComponent,
  },
  {
    path: 'list',
    component: ListRenderComponent,
  },
  {
    path: 'emitter',
    component: EmitterComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'ifrender',
    component: IfRenderComponent,
  },
  {
    path: 'parentdata',
    component: ParentDataComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'twowaybinding',
    component: TwoWayBindingComponent,
  },
  {
    path: 'changenumber',
    component: ChangeNumberComponent,
  },
];
