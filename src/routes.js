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
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

import Vignesh from "views/vignesh.js"
import School from "views/School.js"
import  StudentRegister from  "views/Student Register.js"
import AnbuDetails from "views/Anbu Details.js"
import AravindrajDetails from "views/Aravindraj Details.js"
import BharathiDetails from "views/Bharathi Details.js"
import HariDetails from "views/Hari Details.js"
var routes = [
  {  
    path: "/Student register",
    name: "Student Register",
    rtlName: "لوحة القيادة",
    icon: "fas fa-registered",
    component: StudentRegister,
    layout: "/admin",
  },
  {  
    path: "/anbu details",
    name: "Anbu Details",
    rtlName: "لوحة القيادة",
    icon: "fas fa-user-alt",
    component: AnbuDetails,
    layout: "/admin",
  },
  {  
    path: "/aravindraj details",
    name: "Aravindraj Details",
    rtlName: "لوحة القيادة",
    icon: "fas fa-user-alt",
    component: AravindrajDetails,
    layout: "/admin",
  },
  {  
    path: "/bharathi details",
    name: "Bharathi Details",
    rtlName: "لوحة القيادة",
    icon: "fas fa-user-alt",
    component: BharathiDetails,
    layout: "/admin",
  },
  {  
    path: "/hari details",
    name: "Hari Details",
    rtlName: "لوحة القيادة",
    icon: "fas fa-user-alt",
    component: HariDetails,
    layout: "/admin",
  },
  {  
    path: "/school",
    name: "School",
    rtlName: "لوحة القيادة",
    icon: "fas fa-school",
    component: School,
    layout: "/admin",
  },
  {  
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/vignesh",
    name: "Vignesh",
    rtlName: "لوحة القيادة",
    icon: "fas fa-person-booth", 
    component: Vignesh,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl",
  },
];
export default routes;
