import { Component } from '@angular/core';

  const languages = [{ lang: 'Español', level: 'Nativo' },
    {lang: "Catalán", level: "Nativo"},
    {lang: "Inglés", level: "Intermedio"},

  ];

  const softSkills = [
    'Responsable',
    'Trabajo en equipo',
    'Capacidad de Aprendizaje',
    'Adaptabilidad',
  ];

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  languages = languages;
  softSkills = softSkills;
}
