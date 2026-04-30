window.CUSTOM = window.CUSTOM || {};
const CUSTOM = window.CUSTOM;

CUSTOM.UTIL = {
  getDateDiff: (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    const diffDate = date1.getTime() - date2.getTime();

    return Math.abs(diffDate / (1000 * 60 * 60 * 24));
    // Math.abs()를 사용하는 이유는 d1, d2의 순서가 바뀌어 음수가 나올 때도 양수로 변환시켜 주기 위함이다.
  },
  getMonthDiff: (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    const diffDate = date1.getTime() - date2.getTime();

    return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));
  },
  getYearDiff: (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    // 연도 차이를 먼저 구한 뒤, 달/일을 비교하여 정확한 '만' 연수 계산
    return Math.abs(date1.getFullYear() - date2.getFullYear());
  },
};
