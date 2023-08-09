const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-5 sm:py-10 text-14 sm:text-12 text-center">
      <div className="flex items-center justify-center flex-col sm:flex-row mb-5">
        <a
          className="px-5 sm:border-r sm:border-white mb-2"
          href="/privacy-policy"
        >
          プライバシーポリシー
        </a>
        <a className="px-5 sm:border-r sm:border-white mb-2" href="user-terms">
          ユーザー利用規約
        </a>
        <a className="px-5 sm:border-r sm:border-white mb-2" href="biz-terms">
          登録事業者利用規約
        </a>
        <a
          className="px-5 mb-2"
          href="https://ndigits-corp.vercel.app/"
          target="_blank"
        >
          運営会社
        </a>
      </div>
      <small>© 2023 AND DIGITS, Inc.</small>
    </footer>
  );
};

export default Footer;
