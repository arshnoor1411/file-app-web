import * as R from "ramda";
import { envConfig } from "./envConfig";

export const isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);
export const isPresent = R.complement(isNilOrEmpty);

export const accessTokenCookieKey = "file-im-web-app-access-token";

export const getCookie = (cookieName: string, cookiesString = "") => {
  const name = cookieName + "=";
  const decodedCookie = isPresent(cookiesString)
    ? cookiesString
    : typeof document !== "undefined"
    ? decodeURIComponent(document.cookie)
    : "";
  const cookieArr = decodedCookie.split("; ");
  let res;

  cookieArr.forEach((cookie) => {
    if (cookie.indexOf(name) === 0) res = cookie.substring(name.length);
  });

  return res;
};

export const getTokens = () => {
  const tokens = { accessToken: "" };

  const accessToken = getCookie(accessTokenCookieKey);
  if (isPresent(accessToken)) {
    tokens.accessToken = R.pathOr("", [], accessToken);
  }

  return tokens;
};
