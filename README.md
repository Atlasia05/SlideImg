# Slide Img
디자인의 공부도중 이미지 슬라이드의 디자인이 이뻐보여 제작하였습니다.
#### Building for source

active의 제거와 추가를 시키는 코드와 slide를 하는 코드를 제거와 추가하는 코드입니다.

```sh
        active.classList.remove("active"); //active 제거
        pluse.classList.add("active"); //active 제거
        
        let slide = document.querySelector("#imgbox > span > div");

        slide.classList.remove(`box${rightCnt-2}`); //box?-2 제거
        slide.classList.add(`box${rightCnt-1}`);  //box?-1 추가
```

## 예시 이미지

![N|Solid](https://cdn.discordapp.com/attachments/1051040355761537074/1057826869359149199/image.png)

## 잘된점
- 코드를 보지 않고 오로지 실력으로만 기능을 구현하였다.
- 생각했던 그대로 나왔다.
- 색의 조합이 잘 어우려 진다.
## 아쉬운점
- position:absolute를 남발하여 사용한거 같다.
- HTML과 CSS의 전체적인 구조가 이쁘지 않다.
- 코드의 가독성이 떨어지는 문제점이 있다.
- 다음에는 position:absolute를 과도하게 사용하지 말아야겠다.
## 사용 언어
![N|Solid](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![N|Solid](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![N|Solid](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) 
