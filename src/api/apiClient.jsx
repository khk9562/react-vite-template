// api/apiClient.js
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
// 기본 설정
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 요청 타임아웃을 설정
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 할 작업 (예: 토큰 추가)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    // 응답 데이터를 가공할 수 있습니다.
    return response;
  },
  (error) => {
    // 응답 에러 처리
    return Promise.reject(error);
  }
);

export default apiClient;
