// components/detail_Post/UserInfo에 사용되는 날짜 포멧 함수
export const useCreatedAtFormat = (createdAt: string | undefined) => {
  if (createdAt === undefined) {
    // undefined일 경우에 대한 처리
    return "Unknown Date";
  }
  const date = new Date(`${createdAt}Z`); // UTC 시간으로 지정 (Z 표기 추가)
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${year}년 ${month}월 ${day}일, ${hours}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return formattedDate;
};
