import { AtomicResultLink, AtomicResultSectionExcerpt, AtomicResultSectionTitle, AtomicResultText } from "@coveo/atomic-react";

const MyDefaultTemplate: React.FC<{}> = () => {
    return (
      <>
        <AtomicResultSectionTitle>
          <AtomicResultLink />
        </AtomicResultSectionTitle>
        <AtomicResultSectionExcerpt>
          <AtomicResultText field="excerpt" />
        </AtomicResultSectionExcerpt>
      </>
    );
  };

  export default MyDefaultTemplate;