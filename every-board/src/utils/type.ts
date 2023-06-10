//게시글 단건조회 타입
interface ContentDetail {
  category: string;
  content: string;
  contentHeartCount: number;
  contentId: number;
  contentImages: ContentImage[];
  createdAt: string;
  modifiedAt: string;
  tag: string;
  title: string;
  userId: number;
  viewCount: number;
}

interface ContentImage {
  contentImageId: number;
  contentId: number;
  contentImgUrl: string;
}

//회원 단건 조회 타입
interface UserInfo {
  userId: number;
  email: string;
  nickname: string;
  password: string;
  profileUrl: null;
  loginType: string;
  createdAt: string;
}

//카테고리
interface CategoryType {
  category: string;
  contents: ContentDetail[];
}

//핫 토픽 타입
interface HotTopic {
  contentId: string;
  title: string;
}
export type { ContentDetail, ContentImage, UserInfo, CategoryType, HotTopic };
