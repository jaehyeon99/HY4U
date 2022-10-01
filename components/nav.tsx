import { useEffect } from "react";
import { updateToken } from "../utils/api";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

interface navProps {
  title: string;
}

function MainNav({ title }: navProps) {
  const router = useRouter();
  // const [access_token, _] = useCookies(["access_token"]);
  // console.log(access_token);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    updateToken(access_token);
  }, []);

  return (
    <div className="bg-[#0E4A84] h-[60px] flex justify-between p-3.5 sticky top-0 z-50">
      <div className="m-1.5">
        {title === "logo" ? (
          <svg
            onClick={() => {
              router.push("../");
            }}
            width="79"
            height="20"
            viewBox="0 0 79 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.60273 9.35C7.15273 7.425 7.70273 5.325 8.17774 3.3H8.30273C8.82773 5.3 9.32774 7.425 9.90273 9.35L10.4527 11.375H6.05273L6.60273 9.35ZM0.202734 19H3.95273L5.25273 14.25H11.2527L12.5527 19H16.4277L10.4777 0.474999H6.12773L0.202734 19ZM22.8684 19.35C27.1434 19.35 29.6684 16.775 29.6684 13.75C29.6684 11.075 28.1934 9.65 25.9434 8.725L23.5184 7.7C21.9434 7.075 20.6434 6.6 20.6434 5.275C20.6434 4.05 21.6684 3.325 23.2934 3.325C24.8184 3.325 26.0434 3.875 27.2184 4.85L29.0934 2.525C27.5934 0.999999 25.4434 0.15 23.2934 0.15C19.5434 0.15 16.8934 2.475 16.8934 5.5C16.8934 8.2 18.7684 9.7 20.6434 10.475L23.1184 11.525C24.7684 12.225 25.8934 12.65 25.8934 14.025C25.8934 15.325 24.8684 16.15 22.9434 16.15C21.3184 16.15 19.5684 15.325 18.2434 14.1L16.1184 16.65C17.9184 18.375 20.3934 19.35 22.8684 19.35ZM36.7551 19.35C41.0301 19.35 43.5551 16.775 43.5551 13.75C43.5551 11.075 42.0801 9.65 39.8301 8.725L37.4051 7.7C35.8301 7.075 34.5301 6.6 34.5301 5.275C34.5301 4.05 35.5551 3.325 37.1801 3.325C38.7051 3.325 39.9301 3.875 41.1051 4.85L42.9801 2.525C41.4801 0.999999 39.3301 0.15 37.1801 0.15C33.4301 0.15 30.7801 2.475 30.7801 5.5C30.7801 8.2 32.6551 9.7 34.5301 10.475L37.0051 11.525C38.6551 12.225 39.7801 12.65 39.7801 14.025C39.7801 15.325 38.7551 16.15 36.8301 16.15C35.2051 16.15 33.4551 15.325 32.1301 14.1L30.0051 16.65C31.8051 18.375 34.2801 19.35 36.7551 19.35ZM45.5807 19H49.2807V0.474999H45.5807V19ZM58.1076 19.35C62.3826 19.35 64.9076 16.775 64.9076 13.75C64.9076 11.075 63.4326 9.65 61.1826 8.725L58.7576 7.7C57.1826 7.075 55.8826 6.6 55.8826 5.275C55.8826 4.05 56.9076 3.325 58.5326 3.325C60.0576 3.325 61.2826 3.875 62.4576 4.85L64.3326 2.525C62.8326 0.999999 60.6826 0.15 58.5326 0.15C54.7826 0.15 52.1326 2.475 52.1326 5.5C52.1326 8.2 54.0076 9.7 55.8826 10.475L58.3576 11.525C60.0076 12.225 61.1326 12.65 61.1326 14.025C61.1326 15.325 60.1076 16.15 58.1826 16.15C56.5576 16.15 54.8076 15.325 53.4826 14.1L51.3576 16.65C53.1576 18.375 55.6326 19.35 58.1076 19.35ZM70.0223 19H73.7223V3.575H78.9723V0.474999H64.8223V3.575H70.0223V19Z"
              fill="white"
            />
          </svg>
        ) : (
          <div className="flex flex-row items-center space-x-[18px] pl-1">
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15L1 8L8 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold text-[18px] text-white">{title}</span>
          </div>
        )}
      </div>
      <div className="mt-1.5">
        <span className="text-[16px] text-white">한양대학교 ERICA</span>
      </div>
    </div>
  );
}

export default MainNav;
