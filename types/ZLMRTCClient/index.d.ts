export interface ZLMEndpoint {

  close(): void;
  closeDataChannel(): void;
  sendMsg(data: string): void;

  dispatch(event: string, data: any): void;
  off(event: string, fn: Function): void;
  offAll(): void;
  on(event: string, fn: Function): void;

}

export interface ZLMEndpointOptions {
  /** 是否启用音频 */
  audioEnable: boolean;
  /** 是否输出日志 */
  debug: boolean;
  /** video 元素 */
  element: HTMLVideoElement;
  /** 是否仅查看，不推流 */
  recvOnly: boolean;
  /** 推流分辨率 */
  resolution: {
    w: number;
    h: number;
  };
  /** 是否启用 Simulcast */
  simulcast: boolean;
  /** 是否使用摄像头 */
  useCamera: boolean;
  /**
   * 是否启用数据通道（RTCDataChannel）
   * - 参考：https://developer.mozilla.org/zh-CN/docs/Web/API/RTCDataChannel
   */
  usedatachannel: boolean;
  /** 是否启用视频画面 */
  videoEnable: boolean;
  /** 视频流地址 */
  zlmsdpUrl: string;
}

export interface ZLMEndpointConstructor {
  new(): ZLMEndpoint;
  new(options: ZLMEndpointOptions): ZLMEndpoint;
}

/**
 * ZLMRTCClient.js
 * - version: 1.0.1
 * - build: Mon Mar 27 2023 19:11:59 GMT+0800 (China Standard Time)
 */
export interface ZLMRTCClient {
  Endpoint: ZLMEndpointConstructor;
  Events: {
    WEBRTC_NOT_SUPPORT: string;
    WEBRTC_ICE_CANDIDATE_ERROR: string;
    WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED: string;
    WEBRTC_ON_REMOTE_STREAMS: string;
    WEBRTC_ON_LOCAL_STREAM: string;
    WEBRTC_ON_CONNECTION_STATE_CHANGE: string;
    WEBRTC_ON_DATA_CHANNEL_OPEN: string;
    WEBRTC_ON_DATA_CHANNEL_CLOSE: string;
    WEBRTC_ON_DATA_CHANNEL_ERR: string;
    WEBRTC_ON_DATA_CHANNEL_MSG: string;
    CAPTURE_STREAM_FAILED: string;
  };
}
