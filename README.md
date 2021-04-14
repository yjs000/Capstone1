# kakao 실행해보기
kakao폴더에 원 그리는 smaple, 좌표(x,y)의 동 구하기 sample이 있습니다.
```
https://apis.map.kakao.com/web/guide/
```
kakao map api 주소입니다. app key등은 여기 참고하여 html파일을 고쳐주시면 됩니다.

## 실행하기
app.js코드를 살펴보면 express를 사용했고, loacalhost:3000에서 실행할 수 있습니다.
```
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'circle.html'));
})
```
```
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'xy_to_address.html'));
})
```
위 코드의 circle.html부분을 바꾸어서 원을 그리거나, 동을 구할 수 있습니다.
원을 그리려면 circle.html을, 동을 구하려면 xy_to_address.html을 사용합니다.

app.js 실행시키기
```
npm start
```
크롬 주소창에 localhost:3000입력하면 지도가 나옵니다.



## 참고한 kakao api sample
* 원 그리기
```
https://apis.map.kakao.com/web/sample/calculateCircleRadius/
```
* x,y좌표를 받아 동 구하기
```
https://apis.map.kakao.com/web/sample/coord2addr/
```

