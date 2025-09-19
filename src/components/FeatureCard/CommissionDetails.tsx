// app/board-of-directors/page.tsx
import SectionImageWithText from "@/components/SectionImageWithText";
import AboutHighlights from "@/components/FeatureCard/AboutHighlights";
import { commissionData, CardIconName } from './commissionData';


export default function CommissionDetails() {
  return (
      <>
   <div className="mx-auto max-w-full px-5 py-5 sm:px-3">
      <SectionImageWithText
        pageTitle="Commission Details"
        imageSrc="/aboutimage.png"   
        imageAlt="About"
        leftPrimary=""
        leftSecondary=""
        body={
        <>
        </>
        }
      />
    </div>

    </>
  );
}
