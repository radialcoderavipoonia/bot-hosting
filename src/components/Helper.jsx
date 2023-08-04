import starterbusinessenterpriseimg from "../assets/images/png/starter_pricing_box.png";
import righticon from "../assets/images/png/righticon.png";
import righticongray from "../assets/images/png/righticongray.png";
import clientstars from "../assets/images/webp/5Stars.webp";
import california from "../assets/images/webp/california.webp";
import profileimg1 from "../assets/images/webp/customer_img1.webp";
import profileimg2 from "../assets/images/webp/customer_img2.webp";
import profileimg3 from "../assets/images/webp/customer_img3.webp";
import profileimg4 from "../assets/images/webp/customer_img4.webp";
import flag from "../assets/images/webp/california.webp";
import flagGermany from "../assets/images/webp/flag_germany.webp";
import flagUk from "../assets/images/webp/flag_uk.webp";
import flagAus from "../assets/images/webp/flag_aus.webp";
import imgna from "../assets/images/webp/feature_card_img1.webp";
import imgenterprise from "../assets/images/webp/feature_card_img2.webp";
import imgjava from "../assets/images/webp/feature_card_img3.webp";
import imgcustom from "../assets/images/webp/feature_card_img4.webp";
import imgscheduled from "../assets/images/webp/feature_card_img5.webp";
import imgunmetered from "../assets/images/webp/feature_card_img6.webp";
import imghour from "../assets/images/webp/feature_card_img7.webp";
import imgfree from "../assets/images/webp/feature_card_img8.webp";
import imgdiscord from "../assets/images/webp/feature_card_img9.webp";
import imgcreator from "../assets/images/webp/feature_card_img10.webp";
import imgbuilt from "../assets/images/webp/feature_card_img11.webp";
import imgfull from "../assets/images/webp/feature_card_img12.webp";
import miniimgone from "../assets/images/webp/modpack_card_img1.webp";
import miniimgtwo from "../assets/images/webp/modpack_card_img2.webp";
import miniimgthree from "../assets/images/webp/modpack_card_img3.webp";
import miniimgfour from "../assets/images/webp/modpack_card_img4.webp";
import miniimgfive from "../assets/images/png/modpack_card_img5.png";
import miniimgsix from "../assets/images/png/modpack_card_img6.png";
import { VerfiedImg } from "./Icons";
import { ArrowImg } from "./Icons";
export const Pricing = [
  {
    id: 1,
    imgicon: starterbusinessenterpriseimg,
    heading: "Starter",
    button: "POPULAR PLAN",
    include: "Whats Included :",
    rightimgicon: righticon,
    allbasic: "All basic CRM features",
    contacts: "Up to 10,000 contacts",
    rightimgicongray: righticongray,
    normalsupport: "Normal support",
    mobileapp: "Mobile app",
    dollar: "$99.00",
    spanmonth: "/ Month",
    getstartedbutton: "Get Started",
    nocreditcard: "No credit card required",
  },
  {
    id: 2,
    imgicon: starterbusinessenterpriseimg,
    heading: "Business",
    button: "POPULAR PLAN",
    include: "Whats Included :",
    rightimgicon: righticon,
    allbasic: "All basic CRM features",
    contacts: "Up to 10,000 contacts",
    rightimgicongray: righticongray,
    normalsupport: "Normal support",
    mobileapp: "Mobile app",
    dollar: "$99.00",
    spanmonth: "/ Month",
    getstartedbutton: "Get Started",
    nocreditcard: "No credit card required",
  },
  {
    id: 3,
    imgicon: starterbusinessenterpriseimg,
    heading: "Enterprise",
    button: "POPULAR PLAN",
    include: "Whats Included :",
    rightimgicon: righticon,
    allbasic: "All basic CRM features",
    contacts: "Up to 10,000 contacts",
    rightimgicongray: righticongray,
    normalsupport: "Normal support",
    mobileapp: "Mobile app",
    dollar: "$99.00",
    spanmonth: "/ Month",
    getstartedbutton: "Get Started",
    nocreditcard: "No credit card required",
  },
];
export const Clients = [
  {
    id: 1,
    fivestarts: clientstars,
  },
];
export const Facebook = () => {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z"
        fill="white"
      />
    </svg>
  );
};
// our location**********************************************
export const Location = [
  {
    id: 1,
    imgflag: flag,
    paracountryname: "Los Angeles, California",
    textms: "240ms",
  },

  {
    id: 2,
    imgflag: flag,
    paracountryname: "Miami, Florida",
    textms: "180ms",
  },
  {
    id: 3,
    imgflag: flag,
    paracountryname: "Dallas, Texas",
    textms: "240ms",
  },
  {
    id: 4,
    imgflag: flagGermany,
    paracountryname: "Falkenstein, Germany",
    textms: "240ms",
  },
  {
    id: 5,
    imgflag: flagUk,
    paracountryname: "London, UK",
    textms: "240ms",
  },
  {
    id: 6,
    imgflag: flagAus,
    paracountryname: "Sydney, Australia",
    textms: "240ms",
  },
]
export const Features = [
  {
    id: 1,
    featurescardimg: imgna,
    featurepara: "NA & EU LOCATIONS",
    arrow: ArrowImg,
  },
  {
    id: 2,
    featurescardimg: imgenterprise,
    featurepara: "ENTERPRISE HARDWARE",
    arrow: ArrowImg,
  },
  {
    id: 3,
    featurescardimg: imgjava,
    featurepara: "JAVA 8, 11, 16 & 17 SUPPORT",
    arrow: ArrowImg,
  },
  {
    id: 4,
    featurescardimg: imgcustom,
    featurepara: "CUSTOM GAME CONTROL PANEL",
    arrow: ArrowImg,
  },
  {
    id: 5,
    featurescardimg: imgscheduled,
    featurepara: "SCHEDULED TASKS",
    arrow: ArrowImg,
  },
  {
    id: 6,
    featurescardimg: imgunmetered,
    featurepara: "UNMETERED STORAGE",
    arrow: ArrowImg,
  },
  {
    id: 7,
    featurescardimg: imghour,
    featurepara: "72 HOUR MONEY BACK POLICY",
    arrow: ArrowImg,
  },
  {
    id: 8,
    featurescardimg: imgfree,
    featurepara: "FREE MYSQL DATABASE",
    arrow: ArrowImg,
  },
  {
    id: 9,
    featurescardimg: imgdiscord,
    featurepara: "24/7 DISCORD SUPPORT",
    arrow: ArrowImg,
  },
  {
    id: 10,
    featurescardimg: imgcreator,
    featurepara: "FREE SUBDOMAIN CREATOR",
    arrow: ArrowImg,
  },
  {
    id: 11,
    featurescardimg: imgbuilt,
    featurepara: "BUILT IN FIREWALL MANAGER",
    arrow: ArrowImg,
  },
  {
    id: 12,
    featurescardimg: imgfull,
    featurepara: "FULL FTP ACCESS",
    arrow: ArrowImg,
  },
];
export const Modpack = [
  {
    id: 1,
    minicraftimg: miniimgone,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
  {
    id: 2,
    minicraftimg: miniimgtwo,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
  {
    id: 3,
    minicraftimg: miniimgthree,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
  {
    id: 4,
    minicraftimg: miniimgfour,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
  {
    id: 5,
    minicraftimg: miniimgfive,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
  {
    id: 6,
    minicraftimg: miniimgsix,
    headingminicraft: "Minecraft Vanilla",
    recommended: "2 GB recommended",
    paraminicraft:
      "Minecraft Vanilla is the official Minecraft version from Mojang.",
    dollar: "$49.99",
    popular: "Popular",
    official: "Official",
    getstarted: "Get Started",
  },
];
export const Facebook_logo = () => {
  return (
    <div className="transition_6">
       <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z" fill="white"/>
       </svg>
    </div>
  );
};
export const Insta_logo = () => {
  return (
    <div className="transition_6">
     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.82667 0 5.556 0.00933333 4.70133 0.0493333C1.79467 0.182667 0.181333 1.79467 0.048 4.70133C0.00933333 5.556 0 5.828 0 8C0 10.1733 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79467 15.8187 4.70133 15.952C5.556 15.9907 5.82667 16 8 16C10.1733 16 10.4453 15.9907 11.3 15.952C14.2013 15.8187 15.8213 14.2067 15.952 11.2987C15.9907 10.4453 16 10.1733 16 8C16 5.828 15.9907 5.556 15.952 4.70133C15.8213 1.79867 14.2067 0.181333 11.3 0.0493333C10.4453 0.00933333 10.1733 0 8 0ZM8 1.44267C10.136 1.44267 10.3893 1.45067 11.2333 1.48933C13.4027 1.588 14.4133 2.616 14.5133 4.768C14.5507 5.612 14.5587 5.864 14.5587 8C14.5587 10.136 14.5507 10.3893 14.5133 11.232C14.4133 13.3827 13.404 14.4133 11.2333 14.512C10.3893 14.5493 10.1373 14.5587 8 14.5587C5.864 14.5587 5.61067 14.5507 4.768 14.512C2.59467 14.412 1.588 13.38 1.488 11.232C1.45067 10.3893 1.44133 10.136 1.44133 8C1.44133 5.864 1.45067 5.61067 1.488 4.768C1.58667 2.61467 2.59733 1.58667 4.768 1.488C5.61067 1.44933 5.864 1.44267 8 1.44267ZM3.892 8C3.892 5.73067 5.732 3.892 8 3.892C10.268 3.892 12.108 5.732 12.108 8C12.108 10.2693 10.268 12.108 8 12.108C5.732 12.108 3.892 10.2693 3.892 8ZM8 10.6667C6.52667 10.6667 5.33333 9.47333 5.33333 8C5.33333 6.528 6.52667 5.33333 8 5.33333C9.472 5.33333 10.668 6.52667 10.668 8C10.668 9.47333 9.472 10.6667 8 10.6667ZM11.3093 3.73067C11.3093 3.2 11.74 2.77067 12.2693 2.77067C12.8013 2.77067 13.2307 3.2 13.2307 3.73067C13.2307 4.26133 12.8 4.69067 12.2693 4.69067C11.7387 4.69067 11.3093 4.26 11.3093 3.73067Z" fill="white"/>
</svg>

    </div>
  );
};
export const Twitter_logo = () => {
  return (
    <div className="transition_6">
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2.039C15.405 2.3 14.771 2.473 14.11 2.557C14.79 2.151 15.309 1.513 15.553 0.744C14.919 1.122 14.219 1.389 13.473 1.538C12.871 0.897 12.013 0.5 11.077 0.5C9.261 0.5 7.799 1.974 7.799 3.781C7.799 4.041 7.821 4.291 7.875 4.529C5.148 4.396 2.735 3.089 1.114 1.098C0.831 1.589 0.665 2.151 0.665 2.756C0.665 3.892 1.25 4.899 2.122 5.482C1.595 5.472 1.078 5.319 0.64 5.078C0.64 5.088 0.64 5.101 0.64 5.114C0.64 6.708 1.777 8.032 3.268 8.337C3.001 8.41 2.71 8.445 2.408 8.445C2.198 8.445 1.986 8.433 1.787 8.389C2.212 9.688 3.418 10.643 4.852 10.674C3.736 11.547 2.319 12.073 0.785 12.073C0.516 12.073 0.258 12.061 0 12.028C1.453 12.965 3.175 13.5 5.032 13.5C11.068 13.5 14.368 8.5 14.368 4.166C14.368 4.021 14.363 3.881 14.356 3.742C15.007 3.28 15.554 2.703 16 2.039Z" fill="white"/>
</svg>

    </div>
  );
};
export const Linkin_logo = () => {
  return (
    <div className="transition_6">
       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.59375 6.875C8.59375 7.07896 8.53327 7.27834 8.41995 7.44793C8.30664 7.61752 8.14558 7.7497 7.95714 7.82775C7.76871 7.9058 7.56136 7.92623 7.36131 7.88644C7.16127 7.84664 6.97752 7.74843 6.8333 7.6042C6.68907 7.45998 6.59086 7.27623 6.55106 7.07619C6.51127 6.87614 6.5317 6.66879 6.60975 6.48036C6.6878 6.29192 6.81998 6.13086 6.98957 6.01755C7.15916 5.90423 7.35854 5.84375 7.5625 5.84375C7.836 5.84375 8.09831 5.9524 8.2917 6.1458C8.4851 6.33919 8.59375 6.6015 8.59375 6.875ZM19.5938 3.78125V18.2188C19.5938 18.5834 19.4489 18.9332 19.191 19.191C18.9332 19.4489 18.5834 19.5938 18.2188 19.5938H3.78125C3.41658 19.5938 3.06684 19.4489 2.80898 19.191C2.55112 18.9332 2.40625 18.5834 2.40625 18.2188V3.78125C2.40625 3.41658 2.55112 3.06684 2.80898 2.80898C3.06684 2.55112 3.41658 2.40625 3.78125 2.40625H18.2188C18.5834 2.40625 18.9332 2.55112 19.191 2.80898C19.4489 3.06684 19.5938 3.41658 19.5938 3.78125ZM18.2188 18.2188V3.78125H3.78125V18.2188H18.2188ZM7.5625 8.9375C7.38016 8.9375 7.2053 9.00993 7.07636 9.13886C6.94743 9.2678 6.875 9.44266 6.875 9.625V15.125C6.875 15.3073 6.94743 15.4822 7.07636 15.6111C7.2053 15.7401 7.38016 15.8125 7.5625 15.8125C7.74484 15.8125 7.9197 15.7401 8.04864 15.6111C8.17757 15.4822 8.25 15.3073 8.25 15.125V9.625C8.25 9.44266 8.17757 9.2678 8.04864 9.13886C7.9197 9.00993 7.74484 8.9375 7.5625 8.9375ZM12.7188 8.9375C12.0998 8.93747 11.4951 9.12307 10.9828 9.47031C10.9452 9.30535 10.8481 9.16004 10.7101 9.06219C10.5721 8.96434 10.4028 8.92083 10.2347 8.93998C10.0666 8.95914 9.91143 9.03961 9.79894 9.16599C9.68646 9.29238 9.62452 9.45581 9.625 9.625V15.125C9.625 15.3073 9.69743 15.4822 9.82636 15.6111C9.9553 15.7401 10.1302 15.8125 10.3125 15.8125C10.4948 15.8125 10.6697 15.7401 10.7986 15.6111C10.9276 15.4822 11 15.3073 11 15.125V12.0312C11 11.5754 11.1811 11.1382 11.5034 10.8159C11.8257 10.4936 12.2629 10.3125 12.7188 10.3125C13.1746 10.3125 13.6118 10.4936 13.9341 10.8159C14.2564 11.1382 14.4375 11.5754 14.4375 12.0312V15.125C14.4375 15.3073 14.5099 15.4822 14.6389 15.6111C14.7678 15.7401 14.9427 15.8125 15.125 15.8125C15.3073 15.8125 15.4822 15.7401 15.6111 15.6111C15.7401 15.4822 15.8125 15.3073 15.8125 15.125V12.0312C15.8125 11.2107 15.4866 10.4238 14.9064 9.84364C14.3262 9.26345 13.5393 8.9375 12.7188 8.9375Z" fill="white"/>
</svg>

    </div>
  );
};