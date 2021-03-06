"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Project = (function () {
    function Project() {
    }
    return Project;
}());
exports.Project = Project;
var PROJECTS = [
    { id: 1, name: 'Biggest Book', lang: 'Angular, Java', img: '../img/business-cat.jpg', avatar: '../img/business-cat.jpg', link: 'http://www.biggestbook.com', description: '', featured: true },
    { id: 2, name: 'eCommerce', lang: 'C#, ASP.NET, SQL, Dynamics AX', img: 'x', avatar: '', link: '', description: '', featured: false },
    { id: 3, name: 'NativeScript', lang: 'Typescript, Angular2, Javascript', img: 'x', avatar: '', link: '', description: '', featured: true },
    { id: 3, name: 'SkateLife:DD', lang: 'Cocoa, Objective-C', img: 'x', avatar: '', link: '', description: '', featured: false },
];
var HomeComponent = (function () {
    function HomeComponent() {
        this.projects = PROJECTS;
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map