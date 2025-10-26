import { Component, ElementRef, ViewChild } from '@angular/core';

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn") as HTMLButtonElement | null;
  const mobileMenu = document.getElementById("mobile-menu") as HTMLElement | null;
  const openIcon = document.getElementById("menu-open-icon") as SVGSVGElement | null;
  const closeIcon = document.getElementById("menu-close-icon") as SVGSVGElement | null;

  if (!menuBtn || !mobileMenu || !openIcon || !closeIcon) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
});


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})


export class Navbar {

}
