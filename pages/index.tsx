import type { NextPage } from 'next'
import ZennIcon from "../public/icon/zenn.svg";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-12"></div>
      <div className="mx-auto max-w-3xl px-6">
        <div className="w-40 mx-auto">
          <img
            src="/img/profile.png"
            alt="アイコン"
          />
        </div>
      </div>
      <div className="mx-auto my-2 max-w-3xl px-6 text-center text-white text-2xl">
        MASAYA SHIGETA
      </div>
      <div className="h-full mt-5 text-center">
        <a href="https://zenn.dev/masaya_shigeta" className="inline-block">
          <ZennIcon height={48} width={48} fill={"#3EA8FF"} />
        </a>
      </div>
    </>
  )
}

export default Home
