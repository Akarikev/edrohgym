import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopofPage: boolean /*= */;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void /*= */;
};

const Navbar = ({ isTopofPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1080px)");
  const navbarBackground = isTopofPage ? "" : "bg-primary-300 drop-shadow";

  const [MenuToggle, setMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div
        className={` ${navbarBackground}  ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" loading="lazy" />

            {/* MediaQueries Starts here */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full `}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page=" Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page=" Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page=" Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page=" Contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div className={`${flexBetween} gap-8 `}>
                  <p>sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become A Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="rounded-full  p-2"
                  onClick={() => setMenuToggled(!MenuToggle)}
                >
                  <Bars3Icon width={25} height={25} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile nav */}
      {!isAboveMediumScreens && MenuToggle && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[72%] bg-gray-50 drop-shadow-xl">
          <div className="flex justify-end">
            <button
              className="close"
              onClick={() => setMenuToggled(!MenuToggle)}
            >
              <XMarkIcon className="h-6 w-6  text-white" />
            </button>
          </div>
          <div className="ml-[20%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page=" Contact us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
