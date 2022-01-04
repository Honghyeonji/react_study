import { useScript } from "../../hooks";
import { useEffect } from "react";
import styled from "styled-components";
import kakaoLogo from "../../assets/images/kakao.png";

const SocialButtonGroup = ({link}) => {
    const sendUrl = window.location.href + link;
    console.log(sendUrl);
    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

    useEffect(() => {
        if (status === "ready" && window.Kakao) {
            // 중복 initialization 방지
            if (!window.Kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                window.Kakao.init("REACT_APP_KAKAO_KEY");
            }
        }
    }, [status]);

    const handleKakaoButton = () => {
        window.Kakao.Link.sendScrap({
            requestUrl: sendUrl,
        });
    };
    

    return (
        <GridContainer>
            나의 결과 공유하기
            <KakaoShareButton onClick={handleKakaoButton}>
				<KakaoIcon src={kakaoLogo}></KakaoIcon>
			</KakaoShareButton>
        </GridContainer>
    )
};

export default SocialButtonGroup;

const GridContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
`;

const KakaoShareButton = styled.a`
	cursor: pointer;
`;

const KakaoIcon = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 24px;
`;