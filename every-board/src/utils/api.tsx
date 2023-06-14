import type {
  ContentDetail,
  UserInfo,
  HotTopic,
  CategoryType,
  SearchKeyword,
  contentResponseDto,
  Image,
  PostLike,
} from "./type";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const BASE_URL =
  "http://ec2-43-202-32-108.ap-northeast-2.compute.amazonaws.com:8080";
const Authorization =
  "BearereyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W10sInVzZXJuYW1lIjoiZGtzc3VkODI1M0BnbWFpbC5jb20iLCJzdWIiOiJka3NzdWQ4MjUzQGdtYWlsLmNvbSIsImlhdCI6MTY4NjcyMTM5MywiZXhwIjoxNjg2NzIzMTkzfQ.o_PkqikvWyQ9IDpDiCdj1G_J2wzgPd6uKLu8_OHG6L6O-NIko9kxhYGhuzEZid-rkOABoVDzX6RfFbzhFuJh_w";

//게시글 단건조회
export const useGetDetailContent = (
  contentId: string | number | null | undefined,
) => {
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

//외부 이미지 받아오기
export const useGetImg = () => {
  const GetImg = async () => {
    return await axios
      .get<Image[]>(`${BASE_URL}/contents/homepage/image`)
      .then(res => {
        console.log(
          "이미지 받아오기 성공",
          `/contents/homepage/image`,
          res.data,
        );
        return res.data;
      })
      .catch(err => console.error(err));
  };
  const { data, isLoading, isError, refetch } = useQuery(
    ["getKeyword"],
    GetImg,
  );
  return { data, isLoading, isError, refetch };
};

//좋아요 요청
export const usePostLike = (
  userId: number | null | undefined,
  contentId: number | undefined,
) => {
  const queryClient = useQueryClient();
  //MutationFn
  const PostLike = async () => {
    return await axios.post<PostLike, any>(
      `/${userId}/${contentId}/contenthearts`,
      {
        email: "dkssud8253@gmail.com",
        password: "rhaehfdl7&",
      },
      {
        headers: {
          Authorization: `${Authorization}`,
        },
      },
    );
  };

  const { data, mutate } = useMutation(PostLike, {
    // onMutate : mutationFn이 시작되기 전에 작동 즉, api에 요청을 보내기 전에 onMutate 함수 실행
    // Optimistic update (낙관적 업데이트)

    onMutate: async () => {
      // 이전 cache 데이터를 받아옴
      // setQueryData는 querykey를 제거하지 않고 바로 새로운 데이터를 fetching 해옴
      const oldItemData = queryClient.getQueryData(["getDetailContent"]);
      console.log(`olditemData`, oldItemData);
      //update overwrite하지 않기 위해 미리 취소
      queryClient.cancelQueries(["getDetailContent"]);
      // 미리 UI에 적용시켜 놓음
      queryClient.setQueryData(["getDetailContent"], "");
      // 만약 에러나서 롤백 되면 이전 것을 써놓음.
      return () => queryClient.setQueryData(["getDetailContent"], oldItemData);
    },
    onError: (error, variable, rollback) => {
      if (rollback) rollback();
      else console.log(error);
    },
    onSettled: () => {
      //invalidateQueries는 useQuery에서 사용되는 queryKey의 캐시데이터를 제거해준다.
      queryClient.invalidateQueries(["getDetailContent"]);
    },
    onSuccess: res => {
      console.log(res.data);
      return res.data;
    },
  });
  return { data, mutate };
};
