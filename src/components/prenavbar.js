import React from 'react'
import "../styles/prenavbar.css"

const prenavbar = () => {
    const cart=<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M6.208 17.375Q5.708 17.375 5.375 17.042Q5.042 16.708 5.042 16.208Q5.042 15.708 5.375 15.375Q5.708 15.042 6.208 15.042Q6.708 15.042 7.042 15.375Q7.375 15.708 7.375 16.208Q7.375 16.708 7.042 17.042Q6.708 17.375 6.208 17.375ZM13.812 17.375Q13.312 17.375 12.979 17.042Q12.646 16.708 12.646 16.208Q12.646 15.708 12.979 15.375Q13.312 15.042 13.812 15.042Q14.312 15.042 14.646 15.375Q14.979 15.708 14.979 16.208Q14.979 16.708 14.646 17.042Q14.312 17.375 13.812 17.375ZM4.938 4.521 7.167 9.271H12.562Q12.75 9.271 12.896 9.177Q13.042 9.083 13.146 8.917L15.229 5.104Q15.354 4.875 15.25 4.698Q15.146 4.521 14.896 4.521ZM4.604 3.854H15.083Q15.667 3.854 15.948 4.313Q16.229 4.771 15.938 5.229L13.688 9.333Q13.521 9.625 13.24 9.781Q12.958 9.938 12.646 9.938H6.812L5.833 11.75Q5.667 12 5.823 12.292Q5.979 12.583 6.292 12.583H15.021V13.25H6.188Q5.521 13.25 5.177 12.677Q4.833 12.104 5.167 11.521L6.417 9.271L3.375 2.875H1.917V2.208H3.812ZM7.167 9.271H12.958Q12.958 9.271 12.958 9.271Q12.958 9.271 12.958 9.271Z"/></svg>
  return (
    <div className="prenav">
    <div>
        <a href="https://www.mi.com/in/">MI INDIA</a><span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a><span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a><span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE</a>
    </div>
    <div className='right'>
        <a href="https://account.xiaomi.com/fe/service/login/password?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%2525252F%252526sign%25253DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252F%26sign%3DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%2C%2C&_sign=y2X%2BJ2N3%2Fvyraa65wFdQfKWnXao%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">SIGN IN</a><span>|</span>
        <a href="https://in.account.xiaomi.com/fe/service/register?_locale=en_IN&source=&region=IN&sid=i18n_in_pc_pro&qs=callback%3Dhttps%253A%252F%252Fstore.mi.com%252Fin%252Flogin%252Fcallback%253Ffollowup%253Dhttps%25253A%25252F%25252Fwww.mi.com%25252Fin%2526sign%253DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%252C%252C%26sid%3Di18n_in_pc_pro%26_locale%3Den_IN&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&_uRegion=IN">SIGN UP</a><span>|</span>
        <a href="https://store.mi.com/in/cart">{cart} </a>

    </div>

    </div>
  )
}

export default prenavbar