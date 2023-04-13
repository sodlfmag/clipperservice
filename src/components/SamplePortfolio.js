// const element = {
//   src: process.env.PUBLIC_URL + `/assets/portfolios/1.png`,
//   name: "Owen - Cry",
//   agency: "Eclipse Empire",
//   date: "2022-10-31",
// };

const elements = [
  {
    portfolioId: 1,
    title: "BIG naughty - Bucket List",
    agency: "H1GHRMUSIC",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2022-10-31",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/2.png`,
        thumbnail: false,
      },
    ],
  },

  {
    portfolioId: 2,
    title: "Clipper Service",
    agency: "Clip",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2020-11-12",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/3.png`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 3,
    title: "Owen - Cry",
    agency: "Eclipse Empire",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2022-10-31",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/1.png`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 4,
    title: "MARV - MAMA",
    agency: "Eclipse Empire",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2022-12-20",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/5.png`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 5,
    title: "Khundipanda - The Spoild child 1st Aniversary MD",
    agency: "Dejavu group",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2023-01-20",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/4.png`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 6,
    title: "MARV - SOULY",
    agency: "Eclipse Empire",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2023-01-20",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/6.png`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 7,
    title: "BIG naughty - Bucket List",
    agency: "H1GHRMUSIC",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2022-10-31",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/2.png`,
        thumbnail: false,
      },
    ],
  },

  {
    portfolioId: 8,
    title: "Clipper Service",
    agency: "Clip",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2020-11-12",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/3.png`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 9,
    title: "Owen - Cry",
    agency: "Eclipse Empire",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2022-10-31",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/1.png`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 10,
    title: "MARV - MAMA",
    agency: "Eclipse Empire",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2022-12-20",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/5.png`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 11,
    title: "Khundipanda - The Spoild child 1st Aniversary MD",
    agency: "Dejavu group",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2023-01-20",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/4.png`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 12,
    title: "MARV - SOULY",
    agency: "Eclipse Empire",
    introduction: "대충 소개글",
    contents: "대충 내용",
    date: "2023-01-20",
    clipperImageDtos: [
      {
        fileName: process.env.PUBLIC_URL + `/assets/portfolios/6.png`,
        thumbnail: false,
      },
    ],
  },
];

const getPortfolios = () => {
  return elements;
};

export default getPortfolios;
