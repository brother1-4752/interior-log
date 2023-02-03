# Interior Log

# 아이디어 선정 과정

- 최근 방을 구해, 인테리어에 관심이 많아요. 원래 코딩하는데 시간 투자를 많이 했는데, 어느새 오늘의 집, 이케아와 같은 인테리어 물품들을 보고 있더라고요. 그래서 졸업작품을 인테리어 소품들을 리스트업하고, 구매한 제품은 체크하는 투두리스트를 만들고자 했어요.
- 기능
    
    <aside>
    💡 노마드코더 챌린지 조건 :
    
    1. 실시간 시계
    2. 로컬 스토리지를 사용한 로그인
    3. 로컬 스토리지를 사용한 투두리스트
    4. 랜덤 배경 이미지
    5. 날씨와 위치 (geolocation)
    </aside>
    
    <aside>
    💡 **카테고리 : 수납/정리, 데코/식물, 패브릭**
    
    </aside>
    
    1. 카테고리 박스 아이콘을 만들어, 클릭하면 해당 카테고리 추천 화면으로 넘어가도록 한다.
        
        ![Untitled](Interior%20Log%20e569ea926e984e7ea1cfd2fba607c13e/Untitled.png)
        
        ![Untitled](Interior%20Log%20e569ea926e984e7ea1cfd2fba607c13e/Untitled%201.png)
        
    2. 제품별 이미지 슬라이드형식으로 보여준다**(레퍼런스 참고)**
        
        ![Untitled](Interior%20Log%20e569ea926e984e7ea1cfd2fba607c13e/Untitled%202.png)
        
    3. 쇼핑카트아이콘 클릭시, Things to buy 컨테이너에 list-item으로 추가
        
        ![Untitled](Interior%20Log%20e569ea926e984e7ea1cfd2fba607c13e/Untitled%203.png)
        
    4. 추가된 텍스트를 클릭하면, 관련 링크로 접속할 수 있다.
    5. 맨 앞에 체크박스를 두어, 구매완료 여부를 저장한다.
        - [x]  Finised 컨테이너로 이동
    6. 관련 후기 3개 이미지 밑에 차례대로 보여준다.
    7. 메뉴 사이드바 - 각 카테고리별로 정렬되어 있다.
        1. 해당 카테고리 클릭시, 제품 이미지가 담겨 있는 화면으로 전환된다.
    8. input:text에 원하는 제품 카테고리를 입력하면, 관련 제품이 담긴 이미지 화면으로 전환

![Untitled](Interior%20Log%20e569ea926e984e7ea1cfd2fba607c13e/Untitled%204.png)

#FFDE59 → 로고 노란색 rgb

# 개발 과정 기록

## 작은 팁

1. input:text
    1. transparent로 투명한 border를 요소에 줘, hover에 들썩이는 현상 해결
    
    ![Untitled](Interior%20Log%20e569ea926e984e7ea1cfd2fba607c13e/Untitled%205.png)
    
2. Array.from(NodeList)
    
    ![Untitled](Interior%20Log%20e569ea926e984e7ea1cfd2fba607c13e/Untitled%206.png)
    

## 큰 팁

![Untitled](Interior%20Log%20e569ea926e984e7ea1cfd2fba607c13e/Untitled%207.png)