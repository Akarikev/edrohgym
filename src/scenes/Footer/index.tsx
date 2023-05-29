import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 pt-16">
      <div className="mx-auto w-5/6 justify-center gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0 ">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maxime
            veritatis doloremque incidunt sint labore modi nisi autem impedit
            quisquam.
          </p>

          <p>&copy; Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5">Lorem, ipsum.</p>
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem ipsum dolor sit. Imperts sas sadims out cer
          </p>
          <p>(233)123-456-7689</p>
        </div>
      </div>

      <div className="mt-16 flex basis-1/4 justify-center md:mb-0">
        Developed by {""}{" "}
        <span className="cursor-pointer font-bold underline hover:animate-bounce">
          {" "}
          @Akarikev
        </span>
      </div>
    </footer>
  );
};

export default Footer;
