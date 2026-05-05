import { useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const axiosPrivate = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    apikey: process.env.EXPO_PUBLIC_SUPABASE_API_KEY,
  },
});

const useAxiosPrivate = () => {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!token) {
          return Promise.reject(new Error("Unauthorized"));
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      (error: AxiosError | any) => {
        if (error?.response?.status === 401) {
          console.log("Unauthorized, logging out...");
          dispatch(resetUser());
          queryClient.clear();
          console.log("User logged out and query cache cleared.");
        }

        return Promise.reject(error);
      },
    );


    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };


  }, [token]);

  return axiosPrivate;
};

export default useAxiosPrivate;
