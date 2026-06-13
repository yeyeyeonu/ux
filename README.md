# SCH.Stage Static

GitHub Pages에 올릴 수 있는 HTML/CSS/JS 정적 버전입니다.

## 로컬에서 보기

```bash
cd static-site
python3 -m http.server 8080
```

브라우저에서 `http://127.0.0.1:8080`으로 접속합니다.

## GitHub Pages 배포

1. 이 `static-site` 폴더 안의 파일들을 GitHub 저장소에 올립니다.
2. GitHub 저장소의 `Settings > Pages`로 들어갑니다.
3. `Deploy from a branch`를 선택합니다.
4. 브랜치는 `main`, 폴더는 `/root`를 선택합니다.
5. 생성된 Pages URL로 접속합니다.

서버가 없는 정적 버전이라 회원 정보와 관람평은 브라우저 `localStorage`에 저장됩니다.
