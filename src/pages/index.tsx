import { useState } from "react";
import Head from "next/head";
import PhoneInput from "react-phone-input-2";
import pt from "react-phone-input-2/lang/pt.json";
import toast, { Toaster } from "react-hot-toast";

import "react-phone-input-2/lib/style.css";

import { Button } from "../components/Button";

import styles from "./home.module.scss";

export default function Home() {
  const [whats, setWhats] = useState("55");
  const [whatsMessage, setWhatsMessage] = useState("");
  const [whatsLink, setWhatsLink] = useState("");

  function generateLink() {
    const formatWhatsMessage = whatsMessage.replace(/\s/g, "%20");
    const url = `https://wa.me/${whats}?text=${formatWhatsMessage}`;

    setWhatsLink(url);
  }

  function copyWhatsLinkToClipboard() {
    navigator.clipboard.writeText(whatsLink);
    toast.success("Link copiado!");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | WhatsLink - Generator</title>
      </Head>

      <aside className={styles.info}>
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.9786 0C60.6857 0 72.6429 4.95 81.6214 13.95C90.6 22.95 96 34.8857 96 47.5929C96 73.8214 74.1857 95.1643 47.9786 95.1643H47.9571C39.9857 95.1643 32.1643 93.1714 25.2214 89.3786L0 96L6.75 71.3571C2.59286 64.1357 0.407143 55.95 0.407143 47.5714C0.407143 21.3429 21.75 0 47.9786 0ZM27.8357 81.6429C33.9 85.2429 40.8643 87.15 47.9786 87.15C69.7714 87.15 87.9643 69.4072 87.9643 47.5929C87.9857 37.0286 83.4 27.1071 75.9428 19.6286C68.4857 12.15 58.5643 8.03571 48 8.03571C26.1857 8.03571 8.44286 25.7786 8.44286 47.5714C8.44286 55.05 10.5214 62.3143 14.4857 68.6143L15.4286 70.1143L11.4429 84.7071L26.4 80.7857L27.8357 81.6429Z"
            fill="#25D366"
          />
          <path
            d="M47.9786 87.15C40.8643 87.15 33.9 85.2429 27.8357 81.6429L26.4 80.7857L11.4429 84.7071L15.4286 70.1143L14.4857 68.6143C10.5214 62.3143 8.44286 55.05 8.44286 47.5714C8.44286 25.7786 26.1857 8.03571 48 8.03571C58.5643 8.03571 68.4857 12.15 75.9428 19.6286C83.4 27.1071 87.9857 37.0286 87.9643 47.5929C87.9643 69.4072 69.7714 87.15 47.9786 87.15Z"
            fill="#25D366"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.7442 31.2889C50.8763 29.2297 53.7318 28.0903 56.6957 28.116C59.6597 28.1418 62.495 29.3306 64.5909 31.4266C66.6868 33.5225 67.8757 36.3578 67.9014 39.3217C67.9272 42.2857 66.7878 45.1412 64.7286 47.2732L64.6968 47.3055L59.4797 52.5226C58.3338 53.6689 56.9544 54.5556 55.4358 55.1221C53.9171 55.6887 52.2942 55.9219 50.6774 55.8061C49.0605 55.6903 47.4875 55.2282 46.065 54.451C44.6425 53.6738 43.4037 52.5998 42.4328 51.3017C41.5698 50.148 41.8055 48.5132 42.9592 47.6502C44.1129 46.7873 45.7477 47.0229 46.6107 48.1766C47.1335 48.8756 47.8005 49.4539 48.5665 49.8724C49.3325 50.2909 50.1795 50.5397 51.0501 50.6021C51.9207 50.6644 52.7945 50.5388 53.6123 50.2338C54.4301 49.9287 55.1727 49.4513 55.7898 48.834L60.9901 43.6337C62.0898 42.4873 62.698 40.9562 62.6842 39.3671C62.6704 37.7711 62.0302 36.2444 60.9016 35.1158C59.7731 33.9873 58.2464 33.3471 56.6504 33.3332C55.0601 33.3194 53.5279 33.9285 52.3812 35.0298L49.4045 37.9892C48.3827 39.005 46.731 39.0001 45.7152 37.9784C44.6994 36.9567 44.7043 35.305 45.726 34.2892L48.7173 31.3153L48.7442 31.2889Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.5642 40.878C42.0829 40.3114 43.7058 40.0781 45.3226 40.1939C46.9395 40.3097 48.5125 40.7719 49.935 41.5491C51.3575 42.3263 52.5963 43.4003 53.5672 44.6983C54.4302 45.852 54.1945 47.4869 53.0408 48.3498C51.8871 49.2128 50.2523 48.9771 49.3893 47.8234C48.8665 47.1245 48.1995 46.5462 47.4335 46.1277C46.6675 45.7092 45.8205 45.4604 44.9499 45.398C44.0793 45.3356 43.2055 45.4613 42.3877 45.7663C41.5699 46.0714 40.8273 46.5488 40.2102 47.1661L35.0099 52.3663C33.9102 53.5127 33.302 55.0439 33.3158 56.633C33.3296 58.229 33.9698 59.7557 35.0984 60.8843C36.2269 62.0128 37.7536 62.653 39.3496 62.6669C40.9387 62.6807 42.4699 62.0725 43.6163 60.9727L46.5728 58.0163C47.5915 56.9975 49.2433 56.9975 50.262 58.0163C51.2808 59.035 51.2808 60.6868 50.262 61.7055L47.2881 64.6794L47.2558 64.7112C45.1237 66.7704 42.2682 67.9098 39.3043 67.8841C36.3403 67.8583 33.505 66.6694 31.4091 64.5735C29.3132 62.4776 28.1243 59.6423 28.0986 56.6784C28.0728 53.7144 29.2122 50.8589 31.2714 48.7269L31.3032 48.6945L36.5203 43.4775C37.6662 42.3312 39.0456 41.4445 40.5642 40.878Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.9786 0C60.6857 0 72.6429 4.95 81.6214 13.95C90.6 22.95 96 34.8857 96 47.5929C96 73.8214 74.1857 95.1643 47.9786 95.1643H47.9571C39.9857 95.1643 32.1643 93.1714 25.2214 89.3786L0 96L6.75 71.3571C2.59286 64.1357 0.407143 55.95 0.407143 47.5714C0.407143 21.3429 21.75 0 47.9786 0ZM27.8357 81.6429C33.9 85.2429 40.8643 87.15 47.9786 87.15C69.7714 87.15 87.9643 69.4072 87.9643 47.5929C87.9857 37.0286 83.4 27.1071 75.9428 19.6286C68.4857 12.15 58.5643 8.03571 48 8.03571C26.1857 8.03571 8.44286 25.7786 8.44286 47.5714C8.44286 55.05 10.5214 62.3143 14.4857 68.6143L15.4286 70.1143L11.4429 84.7071L26.4 80.7857L27.8357 81.6429Z"
            fill="white"
          />
        </svg>

        <h1>
          Whats<span>Link</span>
          <br />
          <span>Generator</span>
        </h1>

        <h2>Gerador de link para o Whatsapp</h2>

        <ol>
          <li>Entre com seu número do whatsapp.</li>
          <li>Escreva a mensagem padrão que será exibida.</li>
          <li>Clique em &quot;Obter link&quot;.</li>
          <li>Copie o link e utilize como quiser!</li>
        </ol>
      </aside>
      <main className={styles.card}>
        <div className={styles.contain}>
          <div className={`${styles.top} ${whatsLink ? styles.activated : ""}`}>
            <label>Número do Whatsapp</label>
            <PhoneInput
              onChange={(event) => setWhats(event)}
              value={whats}
              containerClass={styles.input}
              country="br"
              localization={pt}
              preferredCountries={["br"]}
            />
            <label>Mensagem:</label>
            <textarea
              placeholder="Escreva aqui sua mensagem"
              value={whatsMessage}
              onChange={(event) => setWhatsMessage(event.target.value)}
            />
            <Button
              title="Gerar link"
              model="generate"
              onClick={generateLink}
            />
          </div>
          <div
            className={`${styles.bottom} ${whatsLink ? styles.activated : ""}`}
          >
            <label>Link</label>
            <input type="text" value={whatsLink} readOnly />
            <Button
              title="Copiar link"
              model="clipboard"
              onClick={copyWhatsLinkToClipboard}
            />
          </div>
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}
