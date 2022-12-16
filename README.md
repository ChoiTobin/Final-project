# Cmung : 크멍 - 반려동물 케어 서비스 플랫폼
![]()  <br/>
## 🐶 프로젝트 소개 🐱
<details>
<summary>WireFrame</summary>
<div markdown="1">       

![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d485701-a5c3-4775-b17e-07a3b8a566f6%2FGroup_92.png?table=block&id=a6aba688-5b29-47e9-9d6d-954ef0fc1852&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F93ab93fa-37c4-4188-9b03-55802f6abc18%2FGroup_90.png?table=block&id=99b0ad57-1ee1-4eab-b0cc-9141633c9fde&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F11f344b6-a6b1-490c-aef4-f634359eb7f0%2FGroup_91.png?table=block&id=a7ace84b-6c82-44e7-8c3e-d0f4cfbe7467&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe02a8647-9457-4e84-940d-d00b63f2092f%2FGroup_89.png?table=block&id=b88ad5f7-1c2d-4f28-8744-06abccb5226e&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F82c1317d-8978-426f-8339-ef1c26454f56%2FGroup_88.png?table=block&id=524fb72a-d5e2-48f2-9459-4f7521e4dd04&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd54203b8-7927-4887-991c-3252277dbe31%2FGroup_87.png?table=block&id=0ade5b5a-2c5c-4299-a5e9-42996e78eb02&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)

</div>
</details>

<details>
<summary>Project Tree</summary>
<div markdown="1">

  ```
final-project
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ db.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ components
│  │  ├─ element
│  │  │  ├─ Button.jsx
│  │  │  ├─ Grid.js
│  │  │  ├─ Image.jsx
│  │  │  ├─ infinityScroll.js
│  │  │  ├─ input.jsx
│  │  │  ├─ ValidBtnInput.jsx
│  │  │  └─ ValidInput.jsx
│  │  ├─ features
│  │  │  ├─ AddPetInfo.jsx
│  │  │  ├─ AddUserPic.jsx
│  │  │  ├─ Content.jsx
│  │  │  ├─ EditDetail.jsx
│  │  │  ├─ EditPetInfo.jsx
│  │  │  ├─ Form.jsx
│  │  │  ├─ KakaoLogin.js
│  │  │  ├─ MyContent.jsx
│  │  │  ├─ mypageTab.jsx
│  │  │  ├─ NaverLogin.js
│  │  │  ├─ OAuth2RedirectHandler.js
│  │  │  ├─ PetInfo.jsx
│  │  │  ├─ PostList.jsx
│  │  │  ├─ SearchList.jsx
│  │  │  └─ UserInfo.jsx
│  │  ├─ hooks
│  │  │  ├─ useImgUpload.jsx
│  │  │  └─ useInput.jsx
│  │  ├─ Layout
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Header.jsx
│  │  │  └─ Layout.jsx
│  │  └─ modal
│  │     ├─ modal.js
│  │     ├─ modalApply.js
│  │     ├─ modalContainer.js
│  │     └─ useModal.js
│  ├─ img
│  │  ├─ account_circle.svg
│  │  ├─ add-user.png
│  │  ├─ arrow_back.svg
│  │  ├─ chat.svg
│  │  ├─ edit_square.svg
│  │  ├─ home.svg
│  │  ├─ logout.svg
│  │  ├─ online.png
│  │  ├─ pets.png
│  │  ├─ photoIMG.png
│  │  └─ user.png
│  ├─ index.css
│  ├─ index.js
│  ├─ logo.svg
│  ├─ pages
│  │  ├─ chatting
│  │  │  ├─ ChatCard.jsx
│  │  │  ├─ ChatRoomPage.jsx
│  │  │  ├─ ChatSubmitBox.jsx
│  │  │  └─ element
│  │  │     └─ GlobalHeaderChat.jsx
│  │  ├─ Detail.jsx
│  │  ├─ Home.jsx
│  │  ├─ MainLogin.jsx
│  │  ├─ MyPage.jsx
│  │  ├─ Search.jsx
│  │  ├─ SignIn.jsx
│  │  └─ SignUp.jsx
│  ├─ redux
│  │  ├─ config
│  │  │  └─ configStore.js
│  │  └─ modules
│  │     ├─ chattingSlice.js
│  │     ├─ listSlice.js
│  │     ├─ mypageSlice.js
│  │     ├─ postSlice.js
│  │     ├─ searchSlice.js
│  │     └─ userSlice.js
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  └─ shared
│     ├─ Apis.js
│     ├─ Cookie.js
│     ├─ regex.js
│     └─ Router.js
└─ yarn.lock

```
</div>
</details>
<br/>

## 🎯 주요 기능
<!-- ![]() -->
|소셜로그인|무한스크롤|유저페이지|
|------|---|---|
|시연1|시연2|시연3|
<br/>

|채팅목록|1:1 채팅방|만족도 평가|
|------|---|---|
|시연1|시연2|시연3|
<br/>



<!-- ## 📢 개발 포인트 -->
<!-- ![]() -->
<!-- - s -->
<!-- - s -->
<!-- - s  -->

## 🛠️ 기술 스택
<!-- ![]() -->
#### 🖥️ Front-End

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/></a> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/></a> <img src="https://img.shields.io/badge/Create%20React%20App-09D3AC?style=for-the-badge&logo=Create%20React%20App&logoColor=white"/></a> <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=React%20Router&logoColor=white"/></a> <img src="https://img.shields.io/badge/React%20Redux-0088CC?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Redux.js%20Toolkit-4000BF?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/></a>  
<img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled%20components&logoColor=white"/></a> <img src="https://img.shields.io/badge/React%20BootStrap-7952B3?style=for-the-badge&logo=BootStrap&logoColor=white"/></a> <img src="https://img.shields.io/badge/React%20Intersection%20Observer-68BC71?style=for-the-badge&logo=React&logoColor=white"/></a> <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white"/></a>  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
<br/>

#### 🎨 Front-End & Web Design
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/></a>
<br/>

#### 🎚️Back-End
<img src="https://img.shields.io/badge/Java-F80000?style=for-the-badge&logo=Java&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=Spring%20Security&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JWT-FBBA00?style=for-the-badge&logo=JWT&logoColor=white"/></a> <img src="https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=Auth0&logoColor=white"/></a> <img src="https://img.shields.io/badge/Stomp-66595C?style=for-the-badge&logo=Stomp&logoColor=white"/></a> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/></a> <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"/></a> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20RDS-527FFF?style=for-the-badge&logo=Amazon%20RDS&logoColor=white"/></a> <img src="https://img.shields.io/badge/restful%20API-1287B1?style=for-the-badge&logo=restful%20API&logoColor=white"/></a>
<br/>

### 📝 기술스택 및 라이브러리 사용 이유
<!-- ![]() -->
<details>
<summary></summary>
<div markdown="1">

![](0)
</div>
</details>
<details>
<summary>Wirra</summary>
<div markdown="1">

![](0)
</div>
</details>
<details>
<summary></summary>
<div markdown="1">

![](0)
</div>
</details>
<details>
<summary></summary>
<div markdown="1">

![](0)
</div>
</details>
<details>
<summary></summary>
<div markdown="1">

![](0)
</div>
</details>
<details>
<summary></summary>
<div markdown="1">

![](0)
</div>
</details>
<br/>


#### ⚙️ Front-End
|스택 및 라이브러리|Ver|사용이유|
|--------|---|---|
|<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"></a> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"></a> <img src="https://img.shields.io/badge/Create%20React%20App-52e0c4?style=for-the-badge&logo=Create%20React%20App&logoColor=black"></a>|<img src="https://img.shields.io/badge/ES6-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/18.2.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/5.0.1-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|
|<img src="https://img.shields.io/badge/ReactDOM-6fd4e9?style=for-the-badge&logo=React&logoColor=black"></a> <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=React%20Router&logoColor=white">|<img src="https://img.shields.io/badge/18.2.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/6.4.3-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|
|<img src="https://img.shields.io/badge/React%20Cookie-e6be7f?style=for-the-badge&logo=Cookiecutter&logoColor=black">|<img src="https://img.shields.io/badge/4.1.1-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|
|<img src="https://img.shields.io/badge/React%20Redux-4a57bc?style=for-the-badge&logo=Redux&logoColor=white"></a> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"></a> <img src="https://img.shields.io/badge/Redux%20Toolkit-533287?style=for-the-badge&logo=Redux&logoColor=white"></a> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">|<img src="https://img.shields.io/badge/8.0.4-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/8.0.4-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/1.8.6-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/1.2.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|
|<img src="https://img.shields.io/badge/React%20Icons-0088CC?style=for-the-badge&logo=React&logoColor=white"></a> <img src="https://img.shields.io/badge/React%20Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white"></a> <img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">|<img src="https://img.shields.io/badge/4.6.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/2.6.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/5.3.6-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|
|<img src="https://img.shields.io/badge/Websocket-E57000?style=for-the-badge&logo=Binance&logoColor=white"></a> <img src="https://img.shields.io/badge/Sock/Js%20Client-F5455C?style=for-the-badge&logo=Socket.io&logoColor=white"></a> <img src="https://img.shields.io/badge/WebStomp%20Client-41454A?style=for-the-badge&logo=Power%20Virtual%20Agents&logoColor=white">|<img src="https://img.shields.io/badge/1.0.34-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/1.6.1-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/1.2.6-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|
|<img src="https://img.shields.io/badge/Uuid-7fa9cf?style=for-the-badge&logo=SecurityScorecard&logoColor=white">|<img src="https://img.shields.io/badge/9.0.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|
|<img src="https://img.shields.io/badge/Browser%20Image%20Compression-56B366?style=for-the-badge&logo=ProtonVPN&logoColor=white">|<img src="https://img.shields.io/badge/2.0.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|
|<img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=PWA&logoColor=white">|<img src="https://img.shields.io/badge/100.0.0.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|
|<img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=black"></a> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">|<img src="https://img.shields.io/badge/10.1.0-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a> <img src="https://img.shields.io/badge/vercel%20CLI-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|
|<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">|<img src="https://img.shields.io/badge/1.22.19-E8E8E8?style=flat-square&logo=Vitess&logoColor=black"/></a>|---|

<br/>

#### ⚙️ Back-End
|스택 및 라이브러리|Ver|사용이유|
|------|---|---|
|<img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=Spring%20Security&logoColor=white"/></a>|||
|<img src="https://img.shields.io/badge/JWT-FBBA00?style=for-the-badge&logo=JWT&logoColor=white"/></a> <img src="https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=Auth0&logoColor=white"/></a>|||
|<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/></a>|||
|<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"/></a> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/></a>|||
|<img src="https://img.shields.io/badge/Stomp-66595C?style=for-the-badge&logo=Stomp&logoColor=white"/></a>|||
|<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20RDS-527FFF?style=for-the-badge&logo=Amazon%20RDS&logoColor=white"/></a>|||
<br/>

## ⚔️ 트러블슈팅
<!-- ![]() -->
#### 🚀 01) 무한스크롤로 받아온 전체 리스트들이 렌더링이 안됨
- Case : 많은 양의 리스트를 한 번에 받아오기 보다, 여러번 나눠서 GET요청을 받는 것이 효율성이 좋다고 판단해서 구현하던 중에, offsetTop값은 받아 오는데 payload값은 response로 들어오는데, 화면단에 구현하는 과정에서 리스트가 늘어나지 않는 문제 발생
<br/>
- Solve: payload값을 axios를 이용해 thunk함수로 받아온 다음 extra reducer를 통해 스토어에 저장하는 과정에서, 게시글 목록 데이터가 객체 형태로 들어와서 이를 배열 형태로 바꾸고 기존의 리스트에서 추가할 수 있도록 push()를 적용해서 스토어에 저장했다. 
<br/>

#### 🚀 02) 포스트 다중이미지 로딩 과정에서 렌더링 시간이 오래 걸림
- Case : 최대 5장의 사진을 각 상세페이지마다 전부 로딩해야 하는데, 이 과정에서 사용자가 불편함을 느끼지 않고, 로딩시간을 단축해서 퍼포먼스 효율성을 높여야 했다. 게시글 상세 페이지에 게시이미지가 들어가는 부분이 큰데, 크기가 작은 사진만 받을 수도 없는 상황이었다.
<br/>
- Solve : browser-image-compression을 사용해서 클라이언트에서 서버로 보내는 과정에서 사용자로부터 받은 이미지를 최소 1920px, 크기는 최대 1MB를 넘지 않도록 압축해서 form-data에 실어서 보냄.
<br/>

#### 🚀 03) 웹 소켓을 이용한 양방향 통신 과정에서 연결 시도 중 에러 발생
- Case : 기존 채팅 방에서 이전 버튼을 누르고 다시 채팅 방에 들어오고 메시지를 send 했을 때 send 보낸 메시지가 중첩 되어서 나타남
<br/>
- Solve : 채팅 방을 나갔을 때 stomp 연결을 끊어주지 않아서 메시지가 중복해서 쌓이는 현상이 나타남을 인지 하고, useEffect안에 return문을 사용하여 채팅 방을 나갈 때 소켓을 끊는 함수를 사용하여 소켓 통신을 끊음으로서 해결했다
<br/>

#### 🚀 04) 한글 도메인 등록 과정 중, 도메인 주소를 인식하지 못함
- Case : “크멍.com”의 형식으로 한글 도메인으로 구입하여 등록하는 과정에서, 한글을 인코딩해서 인식하지 못하고, 도메인을 등록하려면 오류가 발생해서 등록하지 못함. 또한 gabia에서 구매한 도메인을 vercel domain 설정에서 등록하고 valid confirm받는 과정에서 계속해서 Invalid Configuration이 발생하였다.
<br/>
- Solve : 한글도메인 퓨니코드 변환기를 통해서 한글 도메인을 영어, 숫자, 하이픈(-)으로 이루어진 “xn-”으로 시작하는 퓨니코드(Punicode)의 형태로 변환한 값을 도메인으로 등록하였다. 변환한 도메인을 등록하는 과정에서 DNS 레코드 타입과 값을 “CNAME=cname.vercel-dns.com”, “A=76.76.21.21”로 설정한 다음 valid configuration을 다시 진행하였다.
<br/>

## 🗓️ 프로젝트 기간
<!-- ![]() -->
* 개발기간 : 2022.11.04 - 2022.12.07
* 런칭날짜 : 2022.12.07 (WED)
* 유저 피드백 : 2022.12.07 - 2022.12.14
* 추가 업데이트 : 2022.12.08 - 2022.12.16
<br>

## 🧑🏻‍💻 Team Members 👩🏻‍💻
<!-- ![]() -->
#### 항해 9기 C반 Team02
* Leader - BE / 이도운
* Vice Leader - FE / 최토빈
### Front-End
|FE Leader|Member 1|Member 2|
|------|---|---|
|최토빈|김현진|조민지|
|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F415e997d-fe79-454e-9c05-7a6059179d3e%2Fimage_89.png?id=b34e7261-bea1-44ee-bf08-c29bcdf444b4&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=450&userId=&cache=v2" width="150" height="150"/>|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b33bfbf-270d-48a8-aa39-c026b972a506%2Fimage_90.png?id=1f73a88b-1480-4f64-af36-f02e98e3ab43&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=450&userId=&cache=v2" width="150" height="150"/>|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8f67dbde-f30d-4681-9982-0f1789b90d1f%2Fimage_91.png?id=2fc3ff0e-ebad-422c-998d-356977be5b90&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=370&userId=&cache=v2" width="150" height="150"/>|
<br/>

### Back-End
|BE Leader|Member 1|Member 2|
|------|---|---|
|이도운|김시연|원민재|
|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcdd5c3ba-d7ad-4b2f-8f49-fbc41b0dd95d%2Fimage_97.png?id=a266ccd0-fe95-4f93-8aff-8c61533e48bb&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=420&userId=&cache=v2" width="150" height="150"/>|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff195fb40-811c-4d42-b1bd-6b64bb86dca6%2Fimage_94.png?id=b616aaca-8053-403f-aa45-b78324f4066f&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=400&userId=&cache=v2" width="150" height="150"/>|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd635da3-9194-4b13-b4f0-185ead679378%2Fimage_93.png?id=03bcf0b6-f6cd-4024-9cd9-e7627d093a68&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=400&userId=&cache=v2" width="150" height="150"/>|
<br/>

### Web-Design
|Designer|
|------|
|정미경|
|<img src="https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe5211c3e-2d46-4f5d-a3cf-980baf87cca6%2Fimage_96.png?id=de14087f-0d3a-4667-8dcb-c51b566e45f2&table=block&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=390&userId=&cache=v2" width="150" height="150"/>|
<br/>
