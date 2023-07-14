//image
import Logo from "../assets/logo.jpg";
//icons
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export const Header = () => {
  return (
    <section className="mt-10">
      <div className="hero">
        <div className="hero-content flex-col rounded-lg ">
          <img
            src={Logo}
            alt="Logo"
            className="max-w-sm rounded-full object-fill h-[300px] md:h-[400px] p-4"
          />
          <div>
  
            <p className="py-6 text-2xl font-semibold">
              Conseils en systèmes et logiciel informatiques et comptabilité
              pour les administrateurs de biens
            </p>
            <div className="hidden md:inline-block">
              <p className="md:font-bold text-2xl">Restons connectés :</p>
              <div className="flex flex-row justify-center p-4 ">
                <a
                  target="_blank"
                  href="mailto:
                  girartpro@gmail.com"
                  aria-label="Lien vers email"
                  className="text-[32px] p-4  hover:text-blue-100"
                >
                  <BsFillEnvelopeFill />
                </a>

                <label className="swap hover:text-green-600">
                  <input type="checkbox" name="tel" id="1" />
                  <div className="flex swap-off p-4 text-[30px]  justify-center">
                    <BsFillTelephoneFill />
                  </div>
                  <div className="flex items-center swap-on text-[20px]">
                    06.14.76.47.26
                  </div>
                </label>

                <a
                  target="_blank"
                  href=" https://www.linkedin.com/in/girart-levert-b11b5b7b/"
                  aria-label="Lien vers Linkedin"
                  className="text-[30px] p-4 text-primary hover:text-blue-100"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <details className="dropdown mb-32 md:hidden">
              <summary className="m-1 btn">restons connectés :</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                <li>
                  <a
                    target="_blank"
                    href="mailto:
                    girartpro@gmail.com"
                    aria-label="Lien vers email"
                  >
                    <BsFillEnvelopeFill />
                    girartpro@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+33614764726">
                    <BsFillTelephoneFill /> 06.14.76.47.26
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href=" https://www.linkedin.com/in/girart-levert-b11b5b7b/"
                    aria-label="Lien vers Linkedin"
                  >
                    {" "}
                    <FaLinkedin />
                    Linkedin
                  </a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};
