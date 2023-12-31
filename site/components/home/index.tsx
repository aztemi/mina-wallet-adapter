import { LinkButton } from "@components/buttons";
import style from "./style.module.css";
import { addAssetPrefix } from "@/constant";

function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.textdiv}>
        <h1>Mina Wallet Adapter</h1>
        <p className="nextra-content">Add wallets support to your zkApps with ease 🔥</p>
        <LinkButton href="/docs/intro">View Docs</LinkButton>
      </div>
      <div className={style.imgdiv} style={{ backgroundImage: `url('${addAssetPrefix("/assets/hero.png")}')` }} />
    </div>
  );
}

export function Home() {
  return <Hero />;
}
