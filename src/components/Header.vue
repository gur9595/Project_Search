<template>
  <header class="pageHeader">
    <div class="searchArea">
      <div class="searchBox">
        <div class="keyword">
          <input type="text" placeholder="검색어 입력" value="플랫폼" />
        </div>
        <button type="submit" class="btnSearch">
          <span class="hidden">검색</span>
        </button>
        <div class="acKeywordBox">
          <ul>
            <li>
              <a href="#"><em>플랫폼</em>1</a>
            </li>
            <li>
              <a href="#"><em>플랫폼</em>2</a>
            </li>
            <li>
              <a href="#"><em>플랫폼</em>3</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="searchOption">
        <label
          ><input type="checkbox" class="hidden" /><span class="txt"
            >결과 내 재검색</span
          ></label
        >
      </div>
    </div>
    <div class="lnb">
      <div class="lnbMenu">
        <ul>
          <li class="on">
            <router-link :to="{ name: 'Body'}">
              전체검색
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Board'}">
              전자결재
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Board'}">
              게시판
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'People'}">
              임직원정보
            </router-link>
          </li>
        </ul>
      </div>
      <div class="lnbMore dropdown">
        <a
          href="#"
          class="dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >더보기</a
        >
        <ul class="dropdown-menu">
          <li><a href="Search_Category.html">일정</a></li>
          <li><a href="Search_Category.html">팀룸</a></li>
          <li><a href="Search_Person.html">동호회</a></li>
        </ul>
      </div>
    </div>
    <div class="filterArea">
      <div class="filterItem">
        <a href="#" class="btnToggle">최신일자순</a>
        <ul class="toggleBox">
          <li class="on"><a href="#">최신일자순</a></li>
          <li><a href="#">정확도순</a></li>
        </ul>
      </div>
      <div class="filterItem">
        <a href="#" class="btnToggle">모든 날짜</a>
        <ul class="toggleBox">
          <li class="on"><a href="#">모든 날짜</a></li>
          <li><a href="#">지난 1시간</a></li>
          <li><a href="#">지난 1일</a></li>
          <li><a href="#">지난 1주</a></li>
          <li><a href="#">지난 1개월</a></li>
          <li><a href="#">지난 1년</a></li>
          <li>
            <a href="#" class="btnPeriod">기간 설정</a>
            <div class="datepickerArea">
              <div class="datepickerBox">
                <input type="text" class="datepicker" />
              </div>
              <div class="datepickerBox">
                <input type="text" class="datepicker" />
              </div>
              <a href="#" class="btnSubmit">적용</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="filterItem">
        <a href="#" class="btnToggle">모든 결과</a>
        <ul class="toggleBox">
          <li class="on"><a href="#">모든 결과</a></li>
          <li><a href="#">제목에서</a></li>
          <li><a href="#">내용에서</a></li>
          <li><a href="#">작성자에서</a></li>
          <li><a href="#">첨부파일명에서</a></li>
          <li><a href="#">첨부내용에서</a></li>
        </ul>
      </div>
      <div class="filterItem">
        <a href="#" class="btnToggle">권한이 있는 문서</a>
        <ul class="toggleBox">
          <li class="on"><a href="#">권한이 있는 문서</a></li>
          <li><a href="#">권한없는문서에서</a></li>
        </ul>
      </div>
    </div>
      <p class="resultMessage">
        검색어 <span class="highlight">&quot;플랫폼&quot;</span>에 대한
        <span class="highlight">307</span>건의 검색 결과입니다.
      </p>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>