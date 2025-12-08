"use server";

import React from "react";
import VideoModal from "../../../components/context/VideoModalContext";
import Navigation from "../../../components/Navigation/Navigation";
import ContentBlocks from "../../../components/ContentBlocks/ContentBlocks";
import Headlines from "../../../components/Headlines/Headlines";
import GridColumnsLayout from "../../../components/layout/GridColumnsLayout";
import Footer from "../../../components/Footer/Footer";
import { getGlobalData } from "@/app/actions/getGlobalData";
import {
  getAllPageTranslations,
  getCurrentPageData,
} from "@/app/actions/getPagesData";
import { Config } from "@/payload-types";

type Props = Promise<{
  language: Config["locale"];
  name: Config["collections"]["pages"];
}>;

const Page = async ({ params }: { params: Props }) => {
  const { language, name } = await params;

  const pageData = await getCurrentPageData(language, name);
  const mainContent = await getGlobalData(language);
  const currentPageOtherTranslationsSlug = pageData?.id
    ? await getAllPageTranslations(pageData.id, language)
    : {};

  const filteredTranslations: Record<string, string> = {};

  for (const key in currentPageOtherTranslationsSlug) {
    const val = currentPageOtherTranslationsSlug[key];
    if (val !== null && val !== undefined) {
      filteredTranslations[key] = val;
    }
  }

  return (
    pageData &&
    mainContent && (
      <>
        <Navigation
          {...mainContent.navigation}
          textContentOnly={pageData.textContentOnly}
          goBackButtonText={pageData.goBackButtonText}
          specialHrefForTranslation={filteredTranslations}
        />
        {pageData.textContentOnly && pageData.title && (
          <GridColumnsLayout additionalStyles="md:pt-16 lg:pt-16 xl:pt-16 ul:pt-16 sm:pt-2 sm:pb-8 xs:pb-8 md:pb-[72px] lg:pb-20 xl:pb-20 ul:pb-20 xs:pt-2 sm:px-6 md:px-12 lg:px-12 xl:px-20 xs:px-6 ul:px-20">
            <div
              style={{
                gridColumn: "1 / 4",
              }}
            >
              <Headlines
                element="h1"
                text={pageData.title}
                color="text-primary-soft black"
              />
            </div>
          </GridColumnsLayout>
        )}
        <ContentBlocks contentBlocks={pageData.content} />
        <VideoModal />
        <Footer {...mainContent.footer} />
      </>
    )
  );
};

export default Page;
