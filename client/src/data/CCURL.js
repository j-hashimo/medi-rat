import BMI from './img/bmi.jpg';
import Gestation from './img/gestation1.png';
import TwoByTwo from './img/2x2.png';
import LabVariation from './img/calculator-icon-blue-2.png';
import MedCalc from './img/MDCalc_Green_Logo.png';
import INRwarfindosage from './files/INRwarfarindosage.xls';

export default [
  {
    title: "BMI Calculator",
    description: "BMI Calculator and Metric Converter.",
    imageURL: "/img/bmi.jpg",
    imageAlt: "BMI Calculator",
    clickLink: "http://www.medi-mouse.com/bmi.php",
    downloadLink: null,
  },

  {
    title: "Gestational Calculator",
    description: "Based on an average 280 day gestation from the first day of the last menstrual period in a woman with a 28 day cycle.",
    imageURL: '/img/gestation1.png',
    imageAlt: "Gestational Calculator",
    clickLink: "http://www.medi-mouse.com/gest.php",
    downloadLink: null,
  },
  {
    title: "Laboratory Variation Calculator",
    description: "BMJ Interactive - by James McCormack.",
    imageURL: '/img/calculator-icon-blue-2.png',
    imageAlt: "Laboratory Variation Calculator",
    clickLink: "https://www.bmj.com/content/368/bmj.m149",
    downloadLink: null,
  },
  {
    title: "MedCalc",
    description: "Online calculators that use both US and SI units.",
    imageURL: '/img/MDCalc_Green_Logo.png',
    imageAlt: "MedCalc",
    clickLink: "https://www.mdcalc.com/",
    downloadLink: null,
  },
  {
    title: "2x2 Calculator",
    description: "For diagnostic tests.",
    imageURL: '/img/2x2.png',
    imageAlt: "2x2 Calculator",
    clickLink: null,
    downloadLink: "/files/INRwarfarindosage.xls",
  },
];

