import { Casposo } from "../models/casposo";

export const MOCK_CASPOSOS: Casposo[] = [
  {
    id: 1,
    name: "Bertin Osborne",
    status: true,
    profession: "Youtuber",
    twitter: "@osbourne",
    picture: "bertin.jpg",
    alternativeText: "Osbourne pointing at you",
    selected: true,
  },
  {
    name: "The Farytale",
    status: false,
    profession: "Influencer",
    twitter: "pending",
    picture: "fary.jpg",
    alternativeText: "The Fary pointing at you",
    id: 2,
    selected: false,
  },
  {
    id: 3,
    name: "Julius Churchs",
    status: true,
    profession: "Java developer",
    twitter: "@julius_churchs",
    picture: "julio.jpg",
    alternativeText: "Churchs pointing at you",
    selected: true,
  },
];
