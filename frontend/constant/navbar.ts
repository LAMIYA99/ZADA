export const navBarItems = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/menu",
    name: "Menu",
  },
  {
    id: 6,
    path: "/pages",
    icon: true,
    name: "Pages",
    dropdownItems: [
      { id: 1, name: "FAQ's", path: "/faq" },
      { id: 2, name: "Gallery", path: "/gallery" },
      { id: 3, name: "About us", path: "/about" },
      { id: 4, name: "Our Teams", path: "/our-teams" },
      { id: 5, name: "Our History", path: "/our-history" },
      { id: 6, name: "Reservation", path: "/reservation" },
      { id: 7, name: "Testimonial", path: "/testimonial" },
    ]
  },
  {
    id: 3,
    path: "/shop",
    name: "Shop",
  },
  {
    id: 4,
    path: "/blog",
    name: "Blog",
  },
  {
    id: 5,
    path: "/contact",
    name: "Contact us ",
  },
];
