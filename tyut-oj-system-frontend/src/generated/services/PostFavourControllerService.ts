import type {
  BaseResponse_int_,
  BaseResponse_Page_PostVO_,
  CancelablePromise,
  PostFavourAddRequest,
  PostFavourQueryRequest,
  PostQueryRequest,
} from "@/generated";
import { OpenAPI } from "@/generated";
import { request as __request } from "../core/request";

export class PostFavourControllerService {
  /**
   * doPostFavour
   * @param postFavourAddRequest postFavourAddRequest
   * @returns BaseResponse_int_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static doPostFavourUsingPost(
    postFavourAddRequest: PostFavourAddRequest
  ): CancelablePromise<BaseResponse_int_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post_favour/",
      body: postFavourAddRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listFavourPostByPage
   * @param postFavourQueryRequest postFavourQueryRequest
   * @returns BaseResponse_Page_PostVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listFavourPostByPageUsingPost(
    postFavourQueryRequest: PostFavourQueryRequest
  ): CancelablePromise<BaseResponse_Page_PostVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post_favour/list/page",
      body: postFavourQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listMyFavourPostByPage
   * @param postQueryRequest postQueryRequest
   * @returns BaseResponse_Page_PostVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listMyFavourPostByPageUsingPost(
    postQueryRequest: PostQueryRequest
  ): CancelablePromise<BaseResponse_Page_PostVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post_favour/my/list/page",
      body: postQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
