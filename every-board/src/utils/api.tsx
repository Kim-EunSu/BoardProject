import type {
  ContentDetail,
  UserInfo,
  HotTopic,
  CategoryType,
  SearchKeyword,
  contentResponseDto,
} from "./type";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import Content from "@/components/detail_PostCard/Content";
import Category from "@/components/Category";

const BASE_URL =
  "http://ec2-43-202-32-108.ap-northeast-2.compute.amazonaws.com:8080";

//게시글 단건조회
export const useGetDetailContent = (contentId: string | null | undefined) => {
  const getDetailContent = async () => {
    return await axios
      .get<ContentDetail | SearchKeyword>(`${BASE_URL}/contents/${contentId}`)
      .then(res => {
        console.log(
          "디테일 데이터 가져오기 성공",
          `/contents/${contentId}`,
          res.data,
        );
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  };
  const { data, isLoading, isError } = useQuery(
    ["getDetailContent", contentId],
    getDetailContent,
  );
  return { data, isLoading, isError };
};

//사용자 정보 조회
export const useGetUserInfo = (userId: number | undefined | null) => {
  const getUserInfo = async () => {
    return await axios
      .get<UserInfo>(`${BASE_URL}/user/${userId}`)
      .then(res => {
        console.log("사용자 정보 가져오기 성공", `/user/${userId}`, res.data);
        return res.data;
      })
      .catch(err => console.error(err));
  };
  const { data, isLoading, isError } = useQuery(
    ["getuserInfo", userId],
    getUserInfo,
  );
  return { data, isLoading, isError };
};

//카테고리
export const useGetCategoryContent = (category: string | null | undefined) => {
  const getCategoryContent = async () => {
    return await axios
      .get(`${BASE_URL}/contents/category/${category}`)
      .then(res => {
        console.log(
          "카테고리 데이터 가져오기 성공",
          `/contents/category/${category}`,
          res.data?.data.contents,
        );
        return res.data?.data.contents;
      })
      .catch(err => {
        console.error(err);
      });
  };
  const { data, isLoading, isError } = useQuery(
    ["getCategoryContent", category],
    getCategoryContent,
  );
  return { data, isLoading, isError };
};

//핫토픽
export const useGetHotTopic = (endpoint: string) => {
  const getHotTopic = async () => {
    return await axios
      .get<HotTopic[]>(`${BASE_URL}/contents/homepage/${endpoint}`)
      .then(res => {
        console.log(
          "핫토픽 데이터 가져오기 성공",
          `contents/homepage/${endpoint}`,
          res.data,
        );
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  };
  const { data, isLoading, isError } = useQuery(
    ["getHotTopic", endpoint],
    getHotTopic,
  );
  return { data, isLoading, isError };
};

//게시글 검색 기능
export const useGetKeyword = (keyword: string | null | undefined) => {
  const getKeyword = async () => {
    return await axios
      .get<contentResponseDto>(`${BASE_URL}/contents/search?keyword=${keyword}`)
      .then(res => {
        console.log(
          "게시글 검색 성공",
          `contents/search?keyword=${keyword}`,
          res.data?.contentResponseDto,
        );
        return res.data?.contentResponseDto;
      })
      .catch(err => console.error(err));
  };
  const { data, isLoading, isError, refetch } = useQuery(
    ["getKeyword", keyword],
    getKeyword,
  );
  return { data, isLoading, isError, refetch };
};
