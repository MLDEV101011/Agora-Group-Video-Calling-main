import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "307a724498f64c6290de0fdd0d53d33b";
const token =
  "006a9ff13cd50a54e1bad85fe51a3340b45IAAUsiado1/5xgAXGfXNRPWNbN81qbDa+ZozyOW3u71QoGTNKL8AAAAAEADkBngOQDlLYQEAAQBAOUth";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
