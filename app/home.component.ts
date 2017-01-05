import { Component } from '@angular/core';

export class Project {
    id: number;
    name: string;
    lang: string;
}

const PROJECTS: Project[] = [
    { id: 1, name: 'Angular', lang: 'JavaScript' },
    { id: 2, name: 'Ember', lang: 'JavaScript' },
    { id: 3, name: 'Node', lang: 'JavaScript' },
];

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    projects = PROJECTS;
}