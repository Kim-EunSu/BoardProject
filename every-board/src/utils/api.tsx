import type { ContentDetail, UserInfo, HotTopic, CategoryType } from "./type";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import Content from "@/components/detail_PostCard/Content";
import Category from "@/components/Category";

const url = "ec2-43-202-32-108.ap-northeast-2.compute.amazonaws.com:8080";

//게시글 단건조회
export const useGetDetailContent = (contentId: string | null) => {
  const getDetailContent = async () => {
    return await axios
      .get<ContentDetail>(`/contents/${contentId}`)
      .then(res => {
        return res.data;
      });
  };
  const { data, isLoading, isError } = useQuery(
    ["getDetailContent", contentId],
    getDetailContent,
  );
  return { data, isLoading, isError };
};

//사용자 정보 조회
export const useGetUserInfo = (userId: number | undefined) => {
  const getUserInfo = async () => {
    return await axios.get<UserInfo>(`/user/${userId}`).then(res => {
      return res.data;
    });
  };
  const { data, isLoading, isError } = useQuery(
    ["getuserInfo", userId],
    getUserInfo,
  );
  return { data, isLoading, isError };
};

//카테고리
export const useGetCategoryContent = (category: string | null) => {
  const getCategoryContent = async () => {
    return await axios.get(`/contents/category/${category}`).then(res => {
      return res.data?.data.contents;
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
      .get<HotTopic[]>(`contents/homepage/${endpoint}`)
      .then(res => {
        return res.data;
      });
  };
  const { data, isLoading, isError } = useQuery(
    ["getHotTopic", endpoint],
    getHotTopic,
  );
  return { data, isLoading, isError };
};
