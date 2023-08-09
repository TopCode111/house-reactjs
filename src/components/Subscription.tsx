interface Props {
  id: string;
}

const Subscription: React.FC<Props> = ({ id }) => {
  return (
    <div className="bg-black px-5 py-10 sm:p-20 text-white text-center" id={id}>
      <h2 className="text-20 sm:text-32 font-semibold mb-3 whitespace-break-spaces">
        まずはニュースレター登録
      </h2>
      <p>セカオピが正式リリースを迎えた際にメールでご連絡を差し上げます。</p>
      <iframe
        src="https://embeds.beehiiv.com/57b4b79b-5000-4d78-94aa-e64ed87bdfd5?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        className="mx-auto mt-10 w-full sm:w-1/3 mb-2"
      />
      <small className="text-gray-400">
        メールアドレスをご登録いただくことで、利用規約・プライバシーポリシーに同意したものとみなします。
      </small>
    </div>
  );
};

export default Subscription;
