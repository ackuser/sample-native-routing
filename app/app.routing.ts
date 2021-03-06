import { FirstComponent, SecondComponent } from "./navigation-common";

export const routes = [
    { path: "", redirectTo: "/first", pathMatch: "full" },
    { path: "first", component: FirstComponent },
    { path: "second", component: SecondComponent }
];

export const navigatableComponents = [
  FirstComponent,
  SecondComponent
];
