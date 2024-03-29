// 제목에서 줄 바꿈을 원할 때 \n을 엔터 대신 입력해야 한다.
const elements = [
  {
    portfolioId: 1,
    title: "BIG Naughty - 커피가게 아가씨",
    agency: "H1GHRMUSIC",
    introduction: `
    <p>2월 2일 발매된 BIG Naughty님의 [커피가게 아가씨 Feat.원슈타인] 의</p><p> 디지털 앨범 커버 디자인과 앨범커버에 사용된 소품을 제작했습니다.</p><p>앨범 커버에 사용된 소품은 곡의 비쥬얼 라이저 영상에도 활용되었습니다.</p><p>&nbsp; &nbsp;</p><p><br><br><br>&nbsp;</p><p>Design &amp; Production</p><ul><li>Artwork Design</li><li>Art Prop Production</li></ul>
    `,
    contents: "",
    date: "2022-10-31",
    clipperImageDtos: [
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/01_커피가게 아가씨/COF1.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/01_커피가게 아가씨/COF2.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/01_커피가게 아가씨/COF3.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/01_커피가게 아가씨/COF4.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/01_커피가게 아가씨/COF5.jpg`,
        thumbnail: false,
      },
    ],
  },

  {
    portfolioId: 2,
    title: "BIG Naughty - Bucket List [EP]",
    agency: "H1GERMUSIC",
    introduction: `<p><br>2월 25일 발매된 BIG Naughty 님의 [Buket List]의<br>앨범 커버 디자인과, 피지컬 앨범 디자인을 진행 하였으며<br>앨범 커버에 사용된 소품을 제작하였습니다.<br><br>해당 소품과 아트워크는 성수 미술관과 하이어뮤직의 협업으로<br>2월 24일부터 약 2개월 간 전시를 진행하였습니다.</p><p>&nbsp;</p><p>&nbsp;</p><p>Design &amp; Production</p><ul><li>Artwork Design</li><li>Physical Album Design</li><li>Art Prop Production</li></ul>
    `,
    contents: "대충 내용",
    date: "2021-02-25",
    clipperImageDtos: [
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/02_서동현 버킷리스트/BK1.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/02_서동현 버킷리스트/BK2.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/02_서동현 버킷리스트/BK3.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/02_서동현 버킷리스트/BK4.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/02_서동현 버킷리스트/BK5.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/02_서동현 버킷리스트/BK6.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/02_서동현 버킷리스트/BK7.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/02_서동현 버킷리스트/BK8.jpg`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 3,
    title: "나선 - Underdogma",
    agency: "PlusN Ent",
    introduction: `<p>8월 24일 발매된 나선님의 Underdogma[EP] 의&nbsp;<br>디지털 앨범 커버의 디자인과, 앨범 커버에 사용된 소품을 제작했습니다.<br><br><br><br><br><br>&nbsp;</p>Design &amp; Production<ul><li>Artwork Design</li><li>Art Prop</li></ul>
    `,
    contents: "대충 내용",
    date: "2021-08-24",
    clipperImageDtos: [
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/03_나선 Underdogma/NUD1.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/03_나선 Underdogma/NUD2.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/03_나선 Underdogma/NUD3.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/03_나선 Underdogma/NUD4.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/03_나선 Underdogma/NUD5.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/03_나선 Underdogma/NUD6.jpg`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 4,
    title: "BIG Naughty - STAB\n(Feat. eaJ) (Prod. dress)",
    agency: "H1GERMUSIC",
    introduction: `<p>11월 18일 발매된 BIG Naughty님의 [STAB] 의&nbsp;<br>디지털 앨범 커버의 디자인과 앨범 커버에 사용된 소품을 제작했습니다.<br>앨범 커버에 사용된 소품은 곡의 비쥬얼 라이저 영상에도 활용되었습니다.<br><br>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Design &amp; Production</p><ul><li>Artwork Design</li><li>Art Prop Production</li><li>Visualizer video</li></ul>
    `,
    contents: "대충 내용",
    date: "2022-12-20",
    clipperImageDtos: [
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/04_서동현 STAB/STAB1.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/04_서동현 STAB/STAB2.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/04_서동현 STAB/STAB3.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/04_서동현 STAB/STAB4.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/04_서동현 STAB/STAB5.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/04_서동현 STAB/STAB6.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/04_서동현 STAB/STAB7.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/04_서동현 STAB/STAB8.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/04_서동현 STAB/STAB9.jpg`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 5,
    title: "Owen - Cry",
    agency: "Eclipse Empire",
    introduction: `<p>10월 31일 발매된 Owen님의 정규 앨범 [CRY] 의<br>디지털 앨범 커버와, 타이틀 곡 Jungle 에 사용된&nbsp;<br>뮤직비디오/공연용 헤드피스 소품을 제작했습니다.&nbsp;<br><br>헤드피스의 모델링 파일을 활용 하여 뮤지션의 라이브 방송과<br>팬들이 사용할 수 있는 인스타그램 AR 필터를 제작했습니다.<br>&nbsp;</p><p>&nbsp;</p><p><br><br>&nbsp;</p><p>&nbsp;</p><p>Design &amp; Production</p><ul><li>Art Prop (Headpiece)</li><li>Instagram AR Filtter</li></ul>
    `,
    contents: "대충 내용",
    date: "2022-10-31",
    clipperImageDtos: [
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/05_CRY/CRY1.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/05_CRY/CRY2.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/05_CRY/CRY3.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/05_CRY/CRY4.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/05_CRY/CRY5.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/05_CRY/CRY6.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/05_CRY/CRY7.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/05_CRY/CRY8.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/05_CRY/CRY9.jpg`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 6,
    title: "Marv - MAMA [pre-release]",
    agency: "Eclipse Empire",
    introduction: `<p>12월 20일 발매된 Marv님의 [MAMA]&nbsp;<br>디지털 앨범 커버의 디자인과, Marv님의 음악적 정체성을 담은&nbsp;<br>뮤직비디오/촬영용 헤드피스 소품을 제작했습니다.&nbsp;<br><br>헤드피스의 모델링 파일을 활용 하여 뮤지션의 라이브 방송과&nbsp;<br>팬들이 사용할 수 있는 인스타그램 AR 필터를 제작했습니다.<br><br><br><br><br><br>&nbsp;</p><p>Design &amp; Production</p><ul><li>Artwork Design</li><li>Art Prop (Headpiece)</li><li>Instagram AR Filtter</li></ul>
    `,
    contents: "대충 내용",
    date: "2022-12-20",
    clipperImageDtos: [
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/06_MAMA/MAMA1.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/06_MAMA/MAMA2.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/06_MAMA/MAMA3.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/06_MAMA/MAMA4.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/06_MAMA/MAMA5.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL + `/assets/포트폴리오 사진/06_MAMA/MAMA6.jpg`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 7,
    title: `Khundipanda - The Spoild child\n1st Aniversary MD`,
    agency: "Dejavu Group",
    introduction: `<p>Khundipanda 님의 정규 앨범 [The Spoild Child:균] 의 발매 1주년을<br>기념하여 머천다이즈 3종을(뱃지, 쿠션, 후드) 디자인 및 생산했습니다.<br><br>해당 머천다이즈 중 2종 (뱃지, 쿠션)은 데자부 스토어에서 선 공개되어 판매 되었고<br>후드는 1월 17일에 왓차홀에서 진행 되었던 단독 콘서트에서 판매 되었습니다.<br><br>머천다이즈의 디자인과 생산 뿐만 아니라 해당 단독 콘서트에서&nbsp;<br>사용된 무대 소품또한 제작 하였습니다.<br><br>&nbsp;</p><p>&nbsp;</p><p>Design &amp; Production</p><ul><li>MD Production</li><li>Stage Props Production</li></ul>
    `,
    contents: "대충 내용",
    date: "2023-01-17",
    clipperImageDtos: [
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/07_쿤디판다 MD/KM1.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/07_쿤디판다 MD/KM2.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/07_쿤디판다 MD/KM3.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/07_쿤디판다 MD/KM4.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/07_쿤디판다 MD/KM5.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/07_쿤디판다 MD/KM6.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/07_쿤디판다 MD/KM7.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/07_쿤디판다 MD/KM8.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/07_쿤디판다 MD/KM9.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/07_쿤디판다 MD/KM10.jpg`,
        thumbnail: false,
      },
    ],
  },

  {
    portfolioId: 8,
    title: "Marv - Souly [EP]",
    agency: "Eclipse Empire",
    introduction: `<p>1월 20일 발매된 Marv님의 EP 앨범 [SOULY] 의&nbsp;<br>앨범 전반적인 아트 디렉팅과 디지털 앨범 커버 디자인을 맡았습니다.<br><br>또한 Marv님의 음악적 정체성을 담은 뮤직비디오/촬영용 헤드피스 소품을&nbsp;<br>제작했습니다. 헤드피스 소품은 뮤직 비디오 뿐만 아니라, 공연이나&nbsp;<br>인터뷰 촬영시에도 사용되었습니다.&nbsp;<br><br>헤드피스의 모델링 파일을 활용 하여 뮤지션의 라이브 방송과&nbsp;<br>팬들이 사용할 수 있는 인스타그램 AR 필터를 제작했습니다.<br><br>&nbsp;</p><p>Design &amp; Production</p><ul><li>Art Direction</li><li>Artwork Design</li><li>Art Prop Production</li><li>Instagram AR Filtter</li></ul>
    `,
    contents: "대충 내용",
    date: "2023-01-20",
    clipperImageDtos: [
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/08_SOULY/SOULY1.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/08_SOULY/SOULY2.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/08_SOULY/SOULY3.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/08_SOULY/SOULY4.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/08_SOULY/SOULY5.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/08_SOULY/SOULY6.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/08_SOULY/SOULY7.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/08_SOULY/SOULY8.jpg`,
        thumbnail: false,
      },
    ],
  },
  {
    portfolioId: 9,
    title: "Crew 30 - THE FROST ON YOUR EDGE\nAniversary MD",
    agency: "Dejavu Group",
    introduction: `<p>힙합 크루 Crew 30의 컴필레이션 앨범 [THE FROST ON YOUR EDGE] 의<br>음감회를 기념하여 머천다이즈 1종을 디자인 및 생산 하였습니다.<br><br>해당 머천다이즈는 3월 6일 합정동 ‘데이토나 레코즈’ 에서 진행 되었던<br>음감회에서 판매 되었습니다.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Design &amp; Production</p><ul><li>MD Production</li></ul>
    `,
    contents: "대충 내용",
    date: "2022-10-31",
    clipperImageDtos: [
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/09_30 크루 컴필/3CM1.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/09_30 크루 컴필/3CM2.png`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/09_30 크루 컴필/3CM3.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/09_30 크루 컴필/3CM4.jpg`,
        thumbnail: false,
      },
      {
        fileName:
          process.env.PUBLIC_URL +
          `/assets/포트폴리오 사진/09_30 크루 컴필/3CM5.jpg`,
        thumbnail: false,
      },
    ],
  },
];

// 여기부턴 로컬에서 임의로 만든 포트폴리오 상세페이지 하드코딩 Contents 값
var test1 = (
  <div className="PortfolioContentsContainer">
    <div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Hb2AxEqhX2w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <img
        className="PortfolioContentsImage"
        src={elements[0].clipperImageDtos[1].fileName}
        width={"374px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[0].clipperImageDtos[2].fileName}
        width={"374px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[0].clipperImageDtos[3].fileName}
        width={"374px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[0].clipperImageDtos[4].fileName}
        width={"374px"}
      />
    </div>
  </div>
);

var test2 = (
  <div className="PortfolioContentsContainer">
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[1].clipperImageDtos[1].fileName}
        width={"400px"}
      />
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[1].clipperImageDtos[2].fileName}
          width={"250px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[1].clipperImageDtos[3].fileName}
          width={"250px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[1].clipperImageDtos[4].fileName}
        width={"380px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[1].clipperImageDtos[5].fileName}
        width={"500px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[1].clipperImageDtos[6].fileName}
        width={"380px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[1].clipperImageDtos[7].fileName}
        width={"380px"}
      />
    </div>
  </div>
);

var test3 = (
  <div className="PortfolioContentsContainer">
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[2].clipperImageDtos[1].fileName}
        width={"380px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[2].clipperImageDtos[2].fileName}
        width={"380px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[2].clipperImageDtos[3].fileName}
        width={"380px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[2].clipperImageDtos[4].fileName}
        width={"380px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[2].clipperImageDtos[5].fileName}
        width={"380px"}
      />
    </div>
  </div>
);

var test4 = (
  <div className="PortfolioContentsContainer">
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UZ433Np06vs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[3].clipperImageDtos[1].fileName}
        width={"600px"}
      />
    </div>

    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[3].clipperImageDtos[2].fileName}
          width={"350px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[3].clipperImageDtos[3].fileName}
          width={"350px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[3].clipperImageDtos[4].fileName}
          width={"350px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[3].clipperImageDtos[5].fileName}
          width={"350px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[3].clipperImageDtos[6].fileName}
          width={"350px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[3].clipperImageDtos[7].fileName}
          width={"350px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[3].clipperImageDtos[8].fileName}
        width={"600px"}
      />
    </div>
  </div>
);
var test5 = (
  <div className="PortfolioContentsContainer">
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DFCtPKQUOgA?start=29"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[4].clipperImageDtos[1].fileName}
          width={"340px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[4].clipperImageDtos[2].fileName}
          width={"340px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[4].clipperImageDtos[3].fileName}
        width={"560px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[4].clipperImageDtos[4].fileName}
        width={"560px"}
      />
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[4].clipperImageDtos[5].fileName}
          width={"340px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[4].clipperImageDtos[6].fileName}
          width={"340px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[4].clipperImageDtos[7].fileName}
          width={"340px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[4].clipperImageDtos[8].fileName}
          width={"340px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
  </div>
);

var test6 = (
  <div className="PortfolioContentsContainer">
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[5].clipperImageDtos[1].fileName}
        width={"350px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[5].clipperImageDtos[2].fileName}
        width={"350px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[5].clipperImageDtos[3].fileName}
        width={"350px"}
      />
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[5].clipperImageDtos[4].fileName}
          width={"340px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[5].clipperImageDtos[5].fileName}
          width={"340px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
  </div>
);
var test7 = (
  <div className="PortfolioContentsContainer">
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[6].clipperImageDtos[1].fileName}
          width={"340px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[6].clipperImageDtos[2].fileName}
          width={"340px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[6].clipperImageDtos[3].fileName}
          width={"340px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[6].clipperImageDtos[4].fileName}
          width={"340px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[6].clipperImageDtos[5].fileName}
        width={"600px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[6].clipperImageDtos[6].fileName}
        width={"600px"}
      />
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[6].clipperImageDtos[7].fileName}
          height={"350px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[6].clipperImageDtos[8].fileName}
          height={"350px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[6].clipperImageDtos[9].fileName}
        width={"370px"}
      />
    </div>
  </div>
);
var test8 = (
  <div className="PortfolioContentsContainer">
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/z2xic2SaqsU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[7].clipperImageDtos[1].fileName}
          width={"340px"}
        />
      </div>
      <div>
        <img
          className="PortfolioContentsImage"
          src={elements[7].clipperImageDtos[2].fileName}
          width={"340px"}
          style={{ marginLeft: "30px" }}
        />
      </div>
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[7].clipperImageDtos[3].fileName}
        width={"350px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[7].clipperImageDtos[4].fileName}
        width={"350px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[7].clipperImageDtos[5].fileName}
        width={"350px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[7].clipperImageDtos[6].fileName}
        width={"350px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[7].clipperImageDtos[7].fileName}
        width={"350px"}
      />
    </div>
  </div>
);
var test9 = (
  <div className="PortfolioContentsContainer">
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[8].clipperImageDtos[1].fileName}
        width={"350px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[8].clipperImageDtos[2].fileName}
        width={"350px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[8].clipperImageDtos[3].fileName}
        width={"350px"}
      />
    </div>
    <div>
      <img
        className="PortfolioContentsImage"
        src={elements[8].clipperImageDtos[4].fileName}
        width={"350px"}
      />
    </div>
  </div>
);

elements[0].contents = test1;
elements[1].contents = test2;
elements[2].contents = test3;
elements[3].contents = test4;
elements[4].contents = test5;
elements[5].contents = test6;
elements[6].contents = test7;
elements[7].contents = test8;
elements[8].contents = test9;

const getPortfolios = () => {
  return elements;
};

export default getPortfolios;
