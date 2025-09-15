import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Info } from "./components/info/info";
import { Timeline } from './components/timeline/timeline';
import { Footer } from './components/footer/footer'
import { Proyectos } from './components/proyectos/proyectos'
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Info, Timeline, Proyectos, Footer, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
