import React from 'react'
import { Helmet } from 'react-helmet'
import KakaoShareButton from '../KakaoShareButton'
const Layout = () => {
  return (
    <div className="layout">
      {/* Include Kakao sdk */}
      <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Helmet>
      <KakaoShareButton />
    </div>
  )
}
export default Layout