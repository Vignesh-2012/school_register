/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import  StudentRegister from  "views/Student Register.js"
import AnbuDetails from "views/Anbu Details.js"
import AravindrajDetails from "views/Aravindraj Details.js"
import BharathiDetails from "views/Bharathi Details.js"
import HariDetails from "views/Hari Details.js"
var routes = [
  {  
    path: "/studentregister",
    name: "Student Register",
    rtlName: "لوحة القيادة",
    icon: "fas fa-registered",
    component: StudentRegister,
    layout: "/admin",
  },
  {  
    path: "/anbu_details",
    name: "Anbu Details",
    rtlName: "لوحة القيادة",
    icon: "fas fa-user-alt",
    component: AnbuDetails,
    layout: "/admin",
  },
  {  
    path: "/aravindraj_details",
    name: "Aravindraj Details",
    rtlName: "لوحة القيادة",
    icon: "fas fa-user-alt",
    component: AravindrajDetails,
    layout: "/admin",
  },
  {  
    path: "/bharathi_details",
    name: "Bharathi Details",
    rtlName: "لوحة القيادة",
    icon: "fas fa-user-alt",
    component: BharathiDetails,
    layout: "/admin",
  },
  {  
    path: "/hari_details",
    name: "Hari Details",
    rtlName: "لوحة القيادة",
    icon: "fas fa-user-alt",
    component: HariDetails,
    layout: "/admin",
  },
];
export default routes;
