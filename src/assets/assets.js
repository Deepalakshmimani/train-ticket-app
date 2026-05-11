import profile_icon from "./profile_icon.png";
import main_banner from "./main-banner1.png";
import white_arrow from "./white_arrow_icon.svg";
import black_arrow from "./black_arrow_icon.svg";
import train1 from "./train1.png";
import train2 from "./train2.png";
import train3 from "./train3.png";
import train4 from "./train4.png";

export const assets={
  profile_icon,
  main_banner,
  white_arrow,
  black_arrow,
  train1,
  train2,
  train3,
  train4
}

export const trains = [
  {
    id: 1,
    trainNo: "12627",
    name: "Chennai Express",

    route: "Chennai → Bangalore",

    departure: "06:00 AM",
    arrival: "12:00 PM",
    duration: "6h 00m",

    price: 450,

    type: "AC Chair Car",

    availableSeats: 32,

    rating: 4.5,

    reason: "💰 Low Price",

    image: train2
  },

  {
    id: 2,
    trainNo: "12711",
    name: "Superfast Express",

    route: "Chennai → Hyderabad",

    departure: "09:00 PM",
    arrival: "06:00 AM",
    duration: "9h 00m",

    price: 600,

    type: "AC Sleeper",

    availableSeats: 18,

    rating: 4.7,

    reason: "⚡ Fastest Route",

    image: train3
  },

  {
    id: 3,
    trainNo: "12675",
    name: "Night Rider",

    route: "Chennai → Coimbatore",

    departure: "10:00 PM",
    arrival: "05:00 AM",
    duration: "7h 00m",

    price: 500,

    type: "Sleeper",

    availableSeats: 25,

    rating: 4.6,

    reason: "🔥 Most Popular",

    image: train1
  },

  // {
  //   id: 4,
  //   trainNo: "12681",
  //   name: "Coimbatore Intercity",

  //   route: "Chennai → Coimbatore",

  //   departure: "02:15 PM",
  //   arrival: "09:30 PM",
  //   duration: "7h 15m",

  //   price: 520,

  //   type: "Non-AC Seater",

  //   availableSeats: 40,

  //   rating: 4.3,

  //   reason: "🛋 Comfortable Journey",

  //   image: train4
  // }
];



export const allTrains = [
  {
    id: 1,
    name: "Express 101",
    from: "Chennai",
    to: "Madurai",
    time: "08:00 AM - 01:30 PM"
  },
  {
    id: 2,
    name: "Superfast 202",
    from: "Trichy",
    to: "Salem",
    time: "09:15 AM - 12:45 PM"
  },
  {
    id: 3,
    name: "Intercity 303",
    from: "Bangalore",
    to: "Coimbatore",
    time: "10:30 AM - 02:15 PM"
  }
];

 