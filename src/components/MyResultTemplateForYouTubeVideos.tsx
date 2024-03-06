import { AtomicFormatUnit, AtomicResultImage, AtomicResultLink, AtomicResultNumber, AtomicResultSectionBottomMetadata, AtomicResultSectionTitle, AtomicResultSectionVisual, AtomicText, Result } from "@coveo/atomic-react";

const MyResultTemplateForYouTubeVideos: React.FC<{result: Result}> = ({
    result,
  }) => {
    return (
      <>
        <AtomicResultSectionVisual>
          <AtomicResultImage field="ytthumbnailurl" />
        </AtomicResultSectionVisual>
        <AtomicResultSectionTitle>
          <AtomicResultLink />
        </AtomicResultSectionTitle>
        {result.raw.ytvideoduration !== undefined && (
          <AtomicResultSectionBottomMetadata>
            <AtomicText value="Duration" />
            <AtomicResultNumber field="ytvideoduration">
              <AtomicFormatUnit unit="minute" />
            </AtomicResultNumber>
          </AtomicResultSectionBottomMetadata>
        )}
      </>
    );
  };

  export default MyResultTemplateForYouTubeVideos;