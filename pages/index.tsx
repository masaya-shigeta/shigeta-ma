import type { NextPage } from 'next'
import ZennIcon from "../public/icon/zenn.svg";
import GitHubIcon from "../public/icon/github.svg";

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
      <div className="h-full mt-8 text-center">
        <a href="https://zenn.dev/masaya_shigeta" className="inline-block">
          <ZennIcon height={48} width={48} fill={"#3EA8FF"} />
        </a>
      </div>
      <div className="h-full mt-8 text-center">
        <a href="https://github.com/masaya-shigeta" className="inline-block">
          <GitHubIcon height={48} width={48} fill={"white"} />
        </a>
      </div>
    </>
  )
}

export default Home
