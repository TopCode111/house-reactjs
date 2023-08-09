import Button from "./Button";
import FaqItem from "./FaqItem";
import Guide from "./Guide";
import Guide2 from "./Guide2";
import Section from "./Section";
import estimate from "../assets/images/3_estimate.svg";
import offer from "../assets/images/4_offer.svg";
import chat from "../assets/images/5_chat.svg";
import home from "../assets/images/6_bn_home.svg";
import invoice from "../assets/images/7_bn_invoice.svg";
import accessory from "../assets/images/8_bn_accessory.svg";
import { FAQs } from "../faq";
import Subscription from "./Subscription";
import keyVisual from "../assets/images/key_visual_sp.png";
import { LP_INDEX } from "../const";
import Think from "../assets/images/2_think.svg";

interface Props {
  scrollTo: (id: string) => void;
}

const SPIndex: React.FC<Props> = ({ scrollTo }) => {
  return (
    <div className="max-w-[640px] mx-auto shadow">
      <section className="h-screen bg-gradient">
        <div className="px-5 py-10">
          <h1 className="text-32 font-bold text-black">
            AI見積書分析と
            <br />
            セカンドオピニオン
            <br />
            サービス
          </h1>
          <small className="text-xs text-gray-600">
            特許出願中: 「提案システム、提案プログラム、及び提案方法」
          </small>
          <p className="text-20 mt-5">
            人生の一大出費にフェアネスを。
            <br />
            後悔しない住まいづくりを
            <br />
            セカオピがサポート
          </p>
        </div>
        <img src={keyVisual} alt="" className="absolute right-0 z-40 w-full" />
      </section>
      <section className="bg-black w-full px-5 py-10">
        <div className="text-24 text-white">
          設計施工会社からの見積書を
          <br />
          アップロードするだけ！
          <br />
          AIが減額可能アイデアを
          <br />
          ご提示します。
        </div>
        <div className="text-center mt-10">
          <Button
            text={"まずはニュースレター登録"}
            color={"main"}
            className="mx-auto"
            onClick={() => scrollTo("waitlist-sp")}
          />
        </div>
      </section>
      <Section
        title={"住まいづくり、こんなことに\n困っていませんか？"}
        id={LP_INDEX.problem.id + "-sp"}
      >
        <div className="bg-gray-100 py-5 px-3 mb-3 rounded">
          <b className="text-16">費用と手間を抑えたい</b>
          <p className="text-12 mt-3">
            より生活を有意義に豊かにする部分に手間・時間・お金を掛けたい
            <br />
            相見積りをどう比較していいかわからない
          </p>
        </div>
        <div className="bg-gray-100 py-5 px-3 mb-3 rounded">
          <b className="text-16">納得いく住まいを作りたい</b>
          <p className="text-12 mt-3">
            適正で透明性のある家づくりをしたい
            <br />
            積極的に施主支給を活用したい
          </p>
        </div>
        <div className="bg-gray-100 py-5 px-3 mb-3 rounded">
          <b className="text-16">相談に乗ってもらいたい</b>
          <p className="text-12 mt-3">
            経験のあるフラットな視点でアドバイスがほしい
          </p>
        </div>
        <div className="px-10">
          <img src={Think} alt="" className="" />
        </div>
      </Section>
      <Section
        title={"セカオピが全面的にサポートします"}
        id={LP_INDEX.features.id + "-sp"}
      >
        <div className="mt-10">
          <Guide
            className="mb-10"
            imageSrc={estimate}
            index={1}
            title={
              "住まいづくりの無駄を削減し\nお気に入りの家具家電に囲まれた生活を"
            }
            description={
              <p className="text-black text-14 sm:text-20">
                施工会社やハウスメーカーから既にお見積りを取得していますか？
                <br />
                セカオピにお見積りデータをアップロードすれば独自AIが内容を理解し、使われている商材・部材に関する最新の最安値やより満足度の高い候補を提示します(減額レコメンド機能)。
                <br />
                セカオピのセカンドオピニオンを活用し、本当にお気に入りの家具購入やこだわりの住まいづくりを実現しましょう。
              </p>
            }
            imagePosition={"left"}
          />
          <Guide
            className="mb-10"
            imageSrc={offer}
            index={2}
            title={"専門家からのセカンドオピニオン"}
            description={
              <p className="text-black text-14 sm:text-20">
                そもそもどのような工事が適正か、デザインや素材選びについて悩んでいる方、セカオピに登録されている建築家やインテリアデザイナーに相談してみましょう。信頼する専門家が見つかればお仕事を依頼することも可能です(セカオピニストマッチング機能)。待ってるだけでアドバイスが貰えることも(カウンターオファー機能)！
              </p>
            }
            imagePosition={"left"}
          />
          <Guide
            className="mb-10"
            imageSrc={chat}
            index={3}
            title={"モバイルｘオンラインで気軽に"}
            description={
              <>
                <p className="text-black text-14 sm:text-20">
                  仕事や家事に忙しくてなかなか計画が捗らない。。
                  <br />
                  そんな悩みをお持ちのあなたに、セカオピならオンラインでセカオピニスト=専門家とチャットしたり、見積書をスマホカメラから取り込んでレコメンド案を確認できます。
                  <br />
                  手間がかかる施主支給※もお任せください(施主支給おまかせオプション)。これまで以上にかんたんに管理することができます(見積もりデータ管理機能)。
                  <br />
                  セカオピを利用いただくことで、あなたは本当に住みたい家づくりに時間をお金を注ぐことが出来ます。
                </p>
                <small className="text-12 text-gray-500">
                  ※
                  施主支給...施主が発注・支給し施工だけ業者に依頼することで、費用を抑えて満足度の高める仕組み
                </small>
              </>
            }
            imagePosition={"left"}
          />
        </div>
      </Section>
      <Section title={"こんな方に最適です"} id={LP_INDEX.target.id + "-sp"}>
        <Guide2
          className="mb-10"
          imageSrc={home}
          title={
            "中規模以上(※)の新築物件もしくは\nリノベーション・リフォームを検討している"
          }
          description=""
          subDescription={
            "※新築500万円以上目安、リノベーション・リフォーム\n100万円以上目安"
          }
        />
        <Guide2
          className="mb-10"
          imageSrc={invoice}
          title={"見積書データを持っている"}
          description={
            "すでに複数のリフォーム業者から\n見積もりを発行してもらっている"
          }
        />
        <Guide2
          className="mb-10"
          imageSrc={accessory}
          title={"施主支給を検討している"}
          description={
            "自分でパーツや建材を購入して\n施工会社に取り付けてもらいたい"
          }
        />
      </Section>
      <Section
        title={"FAQ"}
        id={LP_INDEX.faq.id + "-sp"}
        subTitle="※機能限定β版では実装されない機能に関する記述を含みます。"
      >
        {FAQs.map((faq) => (
          <FaqItem
            key={faq.a}
            className="mb-5"
            title={faq.q}
            description={faq.a}
          />
        ))}
      </Section>
      <Subscription id={LP_INDEX.subscribe.id + "-sp"} />
    </div>
  );
};

export default SPIndex;
