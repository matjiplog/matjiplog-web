import { useNavigate } from "react-router-dom";

export function useNavLink(): navLinkTypes {
  const navigate = useNavigate();

  const locationHref = (
    e: React.MouseEvent<HTMLButtonElement | HTMLImageElement>
  ): void => {
    const { target, currentTarget } = e;
    const href = currentTarget.textContent;

    if (target !== currentTarget) return;

    switch (href) {
      case "맛집 찾기":
        navigate("/search");
        break;
      case "로그":
        navigate("/log");
        break;
      case "나만의 맛집":
        navigate("/mylog");
        break;
      case "로그인":
        navigate("/login");
        break;
      case "로그아웃":
        navigate("/");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return { locationHref };
}

export interface navLinkTypes {
  locationHref: (
    e: React.MouseEvent<HTMLButtonElement | HTMLImageElement>
  ) => void;
}
