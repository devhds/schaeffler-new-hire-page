"use client";

import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import LabelText from "../Text/LabelText";
import { Media } from "@/payload-types";

type VideoContextType = {
  isOpen: boolean;
  videoUrl: string | null;
  openModal: (video: string | null | Media | undefined) => void;
  closeModal: () => void;
};

const videoModalContext = React.createContext<VideoContextType>({
  isOpen: false,
  videoUrl: null,
  openModal: () => null,
  closeModal: () => null,
});

export const VideoModalContext = () => {
  return useContext(videoModalContext);
};

export const VideoModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const openModal = useCallback(
    (video: string | Media | null | undefined) => {
      setIsOpen(true);
      document.body.classList.toggle("modal-open");

      if (typeof video === "string") {
        setVideoUrl(video);
      } else if (video && typeof video === "object" && "url" in video) {
        setVideoUrl(video.url ?? null);
      } else {
        setVideoUrl(null);
      }
    },
    [setVideoUrl, setIsOpen],
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setVideoUrl(null);
    document.body.classList.toggle("modal-open");
  }, [setIsOpen, setVideoUrl]);

  return (
    <videoModalContext.Provider
      value={{
        isOpen,
        videoUrl,
        openModal,
        closeModal,
      }}
    >
      {children}
    </videoModalContext.Provider>
  );
};

const VideoModal = () => {
  const { isOpen, videoUrl, closeModal } = useContext(videoModalContext);

  useEffect(() => {
    /* @ts-expect-error VideoPlayer is an external Lib w/o ts support */
    if (isOpen && window.VideoPlayer !== undefined && videoUrl) {
      /* @ts-expect-error VideoPlayer is an external Lib w/o ts support */
      const result = global.VideoPlayer.Collection.addPlayerById(
        "player_" + videoUrl,
      );

      console.log(result);

      setTimeout(() => {
        try {
          /* @ts-expect-error VideoPlayer is an external Lib w/o ts support */
          const player = global.VideoPlayer.Collection.getPlayerById(
            "player_" + videoUrl,
          );
          if (player) {
            player.play();
          }
        } catch (e) {
          console.error(e);
        }
      }, 800);
    }
  }, [isOpen, videoUrl]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={videoUrl}
          className="fixed left-0 top-0 z-[51] flex w-full items-center justify-center bg-primary-black"
          variants={{
            hidden: {
              opacity: 0,
            },
            shown: {
              opacity: 1,
            },
          }}
          style={{
            height: "100dvh",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          exit="hidden"
          initial="hidden"
          animate="shown"
        >
          {videoUrl && (
            <div className="relative w-full pt-[56.25%]">
              <div
                style={{
                  maxWidth: "calc(100vh * 1.7777777778)",
                }}
                className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-full w-full items-center justify-center"
              >
                <div
                  className="relative left-0 top-0 aspect-video w-full"
                  id={`player_${videoUrl}`}
                  mi24-video-player=""
                  video-id={videoUrl}
                  player-id="3wLm7PLcaKEGoM-ZM5dmGZ"
                  channel-id="28458"
                  config-type="vmpro"
                  flash-path="//e-mi.schaeffler-cdn.com/v2/"
                  api-url="//d-mi.schaeffler-cdn.com/play"
                ></div>
              </div>
            </div>
          )}
          <button
            onClick={closeModal}
            style={{
              borderRadius: "20% / 50%",
            }}
            className="fixed right-6 top-7 z-[51] flex flex-row items-center bg-primary-soft-black px-[18px] py-3 text-primary-white transition duration-[500ms] hover:bg-primary-carbon-grey-100 active:bg-primary-carbon-grey-80 sm:right-3 sm:top-10 xs:right-3 xs:top-10"
          >
            <LabelText
              text={"Close"}
              upperCase
              size="small"
              color="text-primary-white"
              iconEnabled
              iconPosition="end"
              icon="Close"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
