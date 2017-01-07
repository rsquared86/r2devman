import { Component } from '@angular/core';

export class Project {
    id: number;
    name: string;
    lang: string;
    img: string;
    avatar: string;
    link: string;
    description: string;
    featured: boolean;
}

const PROJECTS: Project[] = [
    { id: 1, name: 'Biggest Book', lang: 'Angular, Java', img: '../img/business-cat.jpg', avatar: '../img/business-cat.jpg', link: 'http://www.biggestbook.com', description: '', featured: true },
    { id: 2, name: 'eCommerce', lang: 'C#, ASP.NET, SQL, Dynamics AX', img: 'x', avatar: '', link: '', description: '', featured: false },
    { id: 3, name: 'NativeScript', lang: 'Typescript, Angular2, Javascript', img: 'x', avatar: '', link: '', description: '', featured: true },
    { id: 3, name: 'SkateLife:DD', lang: 'Cocoa, Objective-C', img: 'x', avatar: '', link: '', description: '', featured: false },
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